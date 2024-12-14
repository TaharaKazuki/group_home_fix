'use client';

import { AnimatePresence } from 'framer-motion';

import Nav from './Nav';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useNav } from '@/providers/NavContext';

const Header = () => {
  const { navActive, toggleHandler } = useNav();

  return (
    <header className="fixed inset-x-0 top-[20px] z-[60] lg:top-[40px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-end gap-4">
          <Button
            variant={'default'}
            size={'lg'}
            className="hidden rounded-full bg-red-300 text-white shadow-md transition-all duration-300 hover:bg-red-400 lg:block"
          >
            お問い合わせ
          </Button>

          <button
            onClick={toggleHandler}
            className="relative z-[60] flex h-6 w-8 items-center justify-center outline-none"
          >
            <span
              className={cn(
                'absolute left-0 h-[1px] w-full bg-current transition-transform duration-300 will-change-transform',
                navActive ? 'top-1/2 rotate-45' : 'top-0 translate-y-0'
              )}
            />
            <span
              className={cn(
                'absolute left-0 h-[1px] w-full bg-current transition-opacity duration-300',
                navActive ? 'opacity-0' : 'top-1/2'
              )}
            />
            <span
              className={cn(
                'absolute left-0 h-[1px] w-full bg-current transition-transform duration-300 will-change-transform',
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
