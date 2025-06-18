import './globals.css';
import type { Metadata } from 'next';
import { M_PLUS_Rounded_1c } from 'next/font/google';

import FadeAnimation from '@/components/FadeAnimation';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';
import { NavProvider } from '@/providers/NavContext';

const noto_sans_jp = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '800', '900'],
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
      <body className={cn(noto_sans_jp.className)}>
        <NavProvider>
          <Header />
          <FadeAnimation>{children}</FadeAnimation>
          <Footer />
        </NavProvider>
      </body>
    </html>
  );
}
