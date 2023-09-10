import Link from 'next/link';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

/*
// This is using json-server as DB
async function getTickets() {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      // revalidate: 30, // refetch every 30 seconds
      revalidate: 0, // use 0 to opt out of the using cache
    },
  });

  return res.json();
}*/

// This is using supabase as DB
// When you are using a server component, just fetch the data directly, don't need to go through the router.
// https://supabase.com/docs/guides/auth/auth-helpers/nextjs#server-components
async function getTickets() {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from('Tickets').select();

  if (error) {
    console.log(error.message);
  }

  return data;
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className='card my-5'>
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className='text-center'>There are no open tickets, yay!</p>
      )}
    </>
  );
}
