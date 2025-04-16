import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'News Reader',
  description: 'PWA Offline News Reader',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['PWA', 'Offline', 'News Reader'],
  authors: [{ name: 'M. Aktaruzzaman Opu', url: 'https://maopu2001.github.io' }],
  icons: [
    { rel: 'icon', url: 'icons/app-512.png' },
    { rel: 'apple-touch-icon', url: 'icons/app-512.png' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="icons/app-512.png" />
        <link rel="apple-touch-icon" href="icons/app-512.png" />
      </head>

      <body className={`antialiased relative bg-background`}>
        <Toaster position="top-right" richColors closeButton />
        {children}
      </body>
    </html>
  );
}
