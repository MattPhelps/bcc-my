import { Metadata } from "next";
import React, { useState, useEffect } from 'react';
import siteConfig from '../../../siteConfig';
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Reviews from "@/components/Home/Reviews";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import homeFaqData from '@/components/Faq/faqData';

const pageTitle = `${siteConfig.siteTitle}`;
const pageDescription = `${siteConfig.siteDescription}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

export default function Home() {
  return (
    <>
      <Hero/>
      <Features />

     {/* <Faq data={homeFaqData} /> */} 
      <CallToAction
        heading={`The #1 Credit Card for ${siteConfig.country}`}
        description={`Skip the comparisons and apply for the most popular credit card in ${siteConfig.country}`}
        buttonText="Apply Now"
        buttonSlug={siteConfig.ccAffLink1}
      />
    </>
  );
}