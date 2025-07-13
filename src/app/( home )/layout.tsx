// レイアウトは共通の枠組み構造 header, footer, main
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default HomeLayout;