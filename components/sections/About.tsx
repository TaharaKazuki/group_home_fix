/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { formatDesc } from '../ui/formatDesc';
import { ABOUT_SECTION_DESC, LINK } from '@/constant';

const AboutSection = () => {
  return (
    <section className="pt-[15vw]">
      <div className="lg:container relative mx-auto flex h-full flex-col items-center xl:flex-row">
        <div className="grid w-full gap-[10vw] grid-cols-1 lg:grid-cols-2">
          <div>
            <h2 className="lg:text-2xl text-lg text-center lg:text-left font-semibold">
              私たちについて
            </h2>
            <p className="pt-10 lg:leading-10 leading-6 text-center lg:text-left lg:text-base text-sm">
              {formatDesc(ABOUT_SECTION_DESC)}
            </p>
            <p className="mt-6 text-center lg:text-left">
              <Link
                href={LINK.ABOUT}
                className="relative underline-offset-4 hover:underline-offset-0 before:content-[''] before:absolute before:left-0 before:bottom-[-4px] before:h-[2px] before:w-0 before:bg-red-300 before:transition-all before:duration-300 hover:before:w-full"
              >
                <span className="text-base">詳しくはこちら</span>
              </Link>
            </p>
          </div>
          <img
            src="/assets/hero/hero_background_1.png"
            alt="sample"
            className="size-full object-cover aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
