import { Metadata } from "next";
import siteConfig from '../../../../siteConfig';
import PageTitle from "../../../components/Common/PageTitle";
import Faq from "@/components/Faq";
import helpFaqData from '@/app/(site)/help/helpFaqData';

const pageTitle = `Need Help?`;
const pageDescription = `We'll do our best to help you in any way you need. Read our FAQs or reach out today!`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const HelpPage = () => {

  return (
    <>
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[black]/80 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
          
          <PageTitle title="Help"  paragraph=""   />

          <div className="mt-8">
            
            <Faq data={helpFaqData} />
            
            <p className="mt-4">Please contact us with any query via email on <a href="/contact">{siteConfig.supportEmail}.</a></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpPage;
