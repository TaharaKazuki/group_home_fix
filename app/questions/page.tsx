'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FAQ_LIST } from '@/constant';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  const variants = {
    open: { height: 'auto', opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

  return (
    <div className="border-b border-gray-300 border-dotted">
      <button
        onClick={toggleAccordion}
        className="w-full text-left py-4 font-semibold focus:outline-none"
      >
        {question}
      </button>
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="py-4">{answer}</p>
      </motion.div>
    </div>
  );
};

const QuestionsPage = () => {
  return (
    <main className="pt-[10vw] container mx-auto">
      <p className="font-semibold text-2xl">
        Equipments
        <span className="block text-xs font-normal mt-2">設備など</span>
      </p>
      <section className="my-8">
        {FAQ_LIST.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </section>
    </main>
  );
};

export default QuestionsPage;
