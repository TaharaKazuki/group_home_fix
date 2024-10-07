'use client';

import Hero from '@/components/Hero';
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
      <Hero />
      <div className="h-[4000px]" />
    </div>
  );
}
