async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60, // refetch every 60 seconds
    },
  });

  return res.json();
}

export default function TicketDetails({ params }) {
  const id = params.id;

  return <div>{id}</div>;
}
