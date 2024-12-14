'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from 'react-icons/io';

type AccordionItemProps = {
  question: string;
  answer: string;
  questionId: number;
};

export const AccordionItem = ({
  question,
  answer,
  questionId,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  const variants = {
    open: { height: 'auto', opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

  return (
    <div className="border-b border-dotted border-gray-300">
      <button
        onClick={toggleAccordion}
        className="flex w-full flex-row items-center justify-between gap-2 py-4 text-left text-xs focus:outline-none lg:text-base"
      >
        <p className="font-semibold text-red-300">Q.{questionId}</p>
        {question}
        {isOpen ? (
          <IoIosArrowDropupCircle size={20} className="ml-auto text-red-300" />
        ) : (
          <IoIosArrowDropdownCircle
            size={20}
            className="ml-auto text-red-300"
          />
        )}
      </button>
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="py-2 text-base lg:py-4 lg:text-xl">
          <span className="mr-3 inline-block text-red-300 lg:mr-4">A.</span>
          {answer}
        </p>
      </motion.div>
    </div>
  );
};
