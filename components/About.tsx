import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="pt-[17vw] xl:h-[90vh] xl:w-screen xl:py-0">
      <div className="container relative mx-auto flex h-full flex-col items-center xl:flex-row">
        <div className="grid w-full gap-[10vw] grid-cols-1 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">
              私たちイキシアグループホームについて
            </h2>
            <p className="pt-10 leading-10">
              サンプル文章が入ります
              <br />
              サンプル文章が入りますサンプル文章が入ります
              <br />
              サンプル文章が入りますサンプル文章が入ります
              <br />
              サンプル文章が入ります。
            </p>
            <Link href={'/about'}>View more</Link>
          </div>
          <div className="bg-red-300 w-full h-[400px]" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
