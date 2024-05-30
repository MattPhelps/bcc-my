import PageTitle from "../../../components/Common/PageTitle";
import Button from '@/components/Common/Button';
import { Metadata } from "next";
import { ideasData, placementIdeasData, popularIdeasData } from "./ideasData";
import IdeaGrid from "@/components/IdeaGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pageTitle = `Tattoo Ideas`;
const pageSlug = `/ideas`;

export const metadata: Metadata = {
  title: pageTitle,
  description: `Discover unique tattoo ideas in any style you can imagine.!`
}

const IdeasPage = () => {

  return (
    <>
    <Header />
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[black]/70 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
          <PageTitle title="Tattoo Ideas"  paragraph="Your next tattoo idea is waiting for you. Here you will find thousands of popular tattoo concepts for your next ink session. Browse through thousands of high-quality designs and discover the perfect tattoo that suits your personality and style."   />
            <div className="wow fadeInUp text-center">
              <Button
                href="/design"
                style={{ }}
                className="">
                  Design your tattoo
              </Button>
            </div>

            
          {/* PLACEMENT TATTOO IDEAS */}
          <h2 className="text-3xl font-bold mt-24 mb-4">Placement Tattoo Ideas</h2>
          <IdeaGrid data={placementIdeasData} rootSlug={pageSlug}/>

              {/* POPULAR TATTOO IDEAS */}
            <h2 className="text-3xl font-bold mt-24 mb-4">Popular Tattoo Ideas</h2>
            <IdeaGrid data={popularIdeasData} rootSlug={pageSlug}/>
          

            {/* PLACEMENT TATTOO IDEAS */}
              <h2 className="text-3xl font-bold mt-24 mb-4">Tattoo Ideas</h2>
              <IdeaGrid data={ideasData} rootSlug={pageSlug}/>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default IdeasPage;
