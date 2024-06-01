import PricingGrids from "./PricingGrids";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden pt-22.5 lg:pt-27.5 xl:pt-32.5 scroll-mt-17"
    >
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        

        <PricingGrids />
      </div>
    </section>
  );
};

export default Pricing;
