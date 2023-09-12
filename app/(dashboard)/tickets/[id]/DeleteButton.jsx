'use client';

import { useState, useTransition } from 'react';
import { TiDelete } from 'react-icons/ti';
import { useRouter } from 'next/navigation';
import { deleteTicket } from '@/app/(dashboard)/tickets/actions';

// Create a seperate component because we don't want to turn the whole /tickets/[id]/page.jsx into client component
export default function DeleteButton({ id }) {
  const [isPending, startTransition] = useTransition();

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);
    // console.log('deleting id - ', id);

    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: 'DELETE',
    });
    const json = await res.json();

    if (json.error) {
      console.log(error.message);
      setIsLoading(false);
    } else {
      router.refresh();
      router.push('/tickets');
    }
  };

  /*  return (
    <button className='btn-primary' onClick={handleClick} disabled={isLoading}>
      <TiDelete />
      {isLoading ? 'Deleting...' : 'Delete Ticket'}
    </button>
  );*/

  // Server action way to doing it.
  return (
    <button
      className='btn-primary'
      onClick={() => startTransition(() => deleteTicket(id))}
      disabled={isPending}
    >
      <TiDelete />
      {isPending ? 'Deleting...' : 'Delete Ticket'}
    </button>
  );
}
