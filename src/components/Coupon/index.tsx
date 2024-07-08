"use client";
import Image from "next/image";
import Link from "next/link";
import siteConfig from "../../../siteConfig";
import { useState, useRef } from "react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Coupon = () => {
  const [couponKey, setCouponKey] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const regex = /^[a-zA-Z0-9]+$/;

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setError("");
    const trimmedCouponKey = couponKey.trim(); // Trim whitespace from the coupon key

    if (!regex.test(trimmedCouponKey)) {
      // setError("Coupon key must be alphanumeric");
      setError("Invalid coupon key");
      return;
    }

    const response = await fetch('/api/validateCoupon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ trimmedCouponKey }),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      // Set cookie here since the server-side can't set cookies in API responses used by client-side code.
      // Alternatively, you could manage session state server-side.
      document.cookie = "validatedCoupon=true; path=/; max-age=3600"; // Adjust the max-age as needed
      // document.cookie = "validatedCoupon=true; path=/; max-age=3600; Secure; HttpOnly"; // Production code when deploying on vercel (possible CORS error)
      router.push("/upload");
    } else {
      setError(data.error || "An unexpected error occurred");
    }
  };

  const handlePricingClick = (files) => {
    window.location.href = "/pricing"; // Replace with your desired URL
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden z-10 pt-10 md:pt-25 xl:pt-30"
    >
      {/* <!-- Hero Content --> */}
      <div className="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
        <div className="text-center">
          <h1 className="text-[black] dark:text-white mb-6 text-xl font-extrabold sm:text-4xl xl:text-heading">
            Enter Your Coupon
          </h1>
          <div className="flex justify-center items-center mb-2">
            <input
              onChange={(e) => setCouponKey(e.target.value)}
              type="text"
              placeholder="Paste your coupon code..."
              className="w-full md:w-96 p-3 rounded-l-lg rounded-r-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mr-2"
            />

            <button
              onClick={handleSubmit}
              style={{ "--main-color": siteConfig.buttonColor2 } as any}
              className="button-styling inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
            >
              Use Nudify
            </button>
           
          </div>
          {error && <p className="text-[red] mb-10">{error}</p>}

          <p className="max-w-[500px] mx-auto mb-25 font-small md:text-md">
            Don't have a coupon? Buy yours here 👇
          </p>
          {/* Grouped Input and Button */}
          <div className="flex justify-center items-center mb-4">
            <a
              onClick={handlePricingClick}
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--main-color": siteConfig.buttonColor } as any}
              className="button-styling inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
            >
              Buy Credits
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full"></div>
    </section>
  );
};

export default Coupon;
