const HeroSection = () => {
  return (
    <section className="relative h-screen text-white xl:h-screen">
      <div className="relative mx-auto flex h-full flex-col items-center xl:flex-row">
        <div className="absolute size-full bg-hero_image bg-cover bg-center bg-no-repeat" />
        <div className="z-10 flex h-full flex-1 flex-col items-center justify-center text-center text-black">
          Logoいれる
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
