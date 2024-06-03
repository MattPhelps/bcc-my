import { Metadata } from "next";
import React from 'react';
import DesignHeader from "@/components/Design/DesignHeader";
import Button from "@/components/Common/Button";

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
      <div className="flex h-screen">
        <div className="bg-[#252627] w-1/4 p-6">

        {/* Description input field */}
        <h3 className="text-white font-medium mb-2 p-1">Describe Your Design</h3>
            <textarea 
                placeholder="Use 5+ words..." 
                className="w-full h-32 p-3 rounded-lg border text-[black]/70 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 resize-none" 
              />

        {/* Select tattoo style */}
        <h3 className="text-white font-medium mb-2 p-1 mt-4">Style</h3>
            <select className="w-full p-3  rounded-lg border text-black/70 bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option value="traditional" style={{ color: 'black' }}>Traditional</option>
                <option value="neo-traditional">Neo-Traditional</option>
                <option value="realism">Realism</option>
                <option value="abstract">Abstract</option>
                <option value="watercolor">Watercolor</option>
                <option value="tribal">Tribal</option>
             </select>

        {/* Select tattoo coloring */}
        <h3 className="text-white font-medium mb-2 p-1 mt-4">Color</h3>
            <select className="w-full p-3  rounded-lg border text-black/70 bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option value="black-white">Black and White</option>
                <option value="full-color">Full Color</option>
              </select>

         {/* Generate tattoo Button */}
         <div className="mt-60">
              <Button
                href="/"
                style={{  }}
                className="inline-block w-full px-8 py-4 bg-indigo-600 text-white font-semibold text-l text-center rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                  Generate
              </Button>
        </div>

        </div>

        <div className="bg-white w-3/4"></div>
      </div>
    </>
  );
};

export default DesignPage;
