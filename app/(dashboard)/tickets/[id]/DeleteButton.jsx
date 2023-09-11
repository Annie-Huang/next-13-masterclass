'use client';

import { useState } from 'react';
import { TiDelete } from 'react-icons/ti';

// Create a seperate component because we don't want to turn the whole /tickets/[id]/page.jsx into client component
export default function DeleteButton({ id }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    // console.log('deleting id - ', id);

    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: 'DELETE',
    });
  };

  return (
    <button className='btn-primary' onClick={handleClick} disabled={isLoading}>
      <TiDelete />
      {isLoading ? 'Deleting...' : 'Delete Ticket'}
    </button>
  );
}
