/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const SliderSection = () => {
  return (
    <section className="pt-[17vw]">
      <div className="container relative mx-auto flex h-full flex-col items-center xl:flex-row">
        <div>
          <img
            src="/assets/hero/hero_background_1.png"
            alt="sample"
            className="size-full object-cover aspect-video"
          />
          <div className="flex lg:flex-row flex-col gap-[10vw] mt-6 justify-between">
            <h2 className="lg:text-2xl text-lg text-left lg:text-left font-semibold">
              Schedule
              <span className="block text-sm font-normal">1日の流れ</span>
            </h2>
            <div>
              <p className="lg:leading-10 leading-6 lg:text-left lg:text-sm text-sm">
                玄関を入ると、ほっと安らぐ木の香りと和の温もり、階段を上がったり、下がったりリズムのある楽しみ。
                <br />
                目の前には四季折々の絶景が広がり、時間を忘れてゆったりとお過ごしいただけます。
              </p>
              <p className="mt-3 text-center lg:text-left">
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

export default SliderSection;
