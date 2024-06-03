import React from 'react';
import Button from "@/components/Common/Button";

const DesignButton = () => (
  <div>
     <div className="mt-60">
              <Button
                href="/"
                style={{  }}
                className="inline-block w-full px-8 py-4 bg-indigo-600 text-white font-semibold text-l text-center rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                  Generate
              </Button>
        </div>
  </div>
);

export default DesignButton;
