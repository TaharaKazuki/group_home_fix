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
        <motion.div
          className="fixed inset-y-0 left-0 w-[8px]"
          style={{ scaleY, backgroundColor, transformOrigin: 'top' }}
        />
        <p className="font-semibold text-2xl">
          Schedule
          <span className="block text-xs font-normal mt-2">一日の流れなど</span>
        </p>
        <section className="mt-24 flex flex-col gap-[10vw]">
          <div className="grid w-full gap-[10vw] grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="lg:text-2xl text-lg text-center lg:text-left font-semibold">
                WALK
              </h2>
              <p className="pt-5 lg:pt-10 lg:leading-10 leading-6 text-center lg:text-left lg:text-base text-sm">
                サンプル文章が入ります
                <br />
                サンプル文章が入りますサンプル文章が入ります
                <br />
                サンプル文章が入りますサンプル文章が入ります
                <br />
                サンプル文章が入ります。
              </p>
            </div>
            <img
              src="/assets/hero/hero_background_1.png"
              alt="sample"
              className="size-full object-cover aspect-square"
            />
          </div>
          <div className="grid w-full gap-[10vw] grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="lg:text-2xl text-lg text-center lg:text-left font-semibold">
                WALK
              </h2>
              <p className="pt-5 lg:pt-10 lg:leading-10 leading-6 text-center lg:text-left lg:text-base text-sm">
                サンプル文章が入ります
                <br />
                サンプル文章が入りますサンプル文章が入ります
                <br />
                サンプル文章が入りますサンプル文章が入ります
                <br />
                サンプル文章が入ります。
              </p>
            </div>
            <img
              src="/assets/hero/hero_background_1.png"
              alt="sample"
              className="size-full object-cover aspect-square"
            />
          </div>
          <div className="grid w-full gap-[10vw] grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="lg:text-2xl text-lg text-center lg:text-left font-semibold">
                WALK
              </h2>
              <p className="pt-5 lg:pt-10 lg:leading-10 leading-6 text-center lg:text-left lg:text-base text-sm">
                サンプル文章が入ります
                <br />
                サンプル文章が入りますサンプル文章が入ります
                <br />
                サンプル文章が入りますサンプル文章が入ります
                <br />
                サンプル文章が入ります。
              </p>
            </div>
            <img
              src="/assets/hero/hero_background_1.png"
              alt="sample"
              className="size-full object-cover aspect-square"
            />
          </div>
          <div className="grid w-full gap-[10vw] grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="lg:text-2xl text-lg text-center lg:text-left font-semibold">
                WALK
              </h2>
              <p className="pt-5 lg:pt-10 lg:leading-10 leading-6 text-center lg:text-left lg:text-base text-sm">
                サンプル文章が入ります
                <br />
                サンプル文章が入りますサンプル文章が入ります
                <br />
                サンプル文章が入りますサンプル文章が入ります
                <br />
                サンプル文章が入ります。
              </p>
            </div>
            <img
              src="/assets/hero/hero_background_1.png"
              alt="sample"
              className="size-full object-cover aspect-square"
            />
          </div>
          <div className="grid w-full gap-[10vw] grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="lg:text-2xl text-lg text-center lg:text-left font-semibold">
                WALK
              </h2>
              <p className="pt-5 lg:pt-10 lg:leading-10 leading-6 text-center lg:text-left lg:text-base text-sm">
                サンプル文章が入ります
                <br />
                サンプル文章が入りますサンプル文章が入ります
                <br />
                サンプル文章が入りますサンプル文章が入ります
                <br />
                サンプル文章が入ります。
              </p>
            </div>
            <img
              src="/assets/hero/hero_background_1.png"
              alt="sample"
              className="size-full object-cover aspect-square"
            />
          </div>
          <div className="grid w-full gap-[10vw] grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="lg:text-2xl text-lg text-center lg:text-left font-semibold">
                WALK
              </h2>
              <p className="pt-5 lg:pt-10 lg:leading-10 leading-6 text-center lg:text-left lg:text-base text-sm">
                サンプル文章が入ります
                <br />
                サンプル文章が入りますサンプル文章が入ります
                <br />
                サンプル文章が入りますサンプル文章が入ります
                <br />
                サンプル文章が入ります。
              </p>
            </div>
            <img
              src="/assets/hero/hero_background_1.png"
              alt="sample"
              className="size-full object-cover aspect-square"
            />
          </div>
          <div className="grid w-full gap-[10vw] grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="lg:text-2xl text-lg text-center lg:text-left font-semibold">
                WALK
              </h2>
              <p className="pt-5 lg:pt-10 lg:leading-10 leading-6 text-center lg:text-left lg:text-base text-sm">
                サンプル文章が入ります
                <br />
                サンプル文章が入りますサンプル文章が入ります
                <br />
                サンプル文章が入りますサンプル文章が入ります
                <br />
                サンプル文章が入ります。
              </p>
            </div>
            <img
              src="/assets/hero/hero_background_1.png"
              alt="sample"
              className="size-full object-cover aspect-square"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default SchedulePage;
