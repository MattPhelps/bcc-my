import { Metadata } from "next";
import Headline from "@/components/Common/Headline";

const pageTitle = `Tattoo Placement Chart`;
const pageDescription = ``;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const PlacementChartPage = () => {
  return (
    <>
     <section className="pt-3 pb-25">

          <Headline 
            title="Tattoo Placement Chart" 
            paragraph=""
            showButton={false} 
           />
          
          <div className="mt-8">
          <div className="content-container">

         
         
          </div>
          </div>

      </section>
    </>
  );
};

export default PlacementChartPage;
