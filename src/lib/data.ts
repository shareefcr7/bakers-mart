
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export const categoryData = [
  { name: "Baking Tools", image: "/images/baking-tools.png" },
  { name: "Cake Tins", image: "/images/cake-tins.png" },
  { name: "Piping Nozzles", image: "/images/fondant-tools.png" },
  { name: "Ingredients", image: "/images/ingredients.png" },
  { name: "Gel Colors", image: "/images/gel-colors.png" },
  { name: "Bakewares", image: "/images/bakewares.png" },
  { name: "Cutters", image: "/images/cutters.png" },
  { name: "Fondant & Tools", image: "/images/fondant-tools.png" },
  { name: "Sprinkles", image: "/images/sprinkles.png" },
  { name: "Theme Toppers", image: "/images/theme-toppers.png" },
  { name: "Liners & Papers", image: "/images/liners.png" },
  { name: "Artificial Flowers", image: "/images/artificial-flowers.png" },
  { name: "Packaging & Boxes", image: "/images/packaging-boxes.png" },
  { name: "Silicone Moulds", image: "/images/silicone-moulds.png" },
  { name: "Display Stands", image: "/images/cake-stand.png" }
];

export const categories = ["All", ...categoryData.map(c => c.name)];

export const products: Product[] = [
  // Baking Tools
  {
    id: "1",
    name: "Premium Gold & Silicone Spatula Set",
    description: "Elegant gold-finished handle with heat-resistant grey silicone heads.",
    price: "$18.99",
    category: "Baking Tools",
    image: "/images/spatula-set.png",
    isBestSeller: true
  },
  {
    id: "2",
    name: "Stainless Steel Whisk",
    description: "Ergonomic handle and durable wires for perfect aeration.",
    price: "$8.50",
    category: "Baking Tools",
    image: "/images/whisk.png", 
  },
  {
    id: "18",
    name: "Measuring Cup Set",
    description: "Accurate stainless steel measuring cups for precise baking.",
    price: "$15.99",
    category: "Baking Tools",
    image: "/images/measuring-cups.png", 
  },
  // Cake Tins
  {
    id: "3",
    name: "Professional Springform Pan Set",
    description: "Heavy-duty black non-stick coating for easy release. Set of 3 sizes.",
    price: "$45.99",
    category: "Cake Tins",
    image: "/images/cake-tins.png",
    isBestSeller: true
  },
  {
    id: "4",
    name: "Square Cake Tin Set",
    description: "Set of 3 professional grade square tins for tiered cakes.",
    price: "$34.99",
    category: "Cake Tins",
    image: "/images/square-tins.png",
  },
  {
    id: "19",
    name: "Heart Shaped Cake Tin",
    description: "Perfect for Valentine's day and anniversary cakes.",
    price: "$12.50",
    category: "Cake Tins",
    image: "/images/heart-tin.png",
  },
  // Piping Nozzles
  {
    id: "5",
    name: "Russian Piping Tips Set",
    description: "Create beautiful floral designs instantly with these large nozzles.",
    price: "$22.50",
    category: "Piping Nozzles",
    image: "/images/fondant-tools.png",
    isBestSeller: true
  },
  {
    id: "20",
    name: "Star Nozzle Kit",
    description: "Essential star tips for borders, rosettes, and swirls.",
    price: "$9.99",
    category: "Piping Nozzles",
    image: "/images/cutters.png",
  },
  // Ingredients
  {
    id: "6",
    name: "Premium Dark Chocolate Couverture",
    description: "55% cocoa solids, perfect for ganache and molding.",
    price: "$15.00",
    category: "Ingredients",
    image: "/images/ingredients.png",
    isBestSeller: true
  },
  {
    id: "7",
    name: "Almond Flour (Extra Fine)",
    description: "Blanched almond flour ideal for macarons and keto baking.",
    price: "$19.99",
    category: "Ingredients",
    image: "/images/measuring-cups.png", 
  },
  // Gel Colors
  {
    id: "8",
    name: "Vibrant Gel Food Color Set",
    description: "Highly concentrated colors that won't alter consistency.",
    price: "$24.99",
    category: "Gel Colors",
    image: "/images/gel-colors.png",
  },
  {
    id: "14",
    name: "Pastel Gel Color Pack",
    description: "Soft pastel shades perfect for baby shower and wedding cakes.",
    price: "$18.50",
    category: "Gel Colors",
    image: "https://images.unsplash.com/photo-1570476922354-81227cdbb76c?auto=format&fit=crop&q=80&w=800",
  },
  // Bakewares
  {
    id: "9",
    name: "Silicone Macaron Mat",
    description: "Pre-marked circles for consistent sizing. Non-stick.",
    price: "$14.50",
    category: "Bakewares",
    image: "/images/silicone-macaron-mat.png",
  },
  {
    id: "21",
    name: "Cooling Rack",
    description: "Grid pattern wire rack for efficient cooling of baked goods.",
    price: "$11.00",
    category: "Bakewares",
    image: "/images/cooling-rack.png",
  },
  // Cutters
  {
    id: "10",
    name: "Geometric Cookie Cutter Set",
    description: "Stainless steel cutters in hexagon, circle, and square shapes.",
    price: "$9.99",
    category: "Cutters",
    image: "/images/cutters.png",
  },
  {
    id: "15",
    name: "Floral Cookie Cutter Set",
    description: "Detailed flower shapes for intricate cookie designs.",
    price: "$11.99",
    category: "Cutters",
    image: "/images/floral-cutters.png",
  },
  // Fondant & Tools
  {
    id: "11",
    name: "Fondant Rolling Pin",
    description: "Non-stick smooth surface for rolling out fondant and gum paste.",
    price: "$16.00",
    category: "Fondant & Tools",
    image: "/images/fondant-tools.png", 
  },
  {
    id: "16",
    name: "White Rolled Fondant (1kg)",
    description: "Premium quality fondant with excellent elasticity and smooth finish.",
    price: "$12.50",
    category: "Fondant & Tools",
    image: "/images/white-fondant.png",
  },
  // Sprinkles
  {
    id: "12",
    name: "Gold Pearl Sprinkles",
    description: "Edible metallic gold pearls to add a touch of luxury.",
    price: "$8.99",
    category: "Sprinkles",
    image: "/images/gold-sprinkles.png", 
    isBestSeller: true
  },
  {
    id: "22",
    name: "Rainbow Sprinkles Mix",
    description: "Fun and colorful sprinkles for birthday cakes and cupcakes.",
    price: "$6.50",
    category: "Sprinkles",
    image: "/images/sprinkles.png",
  },
  // Theme Toppers
  {
    id: "13",
    name: "Happy Birthday Acrylic Topper",
    description: "Gold mirror finish acrylic topper for elegant birthday cakes.",
    price: "$5.99",
    category: "Theme Toppers",
    image: "/images/theme-toppers.png", 
  },
  {
    id: "17",
    name: "Wedding Cake Topper",
    description: "Romantic 'Mr & Mrs' topper for wedding and anniversary cakes.",
    price: "$7.99",
    category: "Theme Toppers",
    image: "/images/wedding-topper.png", 
  },
  {
    id: "23",
    name: "Unicorn Cake Topper Set",
    description: "Includes horn, ears, and flowers for a magical unicorn cake.",
    price: "$13.99",
    category: "Theme Toppers",
    image: "/images/unicorn-topper.png", 
  },
  // New Categories
  {
    id: "24",
    name: "Kraft Window Bakery Boxes (Set of 10)",
    description: "Eco-friendly kraft boxes with clear display windows. Perfect for selling.",
    price: "$25.00",
    category: "Packaging & Boxes",
    image: "/images/packaging-boxes.png",
    isNew: true
  },
  {
    id: "25",
    name: "Intricate Silicone Flower Moulds",
    description: "Flexible silicone moulds for creating detailed fondant or chocolate flowers.",
    price: "$14.99",
    category: "Silicone Moulds",
    image: "/images/silicone-moulds.png",
    isNew: true
  },
  {
    id: "26",
    name: "Luxury Marble & Gold Cake Stand",
    description: "3-Tier cake stand with marble platters and gold pillar. Stunning centerpiece.",
    price: "$89.99",
    category: "Display Stands",
    image: "/images/cake-stand.png",
    isBestSeller: true
  },
  {
    id: "27",
    name: "Blush Peony Cake Flowers",
    description: "High-quality artificial peony bouquet for elegant cake decoration.",
    price: "$22.50",
    category: "Artificial Flowers",
    image: "/images/artificial-flowers.png",
    isNew: true
  },
  {
    id: "28",
    name: "Standard Cupcake Liners (White)",
    description: "Grease-proof, oven safe paper liners. Pack of 100.",
    price: "$4.99",
    category: "Liners & Papers",
    image: "/images/cupcake-liners.png", 
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Home Baker",
    content: "The quality of the cake tins is outstanding. My cakes bake so evenly now!"
  },
  {
    id: 2,
    name: "Chef Marcus",
    role: "Patisserie Owner",
    content: "Bakers Mart is my go-to for professional supplies. Fast shipping and great range."
  },
  {
    id: 3,
    name: "Emily R.",
    role: "Cake Artist",
    content: "Love the sprinkle collection! They add the perfect finish to my custom orders."
  }
];

export const businessHighlights = [
  {
    title: "Premium Quality",
    description: "Sourced from the best manufacturers worldwide."
  },
  {
    title: "Wide Range",
    description: "Everything from ingredients to professional tools."
  },
  {
    title: "Affordable Prices",
    description: "Professional grade equipment at competitive prices."
  },
  {
    title: "Fast Delivery",
    description: "Get your supplies when you need them most."
  }
];
