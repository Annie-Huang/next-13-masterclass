'use client';

import { useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { useRouter } from 'next/navigation';

// Create a seperate component because we don't want to turn the whole /tickets/[id]/page.jsx into client component
export default function DeleteButton({ id }) {
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

  return (
    <button className='btn-primary' onClick={handleClick} disabled={isLoading}>
      <TiDelete />
      {isLoading ? 'Deleting...' : 'Delete Ticket'}
    </button>
  );
}
