import React from 'react';

const DesignColor = () => (
  <div>
    <h3 className="text-white font-medium mb-2 p-1 mt-4">Color</h3>
            <select className="w-full p-3  rounded-lg border text-black/70 bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option value="black-white">Black and White</option>
                <option value="full-color">Full Color</option>
              </select>
  </div>
);

export default DesignColor;
