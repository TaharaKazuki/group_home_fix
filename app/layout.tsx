import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeAnimation from '@/components/FadeAnimation';
import { NavProvider } from '@/providers/NavContext';
import { Klee_One } from 'next/font/google';

const Klee_one = Klee_One({ subsets: ['latin'], weight: ['400', '600'] });

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
      <body className={Klee_one.className}>
        <NavProvider>
          <Header />
          <FadeAnimation>{children}</FadeAnimation>
          <Footer />
        </NavProvider>
      </body>
    </html>
  );
}
