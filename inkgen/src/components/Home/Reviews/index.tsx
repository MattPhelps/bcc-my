"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import { useEffect, useState } from "react";
import SingleReview from "./SingleReview";
import reviewsData from "./reviewsData";
import siteConfig from '../../../../siteConfig';

const Reviews = () => {
  const [showContent, setShowContent] = useState(false);
  const [scrollContent, setScrollContent] = useState(false);

  const handleScrollContent = () => {
    if (window.scrollY >= 500) {
      setScrollContent(true);
    } else {
      setScrollContent(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollContent);
  });

  return (
    <>
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          title="What People Are Saying"
          paragraph="423,490 tattoos already generated for 5,645 happy customers."
        />

        <div
          className={`grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3 ${
            !showContent ? "max-h-[855px] overflow-hidden" : ""
          }`}
        >
          <div className="space-y-7.5">
            {reviewsData.slice(0, 9).map((review) => (
              <SingleReview key={review.id} review={review} />
            ))}
          </div>

          <div className="hidden space-y-7.5 sm:block">
            {reviewsData.slice(9, 18).map((review) => (
              <SingleReview key={review.id} review={review} />
            ))}
          </div>

          <div className="hidden space-y-7.5 lg:block">
            {reviewsData.slice(18, 27).map((review) => (
              <SingleReview key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
