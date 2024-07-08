import Button from '@/components/Common/Button';

const CallToAction = ({ heading, description, buttonText, buttonSlug }) => {
  return (
    <section>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="cta-box-gradient bg-dark rounded-[30px] relative overflow-hidden px-4 py-20 lg:py-25 z-999">
          {/* <!-- bg shapes --> */}
          <div className="absolute -z-1 bg-no-repeat bg-cover bg-bottom w-full h-full bottom-0 left-0 bg-[url(/images/cta/grid.svg)]"></div>

          <div className="wow fadeInUp text-center">
            <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
              {heading}
            </h2>
            <p className="max-w-[714px] text-white mx-auto font-medium mb-9">
              {description}
            </p>
            <Button
              href={buttonSlug}
              onClick={false}
              style={{}}
              className=""
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

