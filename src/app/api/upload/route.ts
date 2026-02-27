
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
    // ✅ Step 1: Check each env var individually for clear error messages
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const apiKey    = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      const missing = [
        !cloudName && 'NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME',
        !apiKey    && 'CLOUDINARY_API_KEY',
        !apiSecret && 'CLOUDINARY_API_SECRET',
      ].filter(Boolean).join(', ');

      console.error(`❌ Missing Cloudinary env vars: ${missing}`);
      return NextResponse.json(
        {
          error: `Server misconfiguration: Missing Cloudinary credentials (${missing}). Add them in Vercel → Settings → Environment Variables.`,
        },
        { status: 500 }
      );
    }

    // ✅ Step 2: Parse and validate the file
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file || file.size === 0) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // ✅ Step 3: Enforce size limit (Vercel max body = 4.5MB)
    const MAX_SIZE_BYTES = 4 * 1024 * 1024; // 4MB
    if (file.size > MAX_SIZE_BYTES) {
      return NextResponse.json(
        { error: `File too large (${(file.size / 1024 / 1024).toFixed(1)}MB). Maximum allowed is 4MB.` },
        { status: 400 }
      );
    }

    // ✅ Step 4: Convert to buffer and upload
    const bytes  = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    interface CloudinaryUploadResult {
      secure_url: string;
      public_id:  string;
    }

    const result = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder:        'bakery-mart-categories',
          resource_type: 'auto',
        },
        (error, result) => {
          if (error) {
            console.error('❌ Cloudinary upload error:', error.message);
            reject(new Error(error.message));
          } else {
            resolve(result as CloudinaryUploadResult);
          }
        }
      );
      uploadStream.end(buffer);
    });

    console.log('✅ Upload success:', result.public_id);
    return NextResponse.json({
      success:   true,
      url:       result.secure_url,
      public_id: result.public_id,
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Upload failed';
    console.error('❌ Upload route error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
