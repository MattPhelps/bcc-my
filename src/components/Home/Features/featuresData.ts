import { Feature } from "@/types/feature";
import siteConfig from '../../../../siteConfig';

const featuresData: Feature[] = [
  {
    id: 11,
    title: "Enter your idea",
    description: `1. Enter your tattoo idea in the prompt input field. Describe your tattoo and be as descriptive as you like! Let your imagination roam free, no concept is too complex.`,
    icon: "/images/how-to/copy.svg",
  },
  {
    id: 27,
    title: "Select style and color",
    description: `2. Next, select the style for your tattoo. Do you prefer dotwork or a minimalist tattoo style? Choose the style you want from our wide range of options in the menu dropdown.`,
    icon: "/images/how-to/paste.svg",
  },
  {
    id: 21,
    title: "Get your tattoo design",
    description: `3. Now it's time for our AI start working! Wait a moment for our AI tattoo artist to present you with a few unique concepts based on the inputs which you've provided!`,
    icon: "/images/how-to/download.svg",
  },
];

export default featuresData;
