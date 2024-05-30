import { Metadata } from "next";
import React from 'react';
import DesignHeader from "@/components/Design/DesignHeader";

const pageTitle = `Create a Design`;
const pageDescription = `Design your own tattoos!`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const DesignPage = () => {

  return (
    <>
    <DesignHeader />
     
    </>
  );
};

export default DesignPage;
