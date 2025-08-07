import type { Metadata } from 'next';

import { AccordionItem } from '@/components/ui/accordionItem';
import { FAQ_LIST } from '@/constant';

export const metadata: Metadata = {
  title: 'よくあるご質問',
  description:
    'IXIA Group Homeによく寄せられるご質問と回答をまとめました。入居手続き、料金、日常生活、サポート体制など、気になる点を詳しくご説明しています。',
  keywords: [
    'よくある質問',
    'FAQ',
    'IXIA',
    'グループホーム',
    '入居',
    '手続き',
    'サポート',
  ],
  openGraph: {
    title: 'よくあるご質問 | IXIA Group Home',
    description: 'IXIA Group Homeによく寄せられるご質問と回答をまとめました。',
    url: '/questions',
  },
};

const QuestionsPage = () => {
  return (
    <main className="container mx-auto pt-[10vw]">
      <p className="text-2xl font-semibold">
        ご質問について
        <span className="mt-2 block text-base font-normal text-red-300">
          Questions
        </span>
      </p>
      <section className="my-8">
        {FAQ_LIST.map((item, i) => (
          <AccordionItem
            key={i}
            question={item.question}
            answer={item.answer}
            questionId={i + 1}
          />
        ))}
      </section>
    </main>
  );
};

export default QuestionsPage;
