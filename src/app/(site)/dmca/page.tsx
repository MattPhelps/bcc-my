import SupportSection from "@/components/Support";
import { Metadata } from "next";
import siteConfig from '../../../../siteConfig';
import PageTitle from "../../../components/Common/PageTitle";
import SinglePricing from "@/components/Pricing/SinglePricing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pageTitle = `DMCA Copyright Infringement Notification`;
const pageDescription = `Read our comprehensive DMCA disclaimer to understand how to file a copyright infringement. We clarify our responsibilities and user obligations to ensure informed and lawful use of our website.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const DMCAPage = () => {

  return (
    <>
    <Header />
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[#0e1318]/70 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
          
          <PageTitle title="Official DMCA Copyright Infringement Notification" paragraph={siteConfig.lastUpdated} />
          
          
          <div className="mt-8">
          <div className="content-container">
            <p>Our website follows the safe harbor provisions of 17 U.S.C. §512, otherwise known as Digital Millennium Copyright Act (“DMCA”). To file a copyright infringement notification with us, you will need to send a written communication that includes substantially the following:</p>
            
            <ul className="mt-4 list-disc pl-6">
              <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
              <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site.</li>
              <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit the service provider to locate the material. Providing URLs in the body of an email is the best way to help us locate content quickly.</li>
              <li>Information reasonably sufficient to permit the service provider to contact the complaining party, such as an address, telephone number, and, if available, an electronic mail address at which the complaining party may be contacted.</li>
              <li>A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
              <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed (Note that under Section 512(f) any person who knowingly and materially misrepresents that material or activity is infringing may be subject to liability for damages. In other words, DON’T MAKE FALSE CLAIMS!)</li>
            </ul>
            
            <p className="mt-4">Then Send the infringement notice via email to {siteConfig.supportEmail}.</p>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DMCAPage;
