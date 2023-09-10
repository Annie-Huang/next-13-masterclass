'use client';

import AuthForm from '@/app/(auth)/AuthForm';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Login() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    // console.log('user login', email, password);

    // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#client-side
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  return (
    <main>
      <h2 className='text-center'>Log in</h2>

      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
