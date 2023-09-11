import { notFound } from 'next/navigation';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
export const dynamicParams = true; // default val = true

/*
https://nextjs.org/docs/app/api-reference/functions/generate-metadata

Dynamically generate Metadata for a page.
*/
// This is using json-server as DB
/*
export async function generateMetadata({ params }) {
  const id = params.id;

  const res = await fetch(`http://localhost:4000/tickets/${id}`);
  const ticket = await res.json();

  return {
    title: `Dojo Helpdesk | ${ticket.title}`,
  };
}
*/

// This is using supabase as DB
// https://supabase.com/docs/guides/auth/auth-helpers/nextjs#server-components
export async function generateMetadata({ params }) {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase
    .from('Tickets')
    .select()
    .eq('id', params.id)
    .single(); // .single() to make it into an object form. Otherwise, it will come with an array with only one item.
}

/*
We tell the nextjs in advance all the IDs so that when we build the application it knows all fo the pages and
routes that it needs to make and that way they can be statically rendered and served from CDN and the way we do it
is by using 'generateStaticParams'

When we build for production, this is going to make all the routes and pages for the tickets ahead of time.
But if you make 'revalidate: 0', you are making the generateStaticParams redundant as nothing will be cache
*/
// We cannot really statically build page now because we use authentication and only people who is loggin (check cookie) can access tickets now
/*
export async function generateStaticParams() {
  // [{id: '1'}, {id: '2'}, ...]

  const res = await fetch('http://localhost:4000/tickets');

  const tickets = await res.json();

  return tickets.map((ticket) => ({ id: ticket.id }));
}*/

async function getTicket(id) {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60, // refetch every 60 seconds
    },
  });

  // If for some reason we happy to get to a route that is not coming back from the ticketList call.
  // e.g. http://localhost:3000/tickets/123, route it the the default next 404 page.
  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>TicketDetails</h2>
      </nav>

      <div className='card'>
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
