import Link from 'next/link';

// Test whether you can get to this page by going to a url that is not defined. e.g. http://localhost:3002/jfeowaf
// This is a general not-found page. But if there are more specific to a link, it will try to display the ones in the specific folder
export default function NotFound() {
  return (
    <main className='text-center'>
      <h2 className='text-3xl'>There was a problem.</h2>
      <p>We could not find the page you were looking for.</p>
      <p>
        Go back to the <Link href='/'>Dashboard</Link>
      </p>
    </main>
  );
}
