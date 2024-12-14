/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

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
              <Link
                href={LINK.ABOUT}
                className="relative underline-offset-4 before:absolute before:bottom-[-4px] before:left-0 before:h-[2px] before:w-0 before:bg-red-300 before:transition-all before:duration-300 before:content-[''] hover:underline-offset-0 hover:before:w-full"
              >
                <span className="text-base">詳しくはこちら</span>
              </Link>
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
