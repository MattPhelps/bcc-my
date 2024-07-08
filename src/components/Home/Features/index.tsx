import SectionTitle from "@/components/Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import siteConfig from '../../../../siteConfig';

const Features = () => {
  return (
    <section
      id="how-to-use"
      className="overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5 scroll-mt-17"
    >
      <div className="max-w-[1222px] mx-auto px-4 pt-30 sm:px-8 xl:px-0">
        <SectionTitle
          title={`How to Remove a Watermark`}
          paragraph=""
        />

        <div className="relative">
          <div className="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 lg:-translate-x-1/3 lg:left-1/4 hidden lg:block"></div>
          <div className="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 right-1/2 -translate-y-1/2 lg:right-[8.3%] hidden lg:block"></div>

          {/* <!--=== Features Row ===--> */}
          <div className="flex flex-wrap justify-center">
            {featuresData.slice(0, 3).map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Features;
