/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { formatDesc } from '../ui/formatDesc';
import { ABOUT_SECTION_DESC } from '@/constant';

const AboutSection = () => {
  return (
    <section className="pt-[15vw]">
      <div className="lg:container relative mx-auto flex h-full flex-col items-center xl:flex-row">
        <div className="grid w-full gap-[10vw] grid-cols-1 lg:grid-cols-2">
          <div>
            <h2 className="lg:text-2xl text-lg text-center lg:text-left font-semibold">
              私たちイキシアグループホームについて
            </h2>
            <p className="pt-10 lg:leading-10 leading-6 text-center lg:text-left lg:text-base text-sm">
              {formatDesc(ABOUT_SECTION_DESC)}
            </p>
            <p className="mt-6 text-center lg:text-left">
              <Link href={'/about'} className="underline underline-offset-4">
                View more
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
