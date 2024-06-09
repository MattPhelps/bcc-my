// "use client";
// import Head from 'next/head';
// import React from "react";
// import "../../styles/animate.css";
// import "../../styles/tailwind.css";
// import siteConfig from '../../../siteConfig';
// import { GA_TRACKING_ID } from '../../../analytics'

// type RootLayoutProps = {
//   children: React.ReactNode;
// };

// const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
//   return (
//     <>
//       <Head>
//         <link rel="icon" href="/favicon.ico" />
//         <script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} async />
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', '${GA_TRACKING_ID}', {
//                 page_path: window.location.pathname,
//               });
//             `,
//           }}
//         />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "http://schema.org",
//               "@type": "WebSite",
//               "name": siteConfig.siteName,
//               "url": siteConfig.siteURL
//             }),
//           }}
//         />
//       </Head>
      
//       <body className="bg-white dark:bg-dark">
//         <main>{children}</main>
//       </body>
//     </>
//   );
// };

// export default RootLayout;

"use client";
import React, { useState } from "react";
import "../../styles/animate.css";
import "../../styles/tailwind.css";
import siteConfig from '../../../siteConfig';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from 'next/navigation';
import Breadcrumb from '@/components/Common/Breadcrumb'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

 const GA_TRACKING_ID = process.env.GOOGLE_ANALYTICS_TAG; // Replace with your GA tracking ID

  
  // Define the paths where the header and footer should not be shown
  const noHeaderFooterPaths = ['/design', '/login', '/signup'];
  const showHeaderFooter = !noHeaderFooterPaths.includes(pathname);

  // Define the paths where the breadcrumbs should not be shown
  const noBreadcrumbPaths = ['/', '/login', '/signup', 'design'];
  const showBreadcrumbs = !noBreadcrumbPaths.includes(pathname);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "http://schema.org",
                "@type": "WebSite",
                "name": "${siteConfig.siteName}",
                "url": "${siteConfig.siteURL}"
              }`,
          }}
        />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
      </head>

      <body className="bg-white dark:bg-dark">
        {showHeaderFooter && <Header />}
        {showBreadcrumbs && <Breadcrumb />}
        {children}
        {showHeaderFooter && <Footer />}
      </body>
    </html>
  );
}