// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { ReactNode, ReactElement } from 'react';

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
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
