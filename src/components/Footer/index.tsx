import FooterLinkList from "./FooterLinkList";
import SocialLinkList from "./SocialLinkList";
import { legalLink, companyLink, resourceLink } from "./linksData";
import siteConfig from '../../../siteConfig';

const Footer = () => {

  return (
    <>
      <footer className="relative z-10 pb-17.5 lg:pb-22.5 xl:pb-27.5">

        <div className="relative mx-auto max-w-[1170px] px-4 pt-17.5 sm:px-8 xl:px-0">
          <div className="footer-divider-gradient absolute left-0 top-0 h-[1px] w-full"></div>

          <div className="flex flex-wrap justify-between">
            <div className="mb-10 w-full max-w-[520px]">
            <div className="w-full mb-2 text-[black] dark:text-[white] text-xl font-bold">
                <a href="#top">
                  <h3>{siteConfig.siteName}</h3>
                </a>
              </div>

              <div className="mb-4 mt-4">
                <SocialLinkList/>
              </div>

              <p className={`mb-6 xl:w-4/5 text-[black]/70`}>
              InkGen is an AI tattoo generator tool that will help you design the tattoo of your dreams.
              </p>
            

              <p style={{ fontSize: '12px' }} className={`mt-6 text-[black]/70 font-small"`}>
               © 2024 All Rights Reserved, InkGen
              </p>
            </div>
            
            <div className="max-w-[571px] w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-10">
                <FooterLinkList title="Company" links={companyLink} />
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