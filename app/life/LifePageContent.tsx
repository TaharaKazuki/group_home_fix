'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

import { formatDesc } from '@/components/ui/formatDesc';
import { LIFE_ITEMS } from '@/constant';
import { cn } from '@/lib/utils';

type LifeItemProps = {
  title: string;
  subTitle: string;
  description: string;
  imageSrc: string;
  isReversed: boolean;
};

const LifeItem = ({
  title,
  subTitle,
  description,
  imageSrc,
  isReversed,
}: LifeItemProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-[10vw] lg:grid-cols-2">
      {/* 画像部分 */}
      <div className={cn('order-1', isReversed && 'lg:order-2')}>
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={400}
          className="aspect-square size-full object-cover"
        />
      </div>
      {/* テキスト部分 */}
      <div className={cn('order-2', isReversed && 'lg:order-1')}>
        <h2 className="text-center text-lg font-semibold lg:text-left lg:text-3xl">
          {title}
          <span className="inline-block pl-2 text-base text-red-300">
            {subTitle}
          </span>
        </h2>
        <p className="pt-5 text-center text-sm leading-6 lg:pt-10 lg:text-left lg:text-base lg:leading-10">
          {formatDesc(description)}
        </p>
      </div>
    </div>
  );
};

const LifePageContent = () => {
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
      <main className="container mx-auto pt-[10vw]">
        <motion.div
          className="fixed inset-y-0 left-0 w-[2vw] lg:w-[1.2vw]"
          style={{ scaleY, backgroundColor, transformOrigin: 'top' }}
        />
        <p className="text-2xl font-semibold">
          暮らし
          <span className="mt-2 block text-base font-normal text-red-300">
            Life
          </span>
        </p>
        <section className="mt-16 flex flex-col gap-[10vw] lg:mt-20">
          {LIFE_ITEMS.map((item, index) => (
            <LifeItem
              key={index}
              title={item.title}
              subTitle={item.subTitle}
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

export default LifePageContent;
