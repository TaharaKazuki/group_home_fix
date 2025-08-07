import './globals.css';
import type { Metadata } from 'next';
import { M_PLUS_Rounded_1c } from 'next/font/google';

import FadeAnimation from '@/components/FadeAnimation';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { cn } from '@/lib/utils';
import { NavProvider } from '@/providers/NavContext';

const noto_sans_jp = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'IXIA Group Home - 安心・安全な共同生活住居',
    template: '%s | IXIA Group Home',
  },
  description:
    '埼玉県草加市にあるグループホーム「IXIA」では、障がいをお持ちの方が安心して暮らせる共同生活住居を提供しています。24時間サポート体制で、一人ひとりの個性を大切にしたケアを行っております。',
  keywords: [
    'グループホーム',
    'IXIA',
    '草加市',
    '埼玉県',
    '障がい者支援',
    '共同生活住居',
    '福祉',
    '介護',
  ],
  authors: [{ name: 'IXIA Group Home' }],
  creator: 'IXIA Group Home',
  publisher: 'IXIA Group Home',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ixia-group-home.com'),
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://ixia-group-home.com',
    title: 'IXIA Group Home - 安心・安全な共同生活住居',
    description:
      '埼玉県草加市にあるグループホーム「IXIA」では、障がいをお持ちの方が安心して暮らせる共同生活住居を提供しています。',
    siteName: 'IXIA Group Home',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IXIA Group Home - 安心・安全な共同生活住居',
    description:
      '埼玉県草加市にあるグループホーム「IXIA」では、障がいをお持ちの方が安心して暮らせる共同生活住居を提供しています。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
          <ScrollToTop />
        </NavProvider>
      </body>
    </html>
  );
}
