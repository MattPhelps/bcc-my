import SupportSection from "@/components/Support";
import { Metadata } from "next";
import siteConfig from '../../../../siteConfig';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pageTitle = `Contact | ${siteConfig.siteName}`;
const pageDescription = `Get in touch with us at Nudify and you'll get a response within 24hrs. Reach out today!`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};


const ContactPage = () => {

  return (
    <>
      <Header />
      <SupportSection />
      <Footer /> 
    </>
  );
};

export default ContactPage;
