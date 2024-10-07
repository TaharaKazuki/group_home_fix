const Hero = () => {
  return (
    <section className="relative h-[100vh] text-white xl:h-screen bg-red-500">
      <div className="container relative mx-auto flex h-full flex-col items-center xl:flex-row">
        <div
          data-scroll
          data-scroll-speed="0.4"
          className="flex h-full flex-1 flex-col items-center justify-center gap-4 text-center xl:gap-10 xl:pb-12"
        >
          Sample title
        </div>
      </div>
    </section>
  );
};

export default Hero;
