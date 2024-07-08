"use client";
import Image from "next/image";
import Link from "next/link";
import siteConfig from "../../../siteConfig";
import { useState, useRef } from "react";
import React, { useEffect } from 'react';

const Email = () => {


const handlePricingClick = (files) => {
  window.location.href = '/coupon'; // Replace with your desired URL
};


  return (
    <section
      id="home"
      className="relative overflow-hidden z-10 pt-10 md:pt-25 xl:pt-30"
    >

      {/* <!-- Hero Content --> */}
      <div className="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
        <div className="text-center">
          <h1 className="text-[black] dark:text-white mb-12 text-xl font-extrabold sm:text-4xl xl:text-heading">
            Please Check You're Email
          </h1>
          <p className="max-w-[500px] mx-auto mb-16 font-xl md:text-md">
          Don't forget check trash or spam if you can't find the email!
          </p>

          <div className="flex justify-center items-center mb-4">

          <a
              onClick={handlePricingClick}
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--main-color": siteConfig.buttonColor } as any}
              className="button-styling inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
            >
              Use Nudify
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full"></div>
    </section>
  );
};

export default Email;
