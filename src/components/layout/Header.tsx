'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import { Button } from '@/app/ui/button';
import { Menu, X } from '@/components/icons/lucide-icons';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('Header');
  const tNav = useTranslations('Header.nav');

  const switchTo = locale === 'ja' ? 'en' : 'ja';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isScrolled ? 'text-gray-900' : 'text-white';
  const iconColor = isScrolled ? 'text-gray-900' : 'text-white';
  const headerBg = isScrolled ? 'bg-white' : 'bg-transparent';

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
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBg}`}
        style={{ height: '70px' }}
      >
        {/* ロゴ */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="relative h-full flex items-center justify-center cursor-pointer"
          aria-label="トップへ戻る"
        >
          <Image
            key={isScrolled ? 'scrolled' : 'default'}
            src={
              isScrolled
                ? '/assets/images/inverse_logo.png'
                : '/assets/images/logo.png'
            }
            alt="うめむら農園"
            width={140}
            height={70}
            className="h-[70px] w-auto block transition-all duration-300"
          />
        </div>

        {/* ハンバーガーメニュー */}
        <Button
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="メニュー"
          variant="ghost"
        >
          {isMobileMenuOpen ? (
            <X className={`!w-7 !h-7 ${iconColor}`} />
          ) : (
            <Menu className={`!w-7 !h-7 ${iconColor}`} />
          )}
        </Button>

        {/* 言語切り替え */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <LanguageSwitcher />
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40">
          <div className="pt-20 px-4">
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
        </div>
      )}
    </>
  );
};

export default Header;
