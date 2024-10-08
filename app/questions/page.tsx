'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // アコーディオンの開閉を切り替える
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // 開閉のためのアニメーション設定
  const variants = {
    open: { height: 'auto', opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

  return (
    <div className="border-b border-gray-300">
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

const AccordionList = () => {
  const faqList = [
    {
      question: '質問1: こちらは何ですか？',
      answer: 'これはアコーディオンの答えです。',
    },
    {
      question: '質問2: 使用方法は？',
      answer: '使用方法は簡単です。クリックして展開します。',
    },
    {
      question: '質問3: カスタマイズ可能ですか？',
      answer: 'はい、自由にカスタマイズできます。',
    },
  ];

  return (
    <section className="container mx-auto my-8">
      {faqList.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </section>
  );
};

export default AccordionList;
