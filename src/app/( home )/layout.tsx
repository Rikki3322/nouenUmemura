// レイアウトは共通の枠組み構造 header, footer, main
import React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default HomeLayout;