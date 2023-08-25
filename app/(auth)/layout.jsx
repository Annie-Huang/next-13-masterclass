import Link from 'next/link';

export default function AuthLayout({ children }) {
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
