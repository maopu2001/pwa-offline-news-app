import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'News Reader',
  description: 'This app is made by M. Aktaruzzaman Opu',
  manifest: '/manifest.json',
  keywords: ['PWA', 'Offline', 'News Reader'],
  authors: [{ name: 'M. Aktaruzzaman Opu', url: 'https://maopu.vercel.app' }],
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
