'use client';

import { useEffect, useState } from 'react';
import {
  Instagram,
  Calendar,
  MessageCircle,
} from '@/components/icons/lucide-icons';
import { Button } from '@/app/ui/button';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

const breadcrumbItems = [
  { label: 'HOME', href: '/' },
  { label: '農家民宿うめむら' },
];

const StayCTAbutton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) {
      console.warn('No element with id="hero" found');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('entry.isIntersecting:', entry.isIntersecting); // デバッグ用
        setShowButton(!entry.isIntersecting); // heroが画面外ならボタンを表示
      },
      {
        threshold: 0.1, // 少し交差していれば true にする
        rootMargin: '0px 0px -100px 0px', // 下マージンを100px上げて、少し早めに「画面外」と判定
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
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
          href="https://www.instagram.com/umemuranoyado/"
          className="text-gray-600 hover:text-green-600 transition-colors flex flex-col items-center px-4 py-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://www.booking.com/hotel/jp/nong-jia-min-su-umemura.ja.html"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-6 rounded-full shadow-lg transition-all duration-300 flex flex-col items-center gap-2 hover:shadow-xl"
        >
          <Calendar size={20} />
          <span className="font-medium text-sm text-white leading-4">
            {'宿\n泊\n予\n約'.split('\n').map((char, i) => (
              <span key={i} className="block">
                {char}
              </span>
            ))}
          </span>
        </a>
      </div>

      {/* Fixed Reservation Button - Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 p-4">
        <Button asChild variant="ctaFixed">
          <span>
            <Calendar size={20} />
            ご予約はこちら
          </span>
        </Button>
      </div>

      {/* 一番上 */}
      <section
        id="page-header"
        className="max-w-4xl mx-auto px-6 pt-20 pb-0 md:pt-24 md:pb-10 text-black"
      >
        {/* パンくず */}
        <Breadcrumb items={breadcrumbItems} />

        {/* 見出し */}
        <div className="space-y-1">
          <h1 className="text-4xl font-bold border-b border-black pb-4 mb-2">
            農家民宿うめむら
          </h1>
          <h2 className="text-lg leading-relaxed">
            農家の暮らしを体験、暮らすように泊まって欲しい。
          </h2>
        </div>
      </section>
    </div>
  );
};

export default StayCTAbutton;
