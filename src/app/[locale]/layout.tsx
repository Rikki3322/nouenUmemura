import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { ReactNode, ReactElement } from 'react';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const resolvedParams = await params;
  const messages = await getMessages({ locale: resolvedParams.locale });

  return (
    <NextIntlClientProvider locale={resolvedParams.locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
