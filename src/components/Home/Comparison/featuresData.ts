import { Feature } from "@/types/feature";
import siteConfig from '../../../../siteConfig';

const featuresData: Feature[] = [
  {
    id: 11,
    title: "Select an Image",
    description: `1. Select the image you want to remove a watermark from`,
    icon: "/images/how-to/copy.svg",
  },
  {
    id: 27,
    title: "Upload",
    description: `2. Click "Upload an Image" and select your image.`,
    icon: "/images/how-to/paste.svg",
  },
  {
    id: 21,
    title: "Enjoy!",
    description: `3. Your watermark-free image will be shown on the screen. Click "Download" and your done!`,
    icon: "/images/how-to/download.svg",
  },
];

export default featuresData;
