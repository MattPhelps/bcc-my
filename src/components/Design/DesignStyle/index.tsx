import React from 'react';

const DesignStyle = () => (
  <div>
    <h3 className="text-white font-medium mb-2 p-1 mt-4">Style</h3>
            <select className="w-full p-3  rounded-lg border text-black/70 bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option value="traditional" style={{ color: 'black' }}>Traditional</option>
                <option value="neo-traditional">Neo-Traditional</option>
                <option value="realism">Realism</option>
                <option value="abstract">Abstract</option>
                <option value="watercolor">Watercolor</option>
                <option value="tribal">Tribal</option>
             </select>
  </div>
);

export default DesignStyle;
