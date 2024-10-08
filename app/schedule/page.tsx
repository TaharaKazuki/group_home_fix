'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

type ScheduleItemProps = {
  title: string;
  description: string;
  imageSrc: string;
  isReversed: boolean;
};

const ScheduleItem = ({
  title,
  description,
  imageSrc,
  isReversed,
}: ScheduleItemProps) => {
  return (
    <div className="grid w-full gap-[10vw] grid-cols-1 lg:grid-cols-2">
      <div className={`order-${isReversed ? 2 : 1}`}>
        <h2 className="lg:text-2xl text-lg text-center lg:text-left font-semibold">
          {title}
        </h2>
        <p className="pt-5 lg:pt-10 lg:leading-10 leading-6 text-center lg:text-left lg:text-base text-sm">
          {description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
      <div className={`order-${isReversed ? 1 : 2}`}>
        <img
          src={imageSrc}
          alt={title}
          className="size-full object-cover aspect-square"
        />
      </div>
    </div>
  );
};

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

  const scheduleItems = [
    {
      title: 'WALK',
      description: `サンプル文章が入ります\nサンプル文章が入ります\nサンプル文章が入ります\nサンプル文章が入ります。`,
      imageSrc: '/assets/hero/hero_background_1.png',
    },
    {
      title: 'RUN',
      description: `サンプル文章が入ります\nサンプル文章が入ります\nサンプル文章が入ります\nサンプル文章が入ります。`,
      imageSrc: '/assets/hero/hero_background_1.png',
    },
    {
      title: 'JUMP',
      description: `サンプル文章が入ります\nサンプル文章が入ります\nサンプル文章が入ります\nサンプル文章が入ります。`,
      imageSrc: '/assets/hero/hero_background_1.png',
    },
    // 他のスケジュール項目も同様に追加
  ];

  return (
    <>
      <main className="pt-[10vw] container mx-auto">
        <motion.div
          className="fixed inset-y-0 left-0 w-[8px]"
          style={{ scaleY, backgroundColor, transformOrigin: 'top' }}
        />
        <p className="font-semibold text-2xl">
          Schedule
          <span className="block text-xs font-normal mt-2">一日の流れなど</span>
        </p>
        <section className="mt-24 flex flex-col gap-[10vw]">
          {scheduleItems.map((item, index) => (
            <ScheduleItem
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

export default SchedulePage;
