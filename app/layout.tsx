import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { AppLayout } from '@/components';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cloud Karaoke',
  description: 'Karaoke platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        data-theme="light"
        className="bg-gradient-to-r from-pink-700 to-yellow-700 text-white"
      >
        <body className={montserrat.className}>
          <AppLayout>{children}</AppLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
