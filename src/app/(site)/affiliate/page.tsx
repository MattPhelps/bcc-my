import { Metadata } from "next";
import Headline from "@/components/Common/Headline";

const pageTitle = `Terms of Use`;
const pageDescription = `Explore our Terms of USe to understand the rules and guidelines governing the use of our image manipulation tool.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const AffiliatePage = () => {
  return (
    <>
     <section className="pt-3 pb-25">

            <Headline 
            title="InkGen Affiliate Program" 
            paragraph="Join our affiliate program and earn commissions by promoting InkGen, the AI-powered tattoo design platform."
            showButton={false} 
            ctaText="Join Affiliate Program"
           />

          <div className="mt-8">
          <div className="content-container">

          <p className="mt-4">Reach out to <a href="/contact">help@inkgen.ai</a> and we'll set you up with 60% commissions.</p>
      
          </div>
          </div>
      </section>
    </>
  );
};

export default AffiliatePage;
