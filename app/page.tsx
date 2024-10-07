'use client';

import HeroSection from '@/components/sections/Hero';
import AboutSection from '@/components/sections/About';
import ScheduleSection from '@/components/sections/Schedule';
import OthersSection from '@/components/sections/Others';
import SliderSection from '@/components/sections/Slider';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);

  return (
    <div className="h-full overflow-hidden">
      <main>
        <HeroSection />
        <AboutSection />
        <ScheduleSection />
        <OthersSection />
        <SliderSection />
      </main>
    </div>
  );
}
