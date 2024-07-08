'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface LayoutContextProps {
  hideHeader: boolean;
  setHideHeader: (hide: boolean) => void;
  hideBreadcrumbs: boolean;
  setHideBreadcrumbs: (hide: boolean) => void;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [hideHeader, setHideHeader] = useState(false);
  const [hideBreadcrumbs, setHideBreadcrumbs] = useState(false);

  return (
    <LayoutContext.Provider value={{ hideHeader, setHideHeader, hideBreadcrumbs, setHideBreadcrumbs }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};
