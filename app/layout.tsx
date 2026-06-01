import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WeFrame - Watch Better. Together.',
  description: 'Stream your favorite movies and watch together with WeFrame',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
