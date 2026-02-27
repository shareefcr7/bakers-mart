import { NextResponse } from 'next/server';
import { getCategories, addCategory } from '@/lib/db';

export async function GET() {
  try {
    const categories = await getCategories();
    return NextResponse.json(categories);
  } catch (error: unknown) {
    console.error('❌ Failed to fetch categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // ✅ Validate name
    if (!body.name || body.name.trim() === '') {
      return NextResponse.json(
        { error: 'Category name is required' },
        { status: 400 }
      );
    }

    // ✅ Validate image — must be uploaded BEFORE submitting
    if (!body.image || body.image.trim() === '') {
      return NextResponse.json(
        { error: 'Category image is required. Please upload an image first using the image uploader.' },
        { status: 400 }
      );
    }

    const newCategory = await addCategory(body);
    return NextResponse.json(newCategory);

  } catch (error: unknown) {
    console.error('❌ Failed to create category:', error);

    // Mongoose validation error — give exact field info
    if (error instanceof Error && error.message.includes('validation failed')) {
      return NextResponse.json(
        { error: `Validation Error: ${error.message}` },
        { status: 400 }
      );
    }

    // Duplicate category
    if (error instanceof Error && error.message.includes('already exists')) {
      return NextResponse.json(
        { error: error.message },
        { status: 409 }
      );
    }

    const errorMessage = error instanceof Error ? error.message : 'Failed to create category';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
