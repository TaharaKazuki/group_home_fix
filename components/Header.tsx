'use client';

import { AnimatePresence } from 'framer-motion';
import Nav from './Nav';
import { cn } from '@/lib/utils';
import { useNav } from '@/providers/NavContext';
import { Button } from './ui/button';

const Header = () => {
  const { navActive, toggleHandler } = useNav();

  return (
    <header className="fixed inset-x-0 top-[20px] lg:top-[40px] z-[60]">
      <div className="container mx-auto">
        <div className="flex items-center justify-end gap-4">
          <Button
            variant={'default'}
            size={'lg'}
            className="rounded-full bg-yellow-300 hidden lg:block"
          >
            お問い合わせはコチラ
          </Button>
          <button
            onClick={toggleHandler}
            className="relative z-[60] flex h-6 w-8 items-center justify-center text-accent outline-none"
          >
            <span
              className={cn(
                'absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-300 will-change-transform',
                navActive ? 'top-1/2 rotate-45' : 'top-0 translate-y-0'
              )}
            />
            <span
              className={cn(
                'absolute left-0 h-[1.5px] w-full bg-current transition-opacity duration-300',
                navActive ? 'opacity-0' : 'top-1/2'
              )}
            />
            <span
              className={cn(
                'absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-300 will-change-transform',
                navActive ? 'top-1/2 -rotate-45' : 'bottom-0 translate-y-0'
              )}
            />
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">{navActive && <Nav />}</AnimatePresence>
    </header>
  );
};

export default Header;
