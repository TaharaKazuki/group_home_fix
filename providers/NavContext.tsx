'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

const NavContext = createContext({
  navActive: false,
  toggleHandler: () => {},
});

export const useNav = () => useContext(NavContext);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [navActive, setNavActive] = useState<boolean>(false);

  const toggleHandler = useCallback(() => {
    setNavActive((prev) => !prev);
  }, []);

  return (
    <NavContext.Provider value={{ navActive, toggleHandler }}>
      {children}
    </NavContext.Provider>
  );
};
