'use client';

import AuthForm from '@/app/(auth)/AuthForm';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError('');
    // console.log('user login', email, password);

    // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#client-side
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push('/'); // Push to dashboard
    }
  };

  return (
    <main>
      <h2 className='text-center'>Log in</h2>

      <AuthForm handleSubmit={handleSubmit} />

      {error && <div className='error'>{error}</div>}
    </main>
  );
}
