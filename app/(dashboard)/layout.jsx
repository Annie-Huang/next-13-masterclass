import Navbar from '@/app/components/Navbar';

export default function DashboardLayout({ children }) {
  // This will be wrapped as a {children} into the app/layout.jsx file.
  //
  // The top-most layout is called the Root Layout. This required layout is shared across all pages in an application. Root layouts must contain html and body tags.
  //
  // Layouts in a route are nested by default. Each parent layout wraps child layouts below it using the React children prop.
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
