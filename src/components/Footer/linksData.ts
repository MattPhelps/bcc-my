import { FooterLink } from "@/types/footerLink";
import siteConfig from '../../../siteConfig';

export const legalLink: FooterLink[] = [
  {
    id: 3,
    title: "Terms of Service",
    href: "terms",
    newTab: false,
  },
  {
    id: 4,
    title: "Privacy Policy",
    href: "privacy",
    newTab: false,
  },
  {
    id: 6,
    title: "DMCA",
    href: "dmca",
    newTab: false,
  }
  
];

export const supportsLink: FooterLink[] = [
  {
    id: 10,
    title: "Help",
    href: "help",
    newTab: false,
  },
  {
    id: 7,
    title: "Contact",
    href: "contact",
    newTab: false,
  },
  {
    id: 9,
    title: "Refunds",
    href: "refunds",
    newTab: false,
  }
];


export const resourceLink: FooterLink[] = [
  {
    id: 14,
    title: "AI Tattoo Generator",
    href: "https://www.inkgen.ai/",
    newTab: true,
  }
];