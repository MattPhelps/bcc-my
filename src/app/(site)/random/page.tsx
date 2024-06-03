import { Metadata } from "next";
import React from 'react';
import PageTitle from "../../../components/Common/PageTitle";
import Button from '@/components/Common/Button';
import Image from "next/image";

const pageTitle = `Signup to InkGen`;
const pageDescription = `Design your own tattoos!`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const RandomGeneratorPage = () => {
    return (
      <>
      {/* <Header /> */}
        <section className="relative pt-3 pb-25 bg-cover bg-center">
          
            <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[black]/70 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
          <p className="text-center font-small text-sm mb-4"></p>
         
          <h1 className="text-[black] text-center dark:text-[white] mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
            Random Tattoo Generator
          </h1>

          <div style={{ display: 'flex', justifyContent: 'center' }} className="mb-8">
            <Image
              src="/home/banner.png" // Replace with the path to your image
              alt="Description of the image"
              width={500} // Adjust width and height as needed
              height={100}
            />
          </div>

            <p className="max-w-[714px] text-center text-[black] dark:text-[white] mb-8 mx-auto font-small">Click the button below to generate a completely random tattoo idea.</p>
          
          <Button
            href="/design"
            style={{ }}
            className=""
          >
            Generate
          </Button>

        </div>
    </section>
        
        </section>
      </>
    );
};
  
export default RandomGeneratorPage;

