import Link from 'next/link'
import { useState } from 'react';

const PriceCalculator = () => {

    const [size, setSize] = useState('');
    const [style, setStyle] = useState('');
    const [placement, setPlacement] = useState('');
    const [detail, setDetail] = useState('');
    const [experience, setExperience] = useState('');
    const [price, setPrice] = useState(null);
  
    const calculatePrice = () => {
      let basePrice = 0;
      if (size === 'small') basePrice += 50;
      if (size === 'medium') basePrice += 100;
      if (size === 'large') basePrice += 200;
  
      if (style === 'traditional') basePrice += 50;
      if (style === 'realism') basePrice += 100;
      if (style === 'watercolor') basePrice += 75;
      if (style === 'black & gray') basePrice += 75;
  
      if (placement === 'arm') basePrice += 50;
      if (placement === 'back') basePrice += 100;
      if (placement === 'leg') basePrice += 75;
  
      if (detail === 'low') basePrice += 50;
      if (detail === 'medium') basePrice += 100;
      if (detail === 'high') basePrice += 150;
  
      if (experience === 'junior') basePrice += 50;
      if (experience === 'mid') basePrice += 100;
      if (experience === 'senior') basePrice += 200;
  
      setPrice(basePrice);
    };

  return (
  
            <div className="mt-8 space-y-4">
              <div className="max-w-md">
                <label className="block mb-2 text-xl font-bold">Size</label>
                <select className="w-full mb-6 p-3 rounded-lg border text-black/70 bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={size} onChange={(e) => setSize(e.target.value)}>
                  <option value="">Select size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>

              <div className="max-w-md">
                <label className="block mb-2 text-xl font-bold">Style</label>
                <select className="w-full mb-6 p-3 rounded-lg border text-black/70 bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={style} onChange={(e) => setStyle(e.target.value)}>
                  <option value="">Select style</option>
                  <option value="traditional">Traditional</option>
                  <option value="realism">Realism</option>
                  <option value="watercolor">Watercolor</option>
                  <option value="black & gray">Black & Gray</option>
                </select>
              </div>

              <div className="max-w-md">
                <label className="block mb-2 text-xl font-bold">Placement on Body</label>
                <select className="w-full mb-6 p-3 rounded-lg border text-black/70 bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={placement} onChange={(e) => setPlacement(e.target.value)}>
                  <option value="">Select placement</option>
                  <option value="arm">Arm</option>
                  <option value="back">Back</option>
                  <option value="leg">Leg</option>
                </select>
              </div>

              <div className="max-w-md">
                <label className="block mb-2 text-xl font-bold">Level of Detail</label>
                <select className="w-full mb-6 p-3 rounded-lg border text-black/70 bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={detail} onChange={(e) => setDetail(e.target.value)}>
                  <option value="">Select detail</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div className="max-w-md">
                <label className="block mb-2 text-xl font-bold">Artist Experience</label>
                <select className="w-full mb-6 p-3 rounded-lg border text-black/70 bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={experience} onChange={(e) => setExperience(e.target.value)}>
                  <option value="">Select experience</option>
                  <option value="junior">Junior</option>
                  <option value="mid">Mid</option>
                  <option value="senior">Senior</option>
                </select>
              </div>

              <button
                onClick={calculatePrice}
                className="inline-flex mt-8 rounded-lg py-3 px-5 font-medium text-l duration-100 ease-in bg-[#8b3eff] hover:bg-[#7731d8] text-white"
              >
                Calculate Price
              </button>

              {price !== null && (
                <div className="mt-4 text-lg">
                  Estimated Price: ${price}
                </div>
              )}
            </div>
         

  );
};

export default PriceCalculator;
