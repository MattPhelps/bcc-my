import { Metadata } from "next";
import React from 'react';
import DesignHeader from "@/components/Design/DesignHeader";
import DesignDescription from "@/components/Design/DesignDescription";
import DesignStyle from "@/components/Design/DesignStyle";
import DesignColor from "@/components/Design/DesignColor";
import DesignButton from "@/components/Design/DesignButton";
import DesignRender from "@/components/Design/DesignRender";

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

 {/* All design input fields here on the left */}
      <div className="flex h-screen"> 
        <div className="bg-[#252627] w-1/4 p-6">
          <DesignDescription />
          <DesignStyle />
          <DesignColor />
          <DesignButton />
        </div>

{/* The rendering of the output of the AI generator is here on the right */}
        <div className="bg-white w-3/4"></div>
        <DesignRender />
      </div>
    </>
  );
};

export default DesignPage;
