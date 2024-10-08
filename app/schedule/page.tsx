'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const SchedulePage = () => {
  const { scrollYProgress } = useScroll();

  // scaleY のアニメーション設定
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // スクロールに合わせて色を変化させる設定
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    ['#FF6347', '#FFFF00', '#FF6347', '#000080']
  );

  return (
    <>
      <main className="pt-[10vw] container mx-auto">
        <p className="font-semibold text-2xl fixed">
          Schedule
          <span className="block text-xs font-normal mt-2">スケジュール</span>
        </p>
        <div className="h-[1000px]" />
        <motion.div
          className="fixed inset-y-0 left-0 w-[8px]"
          style={{ scaleY, backgroundColor, transformOrigin: 'top' }}
        />
      </main>
    </>
  );
};

export default SchedulePage;
