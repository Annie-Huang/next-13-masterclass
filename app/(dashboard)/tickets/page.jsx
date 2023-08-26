import { Suspense } from 'react';
import TicketList from '@/app/(dashboard)/tickets/TicketList';
import Loading from '@/app/(dashboard)/loading';

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
      </nav>

      {/* We only want the loading to show in the TicketList component but still delay the <nav> section */}
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
