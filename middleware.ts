import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['az', 'en', 'ru'],
  defaultLocale: ''
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};