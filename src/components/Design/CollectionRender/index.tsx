'use client';
import React from 'react';

const handleDownload = (url, filename) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const CollectionRender = () => {
  const images = [
    { src: '/styles/3d.png', filename: '3d.png' },
    { src: '/styles/3d.png', filename: '3d.png' },
    { src: '/styles/3d.png', filename: '3d.png' },
    { src: '/styles/3d.png', filename: '3d.png' },
    { src: '/styles/3d.png', filename: '3d.png' },
    { src: '/styles/3d.png', filename: '3d.png' },
    { src: '/styles/3d.png', filename: '3d.png' },
    { src: '/styles/3d.png', filename: '3d.png' },
    { src: '/styles/3d.png', filename: '3d.png' },
    { src: '/styles/3d.png', filename: '3d.png' },
    { src: '/styles/3d.png', filename: '3d.png' },
    { src: '/styles/3d.png', filename: '3d.png' },
  ];

  return (
    <div className="p-6 grid grid-cols-4 gap-4 h-full w-full">
      {images.map((image, index) => (
        <div key={index} className="relative group">
          <img
            src={image.src}
            alt={`Tattoo Design ${index + 1}`}
            className="w-full h-auto max-w-full max-h-[200px] object-cover border border-gray-300 rounded"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity duration-300">
          </div>
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
            <button 
              className="bg-white text-black px-3 py-1 rounded border border-black flex items-center space-x-2"
              onClick={() => handleDownload(image.src, image.filename)}
            >
              <img 
                src="images/icons/download.png" 
                alt="Download Icon" 
                style={{ width: 16, height: 16 }} 
              />
              &nbsp;Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionRender;
