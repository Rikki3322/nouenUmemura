'use client';

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

import {
  Instagram,
  MessageCircle,
  ShoppingBasket,
} from '@/components/icons/lucide-icons';

const isEnglish = (locale: string) => locale.startsWith('en');

const CTAbutton = () => {
  const [showButton, setShowButton] = useState(false);
  const t = useTranslations('homepage.cta');
  const locale = useLocale();
  const showVerticalText = !isEnglish(locale);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (!hero) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      setShowButton(heroBottom < 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* Fixed Purchase Button - Desktop */}
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
          {showVerticalText ? (
            <span className="font-medium text-sm text-white leading-4 whitespace-pre-line">
              {t('purchase.verticalText')
                .split('\n')
                .map((char, i) => (
                  <span key={i} className="block">
                    {char}
                  </span>
                ))}
            </span>
          ) : (
            <span
              className="font-medium text-sm text-white leading-4 whitespace-nowrap inline-block"
              style={{
                transform: 'rotate(90deg)',
                transformOrigin: 'left top',
              }}
            >
              {t('purchase.verticalText')}
            </span>
          )}
        </a>
      </div>

      {/* Fixed Purchase Button - Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 p-4">
        <a
          href="#action"
          className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium"
        >
          <ShoppingBasket size={20} />
          {t('purchase.ctaButton')}
        </a>
      </div>
    </div>
  );
};

export default CTAbutton;
