"use client";
import Image from "next/image";
import Link from "next/link";
import siteConfig from "../../../../siteConfig";
import { useState, useRef } from "react";
import React, { useEffect } from 'react';
import UploadDropzone from '../../UploadDropzone/uploadDropzone';

const Upload = () => {

  const handleCTAClick = (files) => {
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
          <h1 className="text-[black] dark:text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading">
            Watermark Remover
          </h1>
          <h2 className="max-w-[500px] mx-auto mb-9 font-small md:text-md">
          Remove watermark online for free
          </h2>
          
          {/* Grouped Input and Button */}
          <div className="flex justify-center items-center mb-4">

          <a
              onClick={handleCTAClick}
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--main-color": siteConfig.buttonColor } as any}
              className="button-styling inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
            >
              Try Nudify Now
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full"></div>
    </section>
  );
};

export default Upload;
