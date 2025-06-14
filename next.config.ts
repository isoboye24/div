import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['a40j3xprax.ufs.sh', 'utfs.io'],
  },
  i18n: {
    locales: ['en', 'de', 'ru'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

export default nextConfig;
