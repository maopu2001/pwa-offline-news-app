import withPWAInit from '@ducanh2912/next-pwa';
import { NextConfig } from 'next';

const withPWA = withPWAInit({
  dest: 'public',
});

const nextConfig: NextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
      {
        protocol: 'http',
        hostname: '*',
      },
    ],
  },
};

export default withPWA(nextConfig);
