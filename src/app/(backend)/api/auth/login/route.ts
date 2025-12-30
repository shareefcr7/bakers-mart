
import { NextResponse } from 'next/server';
import { signJWT, setSessionCookie } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // Check against hardcoded credentials (in a real app, use environment variables)
    if (username === 'admin' && password === 'admin') {
      const token = await signJWT({ username, role: 'admin' });
      await setSessionCookie(token);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ success: false, message: 'An error occurred' }, { status: 500 });
  }
}
