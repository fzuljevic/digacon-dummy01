import { ScriptProps } from 'next/script';
import Footer from './Footer';
import Header from './Header';
import React from 'react';

function Layout({ children }: ScriptProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
