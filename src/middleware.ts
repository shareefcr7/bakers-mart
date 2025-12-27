
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define paths that are protected
  if (path.startsWith('/admin')) {
    const sessionCookie = request.cookies.get('admin_session');
    const session = sessionCookie?.value;

    // Allow access to login page
    if (path === '/admin/login') {
      // If already logged in, redirect to dashboard
      if (session) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      }
      return NextResponse.next();
    }

    // Protect other admin routes
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
