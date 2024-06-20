'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { shouldHideBreadcrumbs, shouldHideHeader } from '@/utils/shouldHideHeader';
import ClientContent from './ClientContent';

const ClientContentWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideHeader = shouldHideHeader(pathname);
  const hideBreadcrumbs = shouldHideBreadcrumbs(pathname);

  return (
    <ClientContent hideHeader={hideHeader} hideBreadcrumbs={hideBreadcrumbs}>
      {children}
    </ClientContent>
  );
};

export default ClientContentWrapper;
