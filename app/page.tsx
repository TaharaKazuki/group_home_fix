import type { Metadata } from 'next';

import HomePageContent from './HomePageContent';

export const metadata: Metadata = {
  title: 'IXIA Group Home - 安心・安全な共同生活住居',
  description:
    'IXIA Group Homeは埼玉県草加市にある障がい者グループホームです。利用者様一人ひとりの個性を大切にし、24時間サポート体制で安心・安全な共同生活をサポートいたします。',
  keywords: [
    'IXIA',
    'グループホーム',
    '障がい者支援',
    '共同生活住居',
    '草加市',
    '埼玉県',
    '24時間サポート',
  ],
  openGraph: {
    title: 'IXIA Group Home - 安心・安全な共同生活住居',
    description:
      'IXIA Group Homeは埼玉県草加市にある障がい者グループホームです。',
    url: '/',
    images: [
      {
        url: '/assets/hero/logo.svg',
        width: 800,
        height: 800,
        alt: 'IXIA Group Home ロゴ',
      },
    ],
  },
};

export default function Home() {
  return <HomePageContent />;
}
