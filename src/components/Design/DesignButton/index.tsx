import React from 'react';
import Button from "@/components/Common/Button";

const DesignButton = () => (
  <div>
     <div className="mt-60">
        
              <Button
                href=""
                hoverColor="hover:bg-[#7731d8]"
                textColor="text-[#000]"
                style={{ }}
                className="inline-block w-full px-8 py-4 bg-indigo-600 text-white text-center font-semibold text-l text-center rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                {/* 
                <img 
                src="images/icons/download.png" 
                alt="Download Icon" 
                style={{ width: 24, height: 24, verticalAlign: 'middle' }} 
              />
              */}
                    Generate
              </Button>
        </div>
  </div>
);

export default DesignButton;
