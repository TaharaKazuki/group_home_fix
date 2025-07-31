'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { type ReactNode, useEffect } from 'react';

import { useNav } from '@/providers/NavContext';

type FadeAnimationProps = {
  children: ReactNode;
};

const FadeAnimation = ({ children }: FadeAnimationProps) => {
  const pathname = usePathname();
  const { setFadeAnimationActive } = useNav();

  useEffect(() => {
    setFadeAnimationActive(true);
    const timer = setTimeout(() => {
      setFadeAnimationActive(false);
    }, 2500); // 1.5秒delay + 1秒duration

    return () => clearTimeout(timer);
  }, [pathname, setFadeAnimationActive]);
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1.5, duration: 1, ease: 'easeIn' },
        }}
        className="pointer-events-none fixed top-0 z-40 flex h-screen w-screen items-center justify-center bg-gradient-to-b from-red-200 to-white"
      >
        <Image
          src="/assets/hero/logo.svg"
          alt="Logo"
          width={800}
          height={800}
          priority
          className="object-contain"
        />
      </motion.div>
      {children}
    </AnimatePresence>
  );
};

export default FadeAnimation;
