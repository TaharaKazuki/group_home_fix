import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import FadeAnimation from '@/components/FadeAnimation';
import RollUpAnimation from '@/components/RollupAnimation';

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
    <html lang="ja">
      <body className={`antialiased`}>
        <RollUpAnimation />
        <Header />
        <FadeAnimation>{children}</FadeAnimation>
      </body>
    </html>
  );
}
