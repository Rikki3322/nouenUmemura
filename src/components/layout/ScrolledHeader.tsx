'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale,useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import { Button } from '@/app/ui/button';
import { Menu, X } from '@/components/icons/lucide-icons';

const ScrolledHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const t = useTranslations('Header');
  const tNav = useTranslations('Header.nav');
  const locale = useLocale();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const iconColor = 'text-gray-900';
  const headerBg = 'bg-white';

  const navLinks = [
    { href: `/${locale}`, label: tNav('home') },
    { href: `/${locale}/stay`, label: tNav('stay') },
    { href: `/${locale}/ecsites`, label: tNav('ecsites') },
    { href: `/${locale}/furusato`, label: tNav('furusato') },
    { href: `/${locale}/nohaku`, label: tNav('nohaku') },
    { href: `/${locale}/contact`, label: tNav('contact') },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBg}`}
        style={{ height: '70px' }}
      >
        <Button
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="メニュー"
          variant="ghost"
        >
          {isMobileMenuOpen ? (
            <X className={`w-7 h-7 ${iconColor}`} />
          ) : (
            <Menu className={`w-7 h-7 ${iconColor}`} />
          )}
        </Button>

        <div className="container mx-auto px-4 relative flex items-center justify-center h-full">
          <div
            role="button"
            tabIndex={0}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="cursor-pointer h-full flex items-center"
            aria-label="トップへ戻る"
          >
            <Image
              src="/assets/images/inverse_logo.png"
              alt="Company Logo"
              width={160}
              height={70}
              className="h-full w-auto"
            />
          </div>
        </div>
      </header>

      {/* モバイルメニュー */}
      {hasMounted && (
        <div
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 pt-20 px-6 transition-opacity duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white text-lg font-medium hover:text-green-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            <Button
              variant="cta"
              className="w-full min-h-[40px] text-sm font-semibold"
            >
              {t('lineFriend')}
            </Button>
          </nav>
        </div>
      )}
    </>
  );
};

export default ScrolledHeader;
