import Image from 'next/image';

import { DetailLink } from '../ui/DetailLink';
import { LINK } from '@/constant';

const OthersSection = () => {
  return (
    <section className="pt-[10vw]">
      <div className="container relative mx-auto flex h-full flex-col items-center gap-10 lg:flex-row lg:gap-32">
        <div>
          <Image
            src="/assets/fees_facilities.png"
            alt="sample"
            width={400}
            height={320}
            className="aspect-5/4 size-full object-cover"
          />
          <div className="mt-6 flex flex-col justify-center gap-10">
            <h2 className="text-center text-lg font-semibold lg:text-2xl">
              料金・設備
              <span className="block text-sm font-normal text-red-300">
                Fees/Facilities
              </span>
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
                <DetailLink href={LINK.EQUIPMENT}>詳しくはこちら</DetailLink>
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/assets/questions.png"
            alt="sample"
            width={400}
            height={320}
            className="aspect-5/4 size-full object-cover"
          />
          <div className="mt-6 flex flex-col justify-center gap-10">
            <h2 className="text-center text-lg font-semibold lg:text-2xl">
              ご質問について
              <span className="block text-sm font-normal text-red-300">
                Questions
              </span>
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
                <DetailLink href={LINK.QUESTIONS}>詳しくはこちら</DetailLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OthersSection;
