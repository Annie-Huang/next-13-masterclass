import Link from 'next/link';

// Test whether you can get to this page by going to a url that is not defined with /tickets/XXX. e.g. http://localhost:3002/tickets/123
// Since the not-found page is defined here, it will not use the root level not-found page in app/not-found.jsx
export default function NotFound() {
  return (
    <main className='text-center'>
      <h2 className='text-3xl'>We Hit a Brick Wall.</h2>
      <p>We could not find the ticket you were looking for.</p>
      <p>
        Go back to all <Link href='/tickets'>tickets</Link>
      </p>
    </main>
  );
}
