'use client';

import { formatDesc } from '@/components/ui/formatDesc';
import { LIFE_ITEMS } from '@/constant';
import { cn } from '@/lib/utils';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

type LifeItemProps = {
  title: string;
  description: string;
  imageSrc: string;
  isReversed: boolean;
};

const LifeItem = ({
  title,
  description,
  imageSrc,
  isReversed,
}: LifeItemProps) => {
  return (
    <div className="grid w-full gap-[10vw] grid-cols-1 lg:grid-cols-2">
      {/* 画像部分 */}
      <div className={cn('order-1', isReversed && 'lg:order-2')}>
        <img
          src={imageSrc}
          alt={title}
          className="size-full object-cover aspect-square"
        />
      </div>
      {/* テキスト部分 */}
      <div className={cn('order-2', isReversed && 'lg:order-1')}>
        <h2 className="lg:text-3xl text-lg text-center lg:text-left font-semibold text-red-300">
          {title}
        </h2>
        <p className="pt-5 lg:pt-10 lg:leading-10 leading-6 text-center lg:text-left lg:text-base text-sm">
          {formatDesc(description)}
        </p>
      </div>
    </div>
  );
};

const LifePage = () => {
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
        <motion.div
          className="fixed inset-y-0 left-0 lg:w-[1vw] w-[1.8vw]"
          style={{ scaleY, backgroundColor, transformOrigin: 'top' }}
        />
        <p className="font-semibold text-2xl">
          暮らし
          <span className="block text-xs font-normal mt-2">Life</span>
        </p>
        <section className="lg:mt-20 mt-16 flex flex-col gap-[10vw]">
          {LIFE_ITEMS.map((item, index) => (
            <LifeItem
              key={index}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              isReversed={index % 2 !== 0}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default LifePage;
