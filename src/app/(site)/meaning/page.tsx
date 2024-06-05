import PageTitle from "../../../components/Common/PageTitle";
import Button from '@/components/Common/Button';
import { Metadata } from "next";
import { meaningData } from "./ideasData";
import IdeaGrid from "@/components/IdeaGrid";

const pageTitle = `Tattoo Meaning`;

export const metadata: Metadata = {
  title: pageTitle,
  description: `Discover unique tattoo ideas in any style you can imagine.!`
}

const MeaningPage = () => {

  return (
    <>
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[black]/70 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
          <PageTitle title="Tattoo Meaning"  paragraph="Your next tattoo idea is waiting for you. Here you will find thousands of popular tattoo concepts for your next ink session. Browse through thousands of high-quality designs and discover the perfect tattoo that suits your personality and style."   />
            
            
            <div className="wow fadeInUp text-center">
              <Button
                href="/design"
                style={{ }}
                className="">
                  Design your tattoo
              </Button>
            </div>

         
        </div>
      </section>
    </>
  );
};

export default MeaningPage;
