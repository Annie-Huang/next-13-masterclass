import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

// https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
// This file for ensure the user's auth session remains active. Since the user's session is tracked in a cookie, we need to read this cookie and update it if necessary.
// Next.js Server Components allow you to read a cookie but not write back to it. Middleware on the other hand allow you to both read and write to cookies.
export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  return res;
}
