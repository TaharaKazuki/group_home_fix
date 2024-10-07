/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const OthersSection = () => {
  return (
    <section className="pt-[10vw]">
      <div className="container relative mx-auto flex h-full flex-col items-center xl:flex-row gap-32">
        <div>
          <img
            src="/assets/hero/hero_background_1.png"
            alt="sample"
            className="size-full object-cover aspect-5/4"
          />
          <div className="flex flex-col gap-10 mt-6 justify-center">
            <h2 className="lg:text-2xl text-lg text-center font-semibold">
              Schedule
              <span className="block text-sm font-normal">1日の流れ</span>
            </h2>
            <div>
              <p className="leading-8 text-center text-sm">
                玄関を入ると、ほっと安らぐ木の香りと和の温もり、
                <br />
                階段を上がったり、下がったりリズムのある楽しみ。
                <br />
                時間を忘れてゆったりとお過ごしいただけます。
              </p>
              <p className="mt-3 text-center">
                <Link href={'/about'} className="underline underline-offset-4">
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
              Schedule
              <span className="block text-sm font-normal">1日の流れ</span>
            </h2>
            <div>
              <p className="leading-8 text-center text-sm">
                玄関を入ると、ほっと安らぐ木の香りと和の温もり、
                <br />
                階段を上がったり、下がったりリズムのある楽しみ。
                <br />
                時間を忘れてゆったりとお過ごしいただけます。
              </p>
              <p className="mt-3 text-center">
                <Link href={'/about'} className="underline underline-offset-4">
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
