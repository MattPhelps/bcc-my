import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import { Metadata } from "next";
import siteConfig from '../../../siteConfig';
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Comparison from "@/components/Home/Comparison";
import React, { useState, useEffect } from 'react';
import Upload from "@/components/Upload";


const pageTitle = `${siteConfig.siteTitle}`;
const pageDescription = `${siteConfig.siteDescription}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

export default function Home() {
  return (
    <>
      <Header />
      <Upload/>
      <Features />
      <Faq />
      <Footer /> 
    </>
  );
}