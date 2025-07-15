import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ja', 'en'],
  defaultLocale: 'ja',
});

export const config = {
  matcher: ['/', '/(ja|en)/:path*'],
};
