import Image from 'next/image';

import { DetailLink } from '../ui/DetailLink';
import { LINK } from '@/constant';

const LifeSection = () => {
  return (
    <section className="pt-[10vw]">
      <div className="container relative mx-auto flex h-full flex-col items-center xl:flex-row">
        <div>
          <Image
            src="/assets/life.png"
            alt="sample"
            width={930}
            height={520}
            className="aspect-video size-full object-cover"
          />
          <div className="mt-6 flex flex-col justify-between gap-[10vw] lg:flex-row">
            <h2 className="text-left text-lg font-semibold lg:text-left lg:text-2xl">
              暮らし
              <span className="block text-sm font-normal text-red-300">
                Life
              </span>
            </h2>
            <div>
              <p className="text-sm leading-6 lg:text-left lg:text-sm lg:leading-10">
                サンプル文章サンプル文章サンプル文章サンプル文章が入ります。
                <br />
                サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章サンプル文章が入ります。
              </p>
              <p className="mt-3 text-center lg:text-left">
                <DetailLink href={LINK.LIFE}>詳しくはこちら</DetailLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeSection;
