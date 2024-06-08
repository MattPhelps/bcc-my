import { Metadata } from "next";
import PageTitle from "../../../../components/Common/PageTitle";

const pageTitle = `Terms of Use`;
const pageDescription = `Explore our Terms of USe to understand the rules and guidelines governing the use of our image manipulation tool.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const PainChartPage = () => {
  return (
    <>
     <section className="pt-3 pb-25">
        <div className="max-w-[1170px]  mx-auto text-[black]/70 dark:text-[white]/50 px-4 sm:px-8 xl:px-0 z-10 pt-25">
          <PageTitle title="Tattoo Pain Chart" paragraph="blah" />

          <div className="mt-8">
          <div className="content-container">

          <h2 className="mt-8 text-2xl font-bold">CCC</h2>
          <p className="text-lg font-bold">XX</p>
          <p className="mt-4"></p>
      
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PainChartPage;
