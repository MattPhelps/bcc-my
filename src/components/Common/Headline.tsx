"use client";
import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from './Breadcrumb';
import PageTitle from "./PageTitle";
import Button from '@/components/Common/Button';

const Headline = ({ title, paragraph = "", showButton = false, ctaText = "Design your tattoo" }) => {
  return (
    <div className="max-w-[1170px] text-[black]/80 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-5">
      <Breadcrumb />
      <PageTitle title={title} paragraph={paragraph} />
      {showButton && (
        <div className="wow fadeInUp text-center my-6">
          <Button
            href="/design"
            onClick={false}
            style={{ }}
            className="">
              {ctaText}
          </Button>
        </div>
      )}
    </div>
  );
};

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  showButton: PropTypes.bool,
  ctaText: PropTypes.string,
};

export default Headline;
