// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const fallbackLocale = 'ja';
  const supportedLocales = ['ja', 'en'];

  const resolvedLocale = supportedLocales.includes(locale ?? '')
    ? locale!
    : fallbackLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../locales/${resolvedLocale}.json`)).default,
  };
});
