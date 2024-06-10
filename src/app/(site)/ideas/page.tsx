import PageTitle from "../../../components/Common/PageTitle";
import Button from '@/components/Common/Button';
import { Metadata } from "next";
import CellGrid from "@/components/CellGrid";
import { getAllIdeas } from "@/libs/services/ideaService";

const pageTitle = `Tattoo Ideas`;
const pageSlug = `/ideas`;

export const metadata: Metadata = {
  title: pageTitle,
  description: `Discover unique tattoo ideas in any style you can imagine.!`
};

const IdeasPage = async () => {
  const allIdeas = await getAllIdeas();
  return (
    <>
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[black]/80 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
          <PageTitle title="Tattoo Ideas"  paragraph="Your next tattoo idea is waiting for you. Here you will find thousands of popular tattoo concepts for your next ink session. Browse through thousands of high-quality designs and discover the perfect tattoo that suits your personality and style."   />
            <div className="wow fadeInUp text-center">
              <Button
                href="/design"
                style={{ }}
                className="">
                  Design your tattoo
              </Button>
            </div>

          <h2 className="text-3xl font-bold mt-24 mb-4">Tattoo Ideas</h2>
          <CellGrid data={allIdeas} rootSlug={pageSlug}/>
        </div>
      </section>
    </>
  );
};

export default IdeasPage;
