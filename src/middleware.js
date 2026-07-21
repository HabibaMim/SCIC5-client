import { NextResponse } from 'next/server';
import { betterFetch } from '@better-fetch/fetch';

export async function middleware(request) {
  const { data: session } = await betterFetch('/api/auth/get-session', {
    baseURL: request.nextUrl.origin,
    headers: {
      cookie: request.headers.get('cookie') || '',
    },
  });

  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/add-gig', '/my-gigs', '/my-orders'],
};