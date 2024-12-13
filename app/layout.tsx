import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeAnimation from '@/components/FadeAnimation';
import { NavProvider } from '@/providers/NavContext';
import { Fira_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

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
