import { notFound } from 'next/navigation';

// Even Netnija cannot tell why the app/(dashboard)/not-found.jsx is not working, but he thinks it's a bug in next.js
// if we shift it out into the /app/ level, then we cannot use the app/(dashboard)/layout.jsx file.
// This is temp fix for the problem

// With [...XXXX] folder (the XXX naming does not matter),
// This will force any path that start with app/xxx (app/tickets, app) to go to the nearly not-found.jsx page
// if it encounter a path that is not found, e.g.
// http://localhost:3000/jfew
// http://localhost:3000/tickets/123
export default function NotFound() {
  notFound();
}
