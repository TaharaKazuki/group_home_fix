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
        className="pointer-events-none fixed top-0 z-50 h-screen w-screen xl:z-50 bg-gradient-to-b from-red-300 to-white flex items-center justify-center"
      >
        Logoいれる
      </motion.div>
      {children}
    </AnimatePresence>
  );
};

export default FadeAnimation;
