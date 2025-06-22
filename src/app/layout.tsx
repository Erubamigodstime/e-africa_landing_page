import React from 'react';
import "./globals.css";
import { Poppins } from 'next/font/google'
import Header from './ui/Header';
import Footer from './ui/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  generator: 'Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header/>        
        {children}
        <Footer />        
        </body>
    </html>
  );
}


