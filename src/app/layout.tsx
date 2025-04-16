import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'sonner';
import { QueryClientComponent } from './_components/QueryClientComponent';
import SWRegister from './sw-register';

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
        <meta http-equiv="Service-Worker-Allowed" content="/" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="icons/app-512.png" />
        <link rel="apple-touch-icon" href="icons/app-512.png" />
      </head>

      <body className={`dark antialiased relative bg-background`}>
        <SWRegister />
        <Toaster position="top-right" richColors closeButton />
        <QueryClientComponent>{children}</QueryClientComponent>
      </body>
    </html>
  );
}
