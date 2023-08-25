import TicketList from '@/app/tickets/TicketList';
import { Suspense } from 'react';
import Loading from '@/app/loading';

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
