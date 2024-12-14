import Link from 'next/link';

import { LINK } from '@/constant';

const LifeSection = () => {
  return (
    <section className="pt-[10vw]">
      <div className="container relative mx-auto flex h-full flex-col items-center xl:flex-row">
        <div>
          <img
            src="/assets/hero/hero_background_1.png"
            alt="sample"
            className="aspect-video size-full object-cover"
          />
          <div className="mt-6 flex flex-col justify-between gap-[10vw] lg:flex-row">
            <h2 className="text-left text-lg font-semibold lg:text-left lg:text-2xl">
              暮らし
              <span className="block text-sm font-normal">Life</span>
            </h2>
            <div>
              <p className="text-sm leading-6 lg:text-left lg:text-sm lg:leading-10">
                サンプル文章サンプル文章サンプル文章サンプル文章が入ります。
                <br />
                サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章が入ります。
              </p>
              <p className="mt-3 text-center lg:text-left">
                <Link
                  href={LINK.LIFE}
                  className="relative underline-offset-4 before:absolute before:bottom-[-4px] before:left-0 before:h-[2px] before:w-0 before:bg-red-300 before:transition-all before:duration-300 before:content-[''] hover:underline-offset-0 hover:before:w-full"
                >
                  <span className="text-base">詳しくはこちら</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeSection;
