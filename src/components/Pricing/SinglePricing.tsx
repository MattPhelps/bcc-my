"use client";
import siteConfig from "../../../siteConfig";
import axios from "axios";
import Image from "next/image";
import OfferItem from "./OfferItem";

const SinglePricing = ({ price, link, credits }: any) => {

  const handleBuy = async (e: any) => {
    window.location.href = link; 
  };

  return (
    <div className="wow fadeInUp border-2 rounded-3xl bg- relative z-20 overflow-hidden pt-12.5 pb-10 px-8 xl:px-10 pricing-item-border">
      {/* <span className="absolute right-9 top-9">
        <Image
          src={
            price.nickname === "subscription"
              ? "./images/pricing/pricing-icon-01.svg"
              : price.nickname === "payasgo"
              ? "./images/pricing/pricing-icon-02.svg"
              : "./images/pricing/pricing-icon-03.svg"
          }
          alt="icon"
          width={44}
          height={44}
        />
        </span> */}

      <h3 className="font-semibold text-heading-4 text-[black] mb-5.5 text-center">
        {price.nickname === "Starter" && "Starter"}
        {price.nickname === "Pro" && "Pro"}
      </h3>

      <div className="flex items-center gap-3.5 place-content-center">
        <h2 className="font-bold text-custom-1 text-[black] place-content-center">
          ${" "}
          {(price.unit_amount / 100).toLocaleString("en-US", {
            currency: "USD",
          })}
        </h2>

        <p className="font-medium text-[black] place-content-center">
          = {credits} credits
        </p>
      </div>

      <div className="my-4 w-full h-[1px] pricing-gradient-divider place-content-center"></div>
      {/*
      {price.nickname === "subscription" && (
        <ul className="flex flex-col gap-4 text-[black]">
          <OfferItem text="Subscription with levels" />
          <OfferItem text="Advanced features included" />
          <OfferItem text="Shared workspaces & tools" />
        </ul>
      )}

      {price.nickname === "payasgo" && (
        <ul className="flex flex-col gap-4 text-[black]">
          <OfferItem text="Subscription with levels" />
          <OfferItem text="Advanced features included" />
          <OfferItem text="Shared workspaces & tools" />
        </ul>
      )}
      */}

      <button
        aria-label="purchase this plan"
        onClick={handleBuy}
        className="mt-11 mx-auto bg-blue-500 bg-[#8b3eff] flex px-12 py-3 items-center justify-center gap-1.5 font-medium text-[white] p-3 rounded-lg transition-all ease-in-out duration-300 relative hover:shadow-button"
      >
        Buy Now
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8992 7.5999L9.72422 2.3499C9.49922 2.1249 9.14922 2.1249 8.92422 2.3499C8.69922 2.5749 8.69922 2.9249 8.92422 3.1499L13.1242 7.4249H2.49922C2.19922 7.4249 1.94922 7.6749 1.94922 7.9749C1.94922 8.2749 2.19922 8.5499 2.49922 8.5499H13.1742L8.92422 12.8749C8.69922 13.0999 8.69922 13.4499 8.92422 13.6749C9.02422 13.7749 9.17422 13.8249 9.32422 13.8249C9.47422 13.8249 9.62422 13.7749 9.72422 13.6499L14.8992 8.3999C15.1242 8.1749 15.1242 7.8249 14.8992 7.5999Z"
            fill="white"
          />
        </svg>
      </button>

      <p className="mt-4 text-sm text-center">14 Day Money Back Guarantee</p>

    </div>
  );
};

export default SinglePricing;

{/* 
 const handleBuy = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: price.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.location.assign(data);
  }

*/}