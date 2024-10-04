'use client';

import Link from 'next/link';
import { NAV_LINKS } from '@/constant';
import { motion } from 'framer-motion';

const letterAnim = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  enter: (i: number[]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.6, 0, 0.2, 1], delay: i[0] },
  }),
  exit: (i: number[]) => ({
    y: '100%',
    opacity: 0,
    transition: { duration: 0.8, ease: [0.6, 0, 0.2, 1], delay: i[1] },
  }),
};

const getLetter = (name: string) => {
  const letters = [] as JSX.Element[];
  name.split('').forEach((letter, index) => {
    letters.push(
      <motion.span
        variants={letterAnim}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={[index * 0.04, (name.length - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    );
  });
  return letters;
};

const Nav = () => {
  return (
    <ul className="flex flex-col items-center gap-8 font-primary text-4xl font-semibold uppercase text-accent">
      {NAV_LINKS.map((link, index) => (
        <li key={index} className="flex">
          <Link
            href={link.href}
            key={index}
            className="flex items-baseline overflow-hidden transition-all xl:hover:text-white"
          >
            {getLetter(link.name)}
            <span className="ml-3 text-xs">{getLetter(link.subText)}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;