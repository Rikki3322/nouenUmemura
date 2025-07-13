// レイアウトは構造 header, footer, main
import React from 'react';
import ScrolledHeader from '@/components/layout/ScrolledHeader';
import Footer from '@/components/layout/Footer';

const ContactLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen">
    <ScrolledHeader />
    <main className="min-h-screen bg-white">
      {children}
    </main>
    <Footer />
  </div>
);

export default ContactLayout;