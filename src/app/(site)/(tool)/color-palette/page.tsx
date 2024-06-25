import { Metadata } from "next";
import Headline from "@/components/Common/Headline";
import Head from "next/head";

const pageTitle = `Tattoo Color Palette`;
const pageDescription = ``;

const ColorPalettePage = () => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
     <section className="pt-3 pb-25">

          <Headline 
            title="Tattoo Color Palette" 
            paragraph=""
            showButton={false} 
           />
          

          <div className="content-container">

          </div>


      </section>
    </>
  );
};

export default ColorPalettePage;
