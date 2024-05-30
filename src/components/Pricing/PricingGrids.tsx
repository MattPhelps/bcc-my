import React from 'react';
import PageTitle from "../Common/PageTitle";
import SinglePricing from './SinglePricing';
import siteConfig from "../../../siteConfig";

const PricingGrids = () => {
  const hardCodedPrices = [
    {
      id: "plan_small",
      nickname: "Starter",
      unit_amount: 0,
      link: "/design"
    },
    {
      id: "plan_medium",
      nickname: "Pro",
      unit_amount: 1500,
      link: "/design"
    }, 
  ];

  return (
    <div>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <PageTitle
          title="Design Anything With the Right Plan"
          paragraph="InkGen is currently free!"
        />

        {/* change this lg:grid-cols-2 to lg:grid-cols- to make it one on top of each other*/}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-7.5 place-content-center">
          {hardCodedPrices.map((price, key) => (
            <SinglePricing price={price} key={price.id} link={price.link} />

          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingGrids;
