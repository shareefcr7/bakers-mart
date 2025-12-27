
import fs from 'fs';
import path from 'path';
import { products as initialProducts, categoryData as initialCategories } from './data';

const DB_PATH = path.join(process.cwd(), 'src', 'data', 'db.json');

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  images?: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface Category {
  name: string;
  image: string;
  id?: string; // Adding ID for easier management, though name is unique in original data
}

export interface DBData {
  products: Product[];
  categories: Category[];
}

export function getDB(): DBData {
  if (!fs.existsSync(DB_PATH)) {
    // Seed data
    const seedData: DBData = {
      products: initialProducts,
      categories: initialCategories.map(c => ({ ...c, id: c.name.toLowerCase().replace(/ /g, '-') })),
    };
    fs.writeFileSync(DB_PATH, JSON.stringify(seedData, null, 2));
    return seedData;
  }
  
  try {
    const fileContent = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error reading DB:", error);
    return { products: [], categories: [] };
  }
}

export function saveDB(data: DBData) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// Helper functions
export function getProducts() {
  return getDB().products;
}

export function getProductById(id: string) {
  return getDB().products.find(p => p.id === id);
}

export function addProduct(product: Product) {
  const db = getDB();
  db.products.push(product);
  saveDB(db);
  return product;
}

export function updateProduct(id: string, updates: Partial<Product>) {
  const db = getDB();
  const index = db.products.findIndex(p => p.id === id);
  if (index !== -1) {
    db.products[index] = { ...db.products[index], ...updates };
    saveDB(db);
    return db.products[index];
  }
  return null;
}

export function deleteProduct(id: string) {
  const db = getDB();
  const index = db.products.findIndex(p => p.id === id);
  if (index !== -1) {
    const deleted = db.products.splice(index, 1);
    saveDB(db);
    return deleted[0];
  }
  return null;
}

export function getCategories() {
  return getDB().categories;
}

export function addCategory(category: Category) {
  const db = getDB();
  // Check for duplicates
  if (db.categories.some(c => c.name.toLowerCase() === category.name.toLowerCase())) {
     throw new Error("Category already exists");
  }
  
  if (!category.id) {
      category.id = category.name.toLowerCase().replace(/ /g, '-');
  }
  
  db.categories.push(category);
  saveDB(db);
  return category;
}

export function updateCategory(id: string, updates: Partial<Category>) {
  const db = getDB();
  const index = db.categories.findIndex(c => c.id === id);
  if (index !== -1) {
      // If name changes, we might want to update products too, but for now let's keep it simple
    db.categories[index] = { ...db.categories[index], ...updates };
    saveDB(db);
    return db.categories[index];
  }
  return null;
}

export function deleteCategory(id: string) {
  const db = getDB();
  
  // Check if any product uses this category
  // We need to resolve the category name from ID first because products store category name
  const categoryToRemove = db.categories.find(c => c.id === id);
  if (!categoryToRemove) return null;

  const isUsed = db.products.some(p => p.category === categoryToRemove.name);
  if (isUsed) {
    throw new Error(`Cannot delete category "${categoryToRemove.name}" because it is used by one or more products.`);
  }

  const index = db.categories.findIndex(c => c.id === id);
  if (index !== -1) {
    const deleted = db.categories.splice(index, 1);
    saveDB(db);
    return deleted[0];
  }
  return null;
}
