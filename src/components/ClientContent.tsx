'use client';
import React, { useEffect } from 'react';
import Header from "@/components/Header";
import { useLayout } from '@/context/LayoutContext';
import Footer from './Footer';
import Breadcrumb from './Common/Breadcrumb';

const ClientContent = ({ children, hideHeader, hideBreadcrumbs }: { children: React.ReactNode, hideHeader: boolean, hideBreadcrumbs: boolean }) => {
  const { setHideHeader, setHideBreadcrumbs } = useLayout();

  useEffect(() => {
    setHideHeader(hideHeader);
    setHideBreadcrumbs(hideBreadcrumbs);
  }, [hideHeader, setHideHeader, hideBreadcrumbs, setHideBreadcrumbs]);

  return (
    <>
      {!hideHeader && <Header />}
      {!hideBreadcrumbs && <Breadcrumb />}
      {children}
      {!hideHeader && <Footer />}

    </>
  );
};

export default ClientContent;
