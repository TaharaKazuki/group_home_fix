/* eslint-disable @next/next/no-img-element */
import { DetailLink } from '../ui/DetailLink';
import { formatDesc } from '../ui/formatDesc';
import { ABOUT_SECTION_DESC, LINK } from '@/constant';

const AboutSection = () => {
  return (
    <section className="pt-[15vw]">
      <div className="relative mx-auto flex h-full flex-col items-center lg:container xl:flex-row">
        <div className="grid w-full grid-cols-1 gap-[10vw] lg:grid-cols-2">
          <div>
            <h2 className="text-center text-lg font-semibold lg:text-left lg:text-2xl">
              私たちについて
            </h2>
            <p className="pt-10 text-center text-sm leading-6 lg:text-left lg:text-base lg:leading-10">
              {formatDesc(ABOUT_SECTION_DESC)}
            </p>
            <p className="mt-6 text-center lg:text-left">
              <DetailLink href={LINK.ABOUT}>詳しくはこちら</DetailLink>
            </p>
          </div>
          <img
            src="/assets/hero/hero_background_1.png"
            alt="sample"
            className="aspect-square size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
