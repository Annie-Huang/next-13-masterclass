import Link from 'next/link';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AuthLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  // If user is in the login page and already login, direct them to dashboard page.
  if (data.session) {
    redirect('/');
  }

  // Make it similar to <Navbar> component.
  // Serve http://localhost:3000/signup and http://localhost:3000/login
  return (
    <>
      <nav>
        <h1>Dojo Helpdesk</h1>
        <Link href='/signup'>Sign up</Link>
        <Link href='/login'>Log in</Link>
      </nav>
      {children}
    </>
  );
}
