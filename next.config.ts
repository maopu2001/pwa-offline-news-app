import withPWA from 'next-pwa';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
};

export default withPWA({
  dest: 'public', // Important!
  // disable: isDev, // Don't use in dev mode
  register: true, // Enable auto registration
  skipWaiting: true, // For immediate control
})(nextConfig);
