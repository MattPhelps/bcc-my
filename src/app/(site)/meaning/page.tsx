import Link from 'next/link';
import PageTitle from "../../../components/Common/PageTitle";
import Button from '@/components/Common/Button';
import MeaningGrid from "@/components/MeaningGrid";
import { getAllMeanings } from '@/libs/services/meaningService';

const pageSlug = "/meaning";

const MeaningPage = async () => {
  const allMeanings = await getAllMeanings();
  return (
    <>
    <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[black]/70 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
          <PageTitle title="Tattoo Meanings"  paragraph=""   />
            <div className="wow fadeInUp text-center">
              <Button
                onClick={false}
                href="/design"
                style={{ }}
                className="">
                  Design your tattoo
              </Button>
            </div>

          {/* TATTOO MEANINGS */}
          <h2 className="text-3xl font-bold mt-24 mb-4">Top Tattoo Meanings</h2>
          <MeaningGrid data={allMeanings} rootSlug={pageSlug}/>


        </div>
      </section>
      </>
  );
};

export default MeaningPage;