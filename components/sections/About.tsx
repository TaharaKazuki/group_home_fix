import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="pt-[17vw]">
      <div className="lg:container relative mx-auto flex h-full flex-col items-center xl:flex-row">
        <div className="grid w-full gap-[10vw] grid-cols-1 lg:grid-cols-2">
          <div>
            <h2 className="lg:text-2xl text-lg text-center lg:text-left font-semibold">
              私たちイキシアグループホームについて
            </h2>
            <p className="pt-10 lg:leading-10 leading-6 text-center lg:text-left lg:text-base text-sm">
              サンプル文章が入ります
              <br />
              サンプル文章が入りますサンプル文章が入ります
              <br />
              サンプル文章が入りますサンプル文章が入ります
              <br />
              サンプル文章が入ります。
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
