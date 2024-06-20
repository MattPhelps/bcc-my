import { Metadata } from "next";
import Headline from "@/components/Common/Headline";

const pageTitle = `Tattoo Color Palette`;
const pageDescription = ``;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const ColorPalettePage = () => {
  return (
    <>
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
