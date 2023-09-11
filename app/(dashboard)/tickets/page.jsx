import { Suspense } from 'react';
import TicketList from '@/app/(dashboard)/tickets/TicketList';
import Loading from '@/app/(dashboard)/loading';
import Link from 'next/link';

export const metadata = {
  title: 'Dojo Helpdesk | Tickets',
};

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets</small>
          </p>
        </div>
        <Link href='/tickets/create' className='ml-auto'>
          <button className='btn-primary'>New Ticket</button>
        </Link>
      </nav>

      {/* We only want the loading to show in the TicketList component but still delay the <nav> section */}
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
