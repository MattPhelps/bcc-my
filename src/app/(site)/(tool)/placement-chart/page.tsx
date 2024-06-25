import { Metadata } from "next";
import Headline from "@/components/Common/Headline";

const pageTitle = `Tattoo Placement Chart`;
const pageDescription = `Discover the ideal spot for your next tattoo with our Tattoo Placement Chart. Learn about the best locations for different tattoo sizes and styles, and get expert tips on choosing the perfect placement for your body art. Make an informed decision and find inspiration with our comprehensive chart.`;

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
