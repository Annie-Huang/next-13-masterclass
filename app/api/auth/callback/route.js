import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (code) {
    // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#route-handlers
    // https://supabase.com/docs/reference/javascript/auth-exchangecodeforsession
    const supabase = createRouteHandlerClient({ cookies });
    supabase.auth.exchangeCodeForSession(code);
  }

  // go to home page of the app.
  return NextResponse.redirect(url.origin);
}
