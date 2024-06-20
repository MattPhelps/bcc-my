'use client'
import Headline from '@/components/Common/Headline';
import PriceCalculator from './PriceCalculator';
import { Metadata } from 'next';

{/* 
const pageTitle = `Tattoo Price Calculator`;
const pageDescription = `Estimate the cost of your next tattoo with our easy-to-use price calculator. Simply select the size, style, location, level of detail, and artist experience for your desired tattoo, and we'll provide you with an estimated price range. Please note that this is a rough estimate, and the final cost may vary based on additional factors and the artist's rates.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};
*/}


const PriceCalculatorPage = () => {

  return (
    <>
      <section className="pt-3 pb-25">
          
          <Headline 
            title="Tattoo Price Calculator" 
            paragraph="Estimate the cost of your next tattoo with our easy-to-use price calculator. Simply select the size, style, location, level of detail, and artist experience for your desired tattoo, and we'll provide you with an estimated price range. Please note that this is a rough estimate, and the final cost may vary based on additional factors and the artist's rates."
            showButton={false} 
           />

          <div className="content-container">
          <PriceCalculator />


          <h2 className="mt-24 mb-8 text-3xl font-bold">Factors That Influence Tattoo Prices</h2>
          <p className="mt-4">When it comes to getting a tattoo, the cost can vary significantly depending on several factors. Our tattoo price calculator takes into account some of the most important factors that determine the final price of your tattoo:</p>
          <ul className="list-disc mt-4 pl-6">
            <li><b>Size:</b> larger tattoos generally cost more than smaller ones due to the increased time and effort required.</li>
            <li><b>Style:</b> certain tattoo styles, such as realism or intricate designs, demand more skill and attention to detail, which can increase the price.</li>
            <li><b>Location:</b> the placement of the tattoo on your body can impact the price. Tattoos on more challenging or sensitive areas may cost more.</li>
            <li><b>Details:</b> the level of detail in your tattoo design can significantly affect the price. More complex and intricate designs typically cost more.</li>
            <li><b>Artist Experience:</b> the expertise and reputation of the tattoo artist can also influence the price. More experienced artists generally charge higher rates.</li>
          </ul>
          <p className="mt-4">It's important to note that the price calculation provided by our calculator is an estimate and may not reflect the exact final cost. Tattoo artists often factor in additional elements, such as the complexity of the design, the time required, and their own hourly rates. Additionally, factors like the location of the tattoo studio and the artist's popularity can also impact the overall cost.</p>
          <p className="mt-4">To get an accurate quote, we recommend consulting with a reputable tattoo artist and discussing your desired design, size, and placement. Communication and transparency are essential to ensure you have a clear understanding of the expected costs before committing to the tattoo.</p>

          <h2 className="mt-24 mb-8 text-3xl font-bold">Tattoo Pricing by Style</h2>
          <p className="mt-4">The style of tattoo you choose can have a significant impact on the overall cost. Some styles are more time-consuming and intricate, requiring a higher level of skill and attention to detail from the artist. Here's a general overview of how different tattoo styles may affect the price:</p>
          <ul className="list-disc mt-4 pl-6">
          <li><b>Traditional:</b> traditional tattoos, often featuring bold lines, vibrant colors, and classic designs like anchors, roses, or pinup girls, are generally more affordable than some other styles.</li>
            <li><b>Realism:</b> realistic tattoos that aim to create a lifelike, three-dimensional appearance are among the most expensive due to the high level of detail and technical skill required.</li>
            <li><b>Blackwork:</b> blackwork tattoos, featuring solid black lines and shading, can vary in price depending on the complexity of the design and the amount of coverage.</li>
            <li><b>Watercolor:</b> watercolor tattoos, with their soft, blended colors and dreamlike appearance, often require a specialized technique and can be more costly.</li>
            <li><b>Geometric:</b> geometric tattoos, featuring intricate patterns and precise line work, tend to be moderately priced, though the cost can increase with larger sizes or more complex designs.</li>
          </ul>
          <p className="mt-4">Keep in mind that these are general guidelines, and the actual cost of your tattoo will depend on various factors, including the artist's expertise, location, and the specific design you choose.</p>

          <h2 className="mt-24 mb-8 text-3xl font-bold">Factors Beyond Size and Style</h2>
          <p className="mt-4">While size and style are major determinants of tattoo pricing, there are several other factors that can influence the overall cost. Being aware of these additional elements can help you better understand and prepare for the financial commitment associated with getting a new tattoo.</p>
          <ul className="list-disc mt-4 pl-6">
          <li><b>Artist Reputation:</b> well-established and highly sought-after tattoo artists can command higher prices due to their expertise and demand.</li>
            <li><b>Studio Location:</b> tattoo studios located in major cities or high-rent areas may have higher overhead costs, which can be reflected in their pricing.</li>
            <li><b>Tattoo Placement:</b> tattoos on more challenging or sensitive areas of the body, such as the ribs, feet, or hands, may cost more due to the added difficulty and discomfort.</li>
            <li><b>Color vs. Black and Gray:</b> color tattoos generally cost more than black and gray tattoos, as they require additional time and materials.</li>
            <li><b>Touch-ups and Reworks:</b> if you need to have your tattoo touched up or reworked, there may be additional costs involved.</li>
          </ul>
          <p className="mt-4">By understanding these additional factors, you can have a more comprehensive understanding of tattoo pricing and make informed decisions when planning and budgeting for your next tattoo.</p>


         </div>  

      </section>
    </>
  );
};

export default PriceCalculatorPage;
