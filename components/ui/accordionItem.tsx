'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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
    <div className="border-b border-gray-300 border-dotted">
      <button
        onClick={toggleAccordion}
        className="w-full text-left py-4 text-xs lg:text-base focus:outline-none flex flex-row items-center justify-between gap-2"
      >
        <p className="text-red-300 font-semibold">Q.{questionId}</p>
        {question}
        {isOpen ? (
          <IoIosArrowDropupCircle size={20} className="text-red-300 ml-auto" />
        ) : (
          <IoIosArrowDropdownCircle
            size={20}
            className="text-red-300 ml-auto"
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
        <p className="lg:py-4 py-2 text-base lg:text-xl">
          <span className="text-red-300 inline-block mr-3 lg:mr-4">A.</span>
          {answer}
        </p>
      </motion.div>
    </div>
  );
};
