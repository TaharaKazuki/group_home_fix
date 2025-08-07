import type { Metadata } from 'next';

import LifePageContent from './LifePageContent';

export const metadata: Metadata = {
  title: '暮らし',
  description:
    'IXIA Group Homeでの日常生活の様子をご紹介。利用者様が安心して過ごせるよう、充実したサポート体制と快適な住環境を整えています。一人ひとりの個性を大切にした生活支援を行っています。',
  keywords: [
    '暮らし',
    '生活',
    'IXIA',
    'グループホーム',
    '日常',
    'サポート',
    '住環境',
  ],
  openGraph: {
    title: '暮らし | IXIA Group Home',
    description: 'IXIA Group Homeでの日常生活の様子をご紹介します。',
    url: '/life',
  },
};

const LifePage = () => {
  return <LifePageContent />;
};

export default LifePage;
