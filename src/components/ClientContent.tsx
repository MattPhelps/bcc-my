'use client';
import React, { useEffect } from 'react';
import Header from "@/components/Header";
import { useLayout } from '@/context/LayoutContext';
import Footer from './Footer';
import Breadcrumb from './Common/Breadcrumb';

const ClientContent = ({ children, hideHeader }: { children: React.ReactNode, hideHeader: boolean }) => {
  const { setHideHeader, setHideBreadcrumbs } = useLayout();

  useEffect(() => {
    setHideHeader(hideHeader);
  }, [hideHeader, setHideHeader, setHideBreadcrumbs]);

  return (
    <>
      {!hideHeader && <Header />}
      {children}
      {!hideHeader && <Footer />}

    </>
  );
};

export default ClientContent;
