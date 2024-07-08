import { Metadata } from "next";
import siteConfig from '../../../../siteConfig';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Upload from "@/components/Upload";
import Render from "@/components/Render/render";


const pageTitle = `Upload | ${siteConfig.siteName}`;
const pageDescription = `Upload an image and start Nudifying!`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};


const UploadPage = () => {

  return (
    <>
      <Header />
      <Upload />
    </>
  );
};

export default UploadPage;
