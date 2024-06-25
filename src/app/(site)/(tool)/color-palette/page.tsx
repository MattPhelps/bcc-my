import { Metadata } from "next";
import Headline from "@/components/Common/Headline";
import Head from "next/head";

const pageTitle = `Tattoo Color Palette`;
const pageDescription = `Explore our Tattoo Color Palette to find the perfect hues for your next tattoo. Discover a wide range of colors, see how they look on different skin tones, and get tips on choosing the best color combinations for your design. Bring your tattoo vision to life with our expert color guidance.`;

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
