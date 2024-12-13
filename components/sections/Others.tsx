/* eslint-disable @next/next/no-img-element */
import { LINK } from '@/constant';
import Link from 'next/link';

const OthersSection = () => {
  return (
    <section className="pt-[10vw]">
      <div className="container relative mx-auto flex h-full flex-col items-center lg:flex-row lg:gap-32 gap-10">
        <div>
          <img
            src="/assets/hero/hero_background_1.png"
            alt="sample"
            className="size-full object-cover aspect-5/4"
          />
          <div className="flex flex-col gap-10 mt-6 justify-center">
            <h2 className="lg:text-2xl text-lg text-center font-semibold">
              料金・設備
              <span className="block text-sm font-normal">Fees/Facilities</span>
            </h2>
            <div>
              <p className="leading-8 text-center text-sm">
                サンプル文章サンプル文章サンプル文章サンプル文章
                <br />
                サンプル文章サンプル文章サンプル文章サンプル文章
                <br />
                サンプル文章サンプル文章サンプル文章サンプル文章が入ります。
              </p>
              <p className="mt-3 text-center">
                <Link
                  href={LINK.EQUIPMENT}
                  className="relative underline-offset-4 hover:underline-offset-0 before:content-[''] before:absolute before:left-0 before:bottom-[-4px] before:h-[2px] before:w-0 before:bg-red-300 before:transition-all before:duration-300 hover:before:w-full"
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
            className="size-full object-cover aspect-5/4"
          />
          <div className="flex flex-col gap-10 mt-6 justify-center">
            <h2 className="lg:text-2xl text-lg text-center font-semibold">
              ご質問について
              <span className="block text-sm font-normal">Questions</span>
            </h2>
            <div>
              <p className="leading-8 text-center text-sm">
                サンプル文章サンプル文章サンプル文章サンプル文章
                <br />
                サンプル文章サンプル文章サンプル文章サンプル文章
                <br />
                サンプル文章サンプル文章サンプル文章サンプル文章が入ります。
              </p>
              <p className="mt-3 text-center">
                <Link
                  href={LINK.QUESTIONS}
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

export default OthersSection;
