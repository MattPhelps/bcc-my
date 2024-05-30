"use client";
import Image from "next/image";
import Link from "next/link";
import siteConfig from "../../../../siteConfig";
import React, { useEffect } from 'react';
import PageTitle from "../../../components/Common/PageTitle";
import Button from '@/components/Common/Button';

const Hero = () => {

  return (
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[black]/70 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
          <p className="text-center font-small text-sm mb-4">Create the perfect tattoo design with your personal tattoo artist</p>
         
          <h1 className="text-[black] text-center dark:text-[white] mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
            AI Tattoo Generator
          </h1>

          <div style={{ display: 'flex', justifyContent: 'center' }} className="mb-8">
            <Image
              src="/home/banner.png" // Replace with the path to your image
              alt="Description of the image"
              width={500} // Adjust width and height as needed
              height={100}
            />
          </div>

            <p className="max-w-[714px] text-center text-[black] dark:text-[white] mb-8 mx-auto font-small">If you have an idea for a tattoo but can't find the right design, let our AI generate tattoo ideas for you within seconds. Create the perfect design based on what you like, and get unlimited design options.</p>
          
          <Button
            href="/signup"
            style={{ }}
            className=""
          >
            Try for free
          </Button>

        </div>
    </section>
  );
};

export default Hero;
