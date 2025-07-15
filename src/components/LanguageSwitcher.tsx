'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const locales = ['ja', 'en'];

export default function LanguageSwitcher() {
  const pathname = usePathname();

  // URLの先頭のロケール取得
  const currentLocale = pathname.split('/')[1];
  // ロケール部分を除いたパス
  const restPath = pathname.replace(/^\/(ja|en)/, '') || '';

  return (
    <div className="flex space-x-4 text-sm font-semibold">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${restPath}`}
          className={`cursor-pointer hover:text-green-600 transition-colors ${
            currentLocale === locale
              ? 'underline text-green-600'
              : 'text-gray-500'
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
