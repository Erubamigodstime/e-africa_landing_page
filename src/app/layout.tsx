import React from 'react';
import "./globals.css";
import Header from './ui/Header';
import Footer from './ui/Footer';
import { poppins } from './ui/fonts';



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


