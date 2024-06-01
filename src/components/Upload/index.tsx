"use client";
import Image from "next/image";
import Link from "next/link";
import siteConfig from "../../../siteConfig";
import React, { useEffect, useState, useRef } from "react";
import Render from "../Render/render";

const Upload = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const handleFileUpload = async (files: Blob) => {
    const file = files[0];

    if (!(file instanceof Blob)) {
      console.error("The provided value is not a Blob or File.");
      return;
    }
    // Convert file to base64
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = (reader.result as string).replace(
        /^data:.+;base64,/,
        ""
      );
      setUploadedImageUrl(reader.result as string); // Update the state with the data URL of the uploaded image
      // API request to post the queue
      const response = await fetch("/api/deepsukebe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          str_b64_file: base64String,
          str_name_file: file.name,
          array_str_option: ["enhance", "redeem", "delete"],
        }),
      });

      const data = await response.json();

      if (data && data.array_map_queue && data.array_map_queue.length > 0) {
        // console.log(`https://api.deepsukebe.io/images/${data.array_map_queue[0].str_hash}.jpg`);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    // <section id="home" className="relative overflow-hidden z-10 pt-10 md:pt-25 xl:pt-30">
    <section id="home" className=" relative overflow-hidden z-10 pt-30">
      {/* <!-- Hero Content --> */}
      <div className="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
        <div className="text-center">
          <h1 className="text-[black] dark:text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading">
            AI Tattoo Generator
          </h1>
          <p className="max-w-[500px] mx-auto mb-9 font-small md:text-md">
          Make tattoos with AI
          </p>

          {/* Grouped Input and Button */}
          <div className="flex justify-center items-center mb-4">
            <div className="container mx-auto">
                <div
                  className={`text-lg ${
                    isError ? "text-[red]" : "text-[#a3e635]"
                  }`}
                >
                  {statusMessage}
                </div>

            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center w-full"></div> */}
    </section>
  );
};

export default Upload;
