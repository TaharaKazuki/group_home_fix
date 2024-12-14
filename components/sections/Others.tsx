import Link from 'next/link';

import { LINK } from '@/constant';

const OthersSection = () => {
  return (
    <section className="pt-[10vw]">
      <div className="container relative mx-auto flex h-full flex-col items-center gap-10 lg:flex-row lg:gap-32">
        <div>
          <img
            src="/assets/hero/hero_background_1.png"
            alt="sample"
            className="aspect-5/4 size-full object-cover"
          />
          <div className="mt-6 flex flex-col justify-center gap-10">
            <h2 className="text-center text-lg font-semibold lg:text-2xl">
              料金・設備
              <span className="block text-sm font-normal">Fees/Facilities</span>
            </h2>
            <div>
              <p className="text-center text-sm leading-8">
                サンプル文章サンプル文章サンプル文章サンプル文章
                <br />
                サンプル文章サンプル文章サンプル文章サンプル文章
                <br />
                サンプル文章サンプル文章サンプル文章サンプル文章が入ります。
              </p>
              <p className="mt-3 text-center">
                <Link
                  href={LINK.EQUIPMENT}
                  className="relative underline-offset-4 before:absolute before:bottom-[-4px] before:left-0 before:h-[2px] before:w-0 before:bg-red-300 before:transition-all before:duration-300 before:content-[''] hover:underline-offset-0 hover:before:w-full"
                >
                  <span className="text-base">詳しくはこちら</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/assets/hero/hero_background_1.png"
            alt="sample"
            className="aspect-5/4 size-full object-cover"
          />
          <div className="mt-6 flex flex-col justify-center gap-10">
            <h2 className="text-center text-lg font-semibold lg:text-2xl">
              ご質問について
              <span className="block text-sm font-normal">Questions</span>
            </h2>
            <div>
              <p className="text-center text-sm leading-8">
                サンプル文章サンプル文章サンプル文章サンプル文章
                <br />
                サンプル文章サンプル文章サンプル文章サンプル文章
                <br />
                サンプル文章サンプル文章サンプル文章サンプル文章が入ります。
              </p>
              <p className="mt-3 text-center">
                <Link
                  href={LINK.QUESTIONS}
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

export default OthersSection;
