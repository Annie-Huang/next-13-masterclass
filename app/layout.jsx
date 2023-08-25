import './globals.css';
// import { Inter } from 'next/font/google';
import { Rubik } from 'next/font/google';
// import Navbar from '@/app/components/Navbar';

// const inter = Inter({ subsets: ['latin'] });
const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  // When nextjs see a link component on the page, it prefetches the page from the link in the background so by the time we click the link
  // it already has the content
  return (
    <html lang='en'>
      {/*<body className={inter.className}>*/}
      <body className={rubik.className}>
        {/*We don't want the <Navbar> appear on all pages, only in the (dashboard) groups one
           <Navbar />
        */}
        {children}
      </body>
    </html>
  );
}
