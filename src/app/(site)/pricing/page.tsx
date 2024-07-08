import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import PricingGrids from "@/components/Pricing/PricingGrids";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingFaqs from "@/components/PricingFaqs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Nudify",
  description: "See the pricing for our AI clothes remover tool. We've got a plan that will suit you.",
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