import { Metadata } from "next";
import React, { useState, useEffect } from 'react';
import siteConfig from '../../../siteConfig';
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Reviews from "@/components/Home/Reviews";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import homeFaqData from '@/components/Faq/faqData';
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";


const pageTitle = `${siteConfig.siteTitle}`;
const pageDescription = `${siteConfig.siteDescription}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero/>
      <Features />
       <section className="relative z-20 overflow-hidden pb-20 pt-22.5 lg:pt-27.5 xl:pt-32.5 2xl:pt-45">
        <Reviews />
      </section> 
      <Faq data={homeFaqData} />
      <CallToAction />
      {/* <Footer /> */}
    </>
  );
}