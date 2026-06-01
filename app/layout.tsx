import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WeFrame | Watch Better. Together.',
  description:
    'Experience cinema like never before. Stream movies, discover new favorites, and watch together with friends on WeFrame.',
  keywords: ['movies', 'streaming', 'cinema', 'watch together', 'film'],
  authors: [{ name: 'WeFrame Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://weframe.app',
    siteName: 'WeFrame',
    title: 'WeFrame | Watch Better. Together.',
    description: 'Experience cinema like never before with WeFrame.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050510',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
