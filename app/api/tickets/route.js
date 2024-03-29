// /api/tickets
// You cannot use put the route.js file into the same directory where the page.jsx is. Otherwise it will get confused where it is the route.
// this file is for client components that needs to make api calls
// https://nextjs.org/docs/app/api-reference/functions/next-response

import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

/*
If you add this, you will make all functions inside this file to be dynamic calls (call everytime it is request, not cached)
https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching
https://nextjs.org/docs/app/building-your-application/routing/route-handlers#opting-out-of-caching

You can opt out of caching by:
Using the Request object with the GET method.
Using any of the other HTTP methods.
Using Dynamic Functions like cookies and headers.
The Segment Config Options manually specifies dynamic mode.
*/
export const dynamic = 'force-dynamic';

/*
export async function GET() {
  // Cached, unless it got 'export const dynamic = 'force-dynamic';' in above
  const res = await fetch('http://localhost:4000/tickets');

  // Not cached. Make new request everytime
  // const res = await fetch('http://localhost:4000/tickets', {
  //   next: {
  //     revalidate: 0,
  //   },
  // });

  const tickets = await res.json();

  return NextResponse.json(tickets, { status: 200 });
}

export async function POST(request) {
  const ticket = await request.json();

  const res = await fetch('http://localhost:4000/tickets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ticket),
  });

  const newTicket = await res.json();

  return NextResponse.json(newTicket, { status: 201 });
}
 */

export async function POST(request) {
  const ticket = await request.json();

  // get supabase instance
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#route-handlers
  const supabase = createRouteHandlerClient({ cookies });

  // get the current user session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // insert the data
  const { data, error } = await supabase
    .from('Tickets')
    .insert({ ...ticket, user_email: session.user.email })
    .select()
    .single();
  // console.log('data=', data);
  // console.log('error=', error);

  return NextResponse.json({ data, error });
}
