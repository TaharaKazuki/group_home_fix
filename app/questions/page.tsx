import { AccordionItem } from '@/components/ui/accordionItem';
import { FAQ_LIST } from '@/constant';

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
