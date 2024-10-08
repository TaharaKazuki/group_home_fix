const HeroSection = () => {
  return (
    <section className="relative h-[100vh] text-white xl:h-screen">
      <div className="relative mx-auto flex h-full flex-col items-center xl:flex-row">
        <div className="absolute size-full bg-hero_image bg-no-repeat bg-cover bg-center" />
        <div className="flex h-full flex-1 z-10 flex-col items-center justify-center text-center text-black">
          Logoいれる
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
