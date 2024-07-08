import React from "react";
import "../../styles/animate.css";
import "../../styles/tailwind.css";
import siteConfig from "../../../siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function RootLayout({ children,}: { children: React.ReactNode;}) {
  const GA_TRACKING_ID = process.env.GOOGLE_ANALYTICS_TAG; // Replace with your GA tracking ID

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={siteConfig.faviconPath} />
        <meta http-equiv="Content-Language" content={siteConfig.regionCode} />
        <link rel="alternate" href={siteConfig.siteURL} href-lang={siteConfig.hreflang} />
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
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
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

      <body className="bg-white">
        <Header />
            {children}
            <Footer />
      </body>
    </html>
  );
}