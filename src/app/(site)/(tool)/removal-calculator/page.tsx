'use client'
import Headline from '@/components/Common/Headline';
import Head from 'next/head';

const pageTitle = `Tattoo Removal Cost Calculator`;
const pageDescription = `Estimate the cost of your next tattoo with our easy-to-use price calculator. Simply select the size, style, location, level of detail, and artist experience for your desired tattoo, and we'll provide you with an estimated price range. Please note that this is a rough estimate, and the final cost may vary based on additional factors and the artist's rates.`;

const RemovalCostCalculatorPage = () => {

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <section className="pt-3 pb-25">
          
          <Headline 
            title="Tattoo Removal Cost Calculator" 
            paragraph="Estimate the cost of removing a tattoo with our easy-to-use price calculator. Simply select the size, style, location, level of detail, and artist experience for your desired tattoo, and we'll provide you with an estimated price range. Please note that this is a rough estimate, and the final cost may vary based on additional factors and the artist's rates."
            showButton={false} 
           />

          <div className="content-container">


         </div>  

      </section>
    </>
  );
};

export default RemovalCostCalculatorPage;
