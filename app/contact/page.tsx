import type { Metadata } from 'next';

import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    'IXIA Group Homeへのご質問やご相談、施設見学のお申し込みはこちらから。スタッフが丁寧にご対応いたします。お気軽にお問い合わせください。',
  keywords: [
    'お問い合わせ',
    'IXIA',
    '相談',
    '見学',
    'グループホーム',
    '福祉サービス',
  ],
  openGraph: {
    title: 'お問い合わせ | IXIA Group Home',
    description:
      'IXIA Group Homeへのご質問やご相談、施設見学のお申し込みはこちらから。',
    url: '/contact',
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center text-3xl font-bold">お問い合わせ</h1>
        <p className="mx-auto mb-12 max-w-[400px] text-center text-gray-600">
          ご質問やご相談がございましたら
          <br />
          下記フォームよりお気軽にお問い合わせください。
        </p>
        <ContactForm />
      </div>
    </main>
  );
}
