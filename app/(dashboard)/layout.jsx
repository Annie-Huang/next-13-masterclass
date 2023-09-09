import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import Navbar from '@/app/components/Navbar';

export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  // https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs#sign-out
  const { data } = await supabase.auth.getSession();
  // console.log('data=', data);

  // This will be wrapped as a {children} into the app/layout.jsx file.
  //
  // The top-most layout is called the Root Layout. This required layout is shared across all pages in an application. Root layouts must contain html and body tags.
  //
  // Layouts in a route are nested by default. Each parent layout wraps child layouts below it using the React children prop.
  return (
    <>
      {/*<Navbar />*/}
      <Navbar user={data.session.user} />
      {children}
    </>
  );
}
