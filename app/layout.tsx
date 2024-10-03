import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

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
        <Header />
        {children}
      </body>
    </html>
  );
}
