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
      <div className="min-h-screen flex flex-col">
        <DesignHeader />
        
        {/* All design input fields here on the left */}
        <div className="flex flex-grow">
          <div className="bg-[#252627] w-1/4 p-6 flex flex-col">
            <DesignDescription />
            <DesignStyle />
            <DesignColor />
            <DesignButton />
          </div>

          {/* The rendering of the output of the AI generator is here on the right */}
          <div className="bg-white w-3/4 flex flex-col">
            <DesignRender />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignPage;
