'use client';

import AuthForm from '@/app/(auth)/AuthForm';

export default function Login() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    console.log('user login', email, password);
  };

  return (
    <main>
      <h2 className='text-center'>Log in</h2>

      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
