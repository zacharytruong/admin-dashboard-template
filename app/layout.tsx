import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

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
        data-theme="dark"
        className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white"
      >
        <body className={montserrat.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
