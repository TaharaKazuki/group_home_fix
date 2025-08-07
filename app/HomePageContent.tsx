'use client';

import AboutSection from '@/components/sections/About';
import HeroSection from '@/components/sections/Hero';
import LifeSection from '@/components/sections/Life';
import OthersSection from '@/components/sections/Others';
import SliderSection from '@/components/sections/Slider';

export default function HomePageContent() {
  return (
    <div className="h-full overflow-hidden">
      <main>
        <HeroSection />
        <AboutSection />
        <LifeSection />
        <OthersSection />
        <SliderSection />
      </main>
    </div>
  );
}
