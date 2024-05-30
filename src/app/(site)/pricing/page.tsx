import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import PricingGrids from "@/components/Pricing/PricingGrids";
import PricingFaqs from "@/components/PricingFaqs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Metadata } from "next";

const pageTitle = `InkGen Pricing: Compare Free, Pro, Teams and Enterprise Plans`;
const pageDescription = `This is Pricing page for InkGen`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};


const PricingPage = () => {
  return (
    <>
    <Header />
      <section className="pt-17.5 lg:pt-22.5 xl:pt-27.5 pb-20 lg:pb-25">
        <PricingGrids />
      </section>
      <Footer />
    </>
  );
};

export default PricingPage;

// READ BIATCH
// remember to add back the pricing FAQS <PricingFaqs />