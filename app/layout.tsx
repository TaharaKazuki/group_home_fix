import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import FadeAnimation from '@/components/FadeAnimation';
import { NavProvider } from '@/providers/NavContext';

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
      <body className={`antialiased`}>
        <NavProvider>
          <Header />
          <FadeAnimation>{children}</FadeAnimation>
        </NavProvider>
      </body>
    </html>
  );
}
