'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import AuthForm from '@/app/(auth)/AuthForm';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError('');

    // console.log('user signup', email, password);

    // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#client-side
    // location.origin is the browser address the user currently is on.
    const supabase = createClientComponentClient();
    // this is a local scoped error, it is different from useState's error
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // Once the link in the email is clicked, we will forward it the below route.
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
    } else {
      // Once your register successfully, you can see the new user is 'Waiting for verification' in supabase dashboard:
      // https://supabase.com/dashboard/project/ojnieaohntvqlhyvlebc/auth/users
      // Once you click the email link, it will direct you to the http://localhost:3000 page
      router.push('/verify');
    }
  };

  return (
    <main>
      <h2 className='text-center'>Sign up</h2>

      <AuthForm handleSubmit={handleSubmit} />

      {error && <div className='error'>{error}</div>}
    </main>
  );
}
