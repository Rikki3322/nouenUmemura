'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const locales = ['ja', 'en'];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentLocale = pathname.split('/')[1];
  const restPath = pathname.replace(/^\/(ja|en)/, '') || '';

  // クエリパラメータを文字列化
  const queryString = searchParams.toString();
  const query = queryString ? `?${queryString}` : '';

  return (
    <div className="flex space-x-4 text-sm font-semibold">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${restPath}${query}`}
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
