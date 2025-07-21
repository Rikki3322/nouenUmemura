import { getRequestConfig } from 'next-intl/server';
import path from 'path';

export default getRequestConfig(async ({ locale }) => {
  const fallbackLocale = 'ja';
  const supportedLocales = ['ja', 'en'];

  const resolvedLocale = supportedLocales.includes(locale ?? '')
    ? locale!
    : fallbackLocale;

  const messages = await import(`../locales/${resolvedLocale}/index.ts`);

  return {
    locale: resolvedLocale,
    messages: messages.default, // default export を渡す
  };
});
