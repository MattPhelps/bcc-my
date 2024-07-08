import React from 'react';

const DesignDescription = () => (
  <div>
    <h3 className="text-white font-medium mb-2 p-1">Describe Your Design</h3>
    <textarea 
      placeholder="Use 5+ words..." 
      className="w-full h-32 p-3 rounded-lg border text-[black]/70 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 resize-none" 
    />
  </div>
);

export default DesignDescription;
