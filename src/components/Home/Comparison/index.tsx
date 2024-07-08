import SectionTitle from "@/components/Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import siteConfig from '../../../../siteConfig';
import Image from 'next/image';



const Comparison = () => {
  return (
    <section
      id="how-to-nudify"
      className="overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5 scroll-mt-17"
    >
      <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Image</h2>
                <Image
                  alt="Original image"
                  src="/images/home/babe.jpg"
                  className="w-96 h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Nudify Image</h2>
                <Image
                  alt="Nudify enhanced image"
                  width={400}
                  height={400}
                  src="/images/home/naked-babe.jpg"
                  className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Comparison;
