// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { ReactNode, ReactElement } from 'react';

// Next.jsのLayoutProps型をimportできれば理想的です。
// import type { LayoutProps } from 'next/app';

interface LocaleLayoutProps {
  children: ReactNode;
  // Next.js 15のApp Routerではparamsの型が特殊な場合があるため
  // anyにして型エラーを回避（型安全性は落ちます）
  params: { locale: string } | any;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps): Promise<ReactElement> {
  const messages = await getMessages({ locale: params.locale });

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
