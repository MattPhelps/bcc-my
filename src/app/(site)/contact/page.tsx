import SupportSection from "@/components/Support";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pageTitle = `Contact InkGen`;
const pageDescription = `Get in touch with us at InkGen and you'll get a response within 24hrs. Reach out today!`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};


const ContactPage = () => {

  return (
    <>
    <Header />
     <section className="pt-3 pb-25">
      <SupportSection />
      </section>
    <Footer />
    </>
  );
};

export default ContactPage;
