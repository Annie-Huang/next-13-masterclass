'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();
  const handleLogout = async () => {
    // https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs#sign-out
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push('/login');
    } else {
      console.log(error);
    }
  };

  return (
    <button className='btn-primary' onClick={handleLogout}>
      Logout
    </button>
  );
}
