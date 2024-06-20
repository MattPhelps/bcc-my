'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { shouldHideBreadcrumbs, shouldHideHeader } from '@/utils/shouldHideHeader';
import ClientContent from './ClientContent';
import siteConfig from '../../siteConfig';

const ClientContentWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideHeader = shouldHideHeader(pathname);

  //Construct the canonical URL
  const canonicalURL = `${siteConfig.siteURL}${pathname === '/' ? '' : pathname}`;

  return (
    <ClientContent hideHeader={hideHeader}>
      {children}
    </ClientContent>
  );
};

export default ClientContentWrapper;
