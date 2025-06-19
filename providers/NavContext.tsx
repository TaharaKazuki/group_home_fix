'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

type NavContextType = {
  navActive: boolean;
  toggleHandler: () => void;
  fadeAnimationActive: boolean;
  setFadeAnimationActive: (active: boolean) => void;
};

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [navActive, setNavActive] = useState(false);
  const [fadeAnimationActive, setFadeAnimationActive] = useState(false);

  const toggleHandler = () => {
    setNavActive(!navActive);
  };

  return (
    <NavContext.Provider
      value={{
        navActive,
        toggleHandler,
        fadeAnimationActive,
        setFadeAnimationActive,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error('useNav must be used within a NavProvider');
  }
  return context;
};
