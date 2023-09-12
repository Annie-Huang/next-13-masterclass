'use client';

// reset is to resetting the page to be the original page before the error is occured
export default function Error({ error, reset }) {
  // The error.message is available during dev mood. But in prod, it will be a generic error message.
  // that is because next.js strip out that real error message in prod because it may contain sensitive information
  return (
    <main className='text-center'>
      <h2 className='text-4xl'>Oh No!</h2>
      <p>{error.message}</p>
      <button onClick={reset} className='btn-primary mx-auto my-4'>
        Maybe try again?
      </button>
    </main>
  );
}
