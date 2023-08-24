// https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#instant-loading-states
export default function Loading() {
  return (
    <main className='text-center'>
      <h2 className='text-primary'>Loading...</h2>
      <p>Hopefully not for too long :)</p>
    </main>
  );
}
