'use client';

import { useEffect, useState } from 'react';

import {
  Instagram,
  MessageCircle,
  ShoppingBasket,
} from '@/components/icons/lucide-icons';

const CTAbutton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (!hero) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      setShowButton(heroBottom < 0); // 画面外に出たら表示
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* Fixed Reservation Button - Desktop */}
      <div
        className={`hidden lg:block fixed right-6 top-1/2 transform -translate-y-1/2 z-50 transition-opacity duration-300 ${
          showButton
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <a
          href="https://line.me/R/ti/p/@890kprkl?oat_content=url"
          className="text-gray-600 hover:text-green-600 transition-colors flex flex-col items-center px-4 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={24} />
        </a>
        <a
          href="https://www.instagram.com/asparagus.saga/"
          className="text-gray-600 hover:text-green-600 transition-colors flex flex-col items-center px-4 py-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={24} />
        </a>
        <a
          href="#action"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-6 rounded-full shadow-lg transition-all duration-300 flex flex-col items-center gap-2 hover:shadow-xl"
        >
          <ShoppingBasket size={20} />
          <span className="font-medium text-sm text-white leading-4">
            {'購\n入\nす\nる'.split('\n').map((char, i) => (
              <span key={i} className="block">
                {char}
              </span>
            ))}
          </span>
        </a>
      </div>

      {/* Fixed Reservation Button - Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 p-4">
        <a
          href="#action"
          className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium"
        >
          <ShoppingBasket size={20} />
          ご購入はこちら
        </a>
      </div>
    </div>
  );
};

export default CTAbutton;
