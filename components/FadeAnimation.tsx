'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';

type FadeAnimationProps = {
  children: ReactNode;
};

const FadeAnimation = ({ children }: FadeAnimationProps) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 1, ease: 'easeIn' },
        }}
        className="pointer-events-none fixed top-0 z-30 h-screen w-screen bg-red-300 xl:z-40"
      />
      {children}
    </AnimatePresence>
  );
};

export default FadeAnimation;
