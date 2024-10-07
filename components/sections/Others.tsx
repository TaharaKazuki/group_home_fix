/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const OthersSection = () => {
  return (
    <section className="pt-[10vw]">
      <div className="container relative mx-auto flex h-full flex-col items-center xl:flex-row lg:gap-32 gap-10">
        <div>
          <img
            src="/assets/hero/hero_background_1.png"
            alt="sample"
            className="size-full object-cover aspect-5/4"
          />
          <div className="flex flex-col gap-10 mt-6 justify-center">
            <h2 className="lg:text-2xl text-lg text-center font-semibold">
              Fees・Facilities
              <span className="block text-sm font-normal">料金・設備</span>
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
                  href={'/equipment'}
                  className="underline underline-offset-4"
                >
                  View more
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
              Questions
              <span className="block text-sm font-normal">よくある質問</span>
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
                  href={'/questions'}
                  className="underline underline-offset-4"
                >
                  View more
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
