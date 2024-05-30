import React from 'react';

const IdeaGrid = ({ data, rootSlug }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center -mx-2 mt-12">
        {data.map((cell, index) => (
          <a key={index} href={`${rootSlug}/${cell.slug}`}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-20 duration-100 ease-in hover:scale-105">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img src={cell.image} alt={cell.title} className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-2">
                <h2 className="text-l text-center font-bold mb-2">{cell.label}</h2>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default IdeaGrid;