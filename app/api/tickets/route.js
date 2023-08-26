// /api/tickets
// You cannot use put the route.js file into the same directory where the page.jsx is. Otherwise it will get confused where it is the route.
// this file is for client components that needs to make api calls
// https://nextjs.org/docs/app/api-reference/functions/next-response

import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('http://localhost:4000/tickets');

  const tickets = await res.json();

  return NextResponse.json(tickets, { status: 200 });
}
