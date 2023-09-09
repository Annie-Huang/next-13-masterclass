'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import AuthForm from '@/app/(auth)/AuthForm';

export default function Signup() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    // console.log('user signup', email, password);

    // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#client-side
    // location.origin is the browser address the user currently is on.
    const supabase = createClientComponentClient();
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });
  };

  return (
    <main>
      <h2 className='text-center'>Sign up</h2>

      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
