'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function LogoutButton() {
  const handleLogout = async () => {
    // https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs#sign-out
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();
  };

  return (
    <button className='btn-primary' onClick={handleLogout}>
      Logout
    </button>
  );
}
