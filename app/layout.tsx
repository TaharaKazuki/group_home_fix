import './globals.css';
import type { Metadata } from 'next';
import { Fira_Sans } from 'next/font/google';

import FadeAnimation from '@/components/FadeAnimation';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';
import { NavProvider } from '@/providers/NavContext';

const fira_sans = Fira_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'IXIA Group Home',
  description: 'IXIA Group Homeのホームページ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-screen">
      <body className={cn(fira_sans.className)}>
        <NavProvider>
          <Header />
          <FadeAnimation>{children}</FadeAnimation>
          <Footer />
        </NavProvider>
      </body>
    </html>
  );
}
