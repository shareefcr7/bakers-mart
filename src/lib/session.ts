
import { cookies } from 'next/headers';

const SESSION_COOKIE_NAME = 'admin_session';

export async function createSession() {
  const cookieStore = await cookies();
  const oneDay = 24 * 60 * 60 * 1000;
  
  // Create a new expiration date
  const expires = new Date(Date.now() + oneDay);

  cookieStore.set(SESSION_COOKIE_NAME, 'true', {
    httpOnly: true,
    // Secure should be true in production, but false in dev (localhost)
    // We force false if not strictly in production to avoid localhost issues
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: expires,
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function hasSession() {
  const cookieStore = await cookies();
  return cookieStore.has(SESSION_COOKIE_NAME);
}
