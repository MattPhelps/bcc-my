import Image from "next/image";
import Link from "next/link";
import siteConfig from '../../../siteConfig';
import Button from '@/components/Common/Button';

const CallToAction = () => {
  return (
    <section>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="cta-box-gradient bg-dark rounded-[30px] relative overflow-hidden px-4 py-20 lg:py-25 z-999">
          {/* <!-- bg shapes --> */}

          <div className="absolute -z-1 bg-no-repeat bg-cover bg-bottom w-full h-full bottom-0 left-0 bg-[url(/images/cta/grid.svg)]"></div>

          <div className="wow fadeInUp text-center">
           
            <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
            Join 5,645 tattoo enthusiasts
            </h2>
            <p className="max-w-[714px] mx-auto font-medium mb-9">
            Our community of ink lovers are already using the power of AI to create mindblowing designs.
What are you waiting for?
            </p>

            <Button
              href="/design"
              style={{ }}
              className=""
              >
                Design your tattoo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
