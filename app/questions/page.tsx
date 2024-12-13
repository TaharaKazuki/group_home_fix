import { FAQ_LIST } from '@/constant';
import { AccordionItem } from '@/components/ui/accordionItem';

const QuestionsPage = () => {
  return (
    <main className="pt-[10vw] container mx-auto">
      <p className="font-semibold text-2xl">
        よくある質問
        <span className="block text-xs font-normal mt-2">Questions</span>
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
