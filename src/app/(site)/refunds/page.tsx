import { Metadata } from "next";
import siteConfig from '../../../../siteConfig';
import PageTitle from "../../../components/Common/PageTitle";

const pageTitle = `Refunds Policy`;
const pageDescription = `We're commited to 100% user satisfaction. Reach out concering refunds or any issue with the product.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const RefundsPage = () => {

  return (
    <>
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[black]/70 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
          
          <PageTitle title="Refund Policy"  paragraph=""   />
          <div className="mt-8">
          <div className="content-container">
            <p>If the services / subscription (hereinafter – «products») plan you have purchased from us are faulty, or different from a sample shown, then we will meet relevant in the country in which the products were purchased.</p>
            <br></br>
            <p>Returns are only permitted up to 10 business days following delivery provided the relevant application received by the website administration. No exceptions can be made past that date if otherwise not directly stipulated by applicable law. Returns can only be done based on the rules below.</p>
            <br></br>
            <p>If you change your mind about the services / subscription plan you have purchased from us, we will refund the purchase price, or exchange those products, subject to the following conditions (all of them shall be met):</p>
            <br></br>
            <p>1. Products purchased from this website can be returned within 10 business days of delivery by the customer;</p>
            <br></br>
            <p>2. You may be asked to provide personal details for returns or exchanges. These details will be used for the purpose of processing the return.</p>
            <br></br>
            <p>3. Shipping costs and bank commissions shall be paid by the customer for returning the products.</p>
            <br></br>
            <p>Exchanges for the similar product in a different plan will not incur any additional charges. If the new product is a different product and there is a price difference you may need to pay the difference or receive a partial refund. Exchanges can be done up to 10 business days of receiving item.</p>
            <br></br>
            <p>If the user has used at least 1 (one) generation from the subscription and makes a request for a refund, then we will have to refuse to refund the funds connected with using the functionality of our service.</p>
            <br></br>
            <p>If you request a refund, the purchase will be refunded to you using the original payment method.</p>
            <br></br>
            <p>This document is regulated under the applicable law, however in case of any controversy between this document and relevant law, the respective law shall prevail. Should any clause hereunder contradicts any applicable ruling – the respective clause hereunder shall be deemed automatically eliminated without any special notification.</p>
            <p className="mt-4">You can send a request by email: to <a href="/contact">{siteConfig.supportEmail}</a></p>            
        
          </div>
          </div>
        </div>
      </section> 
    </>
  );
};

export default RefundsPage;
