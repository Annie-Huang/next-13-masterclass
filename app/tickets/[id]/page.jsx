// When we build for production, this is going to make all the routes and pages for the tickets ahead of time.
// But if you make 'revalidate: 0', you are making the generateStaticParams redundant as nothing will be cache
export async function generateStaticParams() {
  // [{id: '1'}, {id: '2'}, ...]

  const res = await fetch('http://localhost:4000/tickets');

  const tickets = await res.json();

  return tickets.map((ticket) => ({ id: ticket.id }));
}

async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60, // refetch every 60 seconds
    },
  });

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
