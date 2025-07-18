import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';
import withNextIntl from 'next-intl/plugin';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withIntl = withNextIntl(); // ✅ ここは空でOK

const nextConfig: NextConfig = {
  output: 'standalone',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default bundleAnalyzer(withIntl(nextConfig));
