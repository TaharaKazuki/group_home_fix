/* eslint-disable @next/next/no-img-element */
import { LINK } from '@/constant';
import Link from 'next/link';

const LifeSection = () => {
  return (
    <section className="pt-[10vw]">
      <div className="container relative mx-auto flex h-full flex-col items-center xl:flex-row">
        <div>
          <img
            src="/assets/hero/hero_background_1.png"
            alt="sample"
            className="size-full object-cover aspect-video"
          />
          <div className="flex lg:flex-row flex-col gap-[10vw] mt-6 justify-between">
            <h2 className="lg:text-2xl text-lg text-left lg:text-left font-semibold">
              暮らし
              <span className="block text-sm font-normal">Life</span>
            </h2>
            <div>
              <p className="lg:leading-10 leading-6 lg:text-left lg:text-sm text-sm">
                サンプル文章サンプル文章サンプル文章サンプル文章が入ります。
                <br />
                サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章が入ります。
              </p>
              <p className="mt-3 text-center lg:text-left">
                <Link
                  href={LINK.LIFE}
                  className="relative underline-offset-4 hover:underline-offset-0 before:content-[''] before:absolute before:left-0 before:bottom-[-4px] before:h-[2px] before:w-0 before:bg-red-300 before:transition-all before:duration-300 hover:before:w-full"
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
