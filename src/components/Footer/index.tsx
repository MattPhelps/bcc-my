import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo/logo.svg";
import FooterLinkList from "./FooterLinkList";
import { legalLink, supportsLink, resourceLink } from "./linksData";
import siteConfig from '../../../siteConfig';

const Footer = () => {

  return (
    <>
      <footer className="relative z-10 pb-17.5 lg:pb-22.5 xl:pb-27.5">
        {/* <!-- bg shapes --> */}
        {/* ... (existing background shapes code) ... */}

        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 relative pt-17.5">
          <div className="w-full h-[1px] footer-divider-gradient absolute top-0 left-0"></div>

          <div className="flex flex-wrap justify-between">
            <div className="mb-10 max-w-[520px] w-full">
              <div className="w-full text-[black] dark:text-[white] text-xl font-bold">
                <a href="#top">
                  <h3>{siteConfig.siteName}</h3>
                </a>
                
              </div>

              <p className="font-medium mt-5.5">
                {siteConfig.siteName} - all rights reserved. Owned by Le & Me AB
              </p>
              
              {/* Disclaimer section */}
              <div className="mt-5 text-sm"> 
               
              </div>
            </div>

            <div className="max-w-[571px] w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-10">
                <FooterLinkList title="Support" links={supportsLink} />
                <FooterLinkList title="Resources" links={resourceLink} />
                <FooterLinkList title="Legal" links={legalLink} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
