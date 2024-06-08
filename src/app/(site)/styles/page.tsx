import { Metadata } from "next";
import Link from "next/link";
import PageTitle from "../../../components/Common/PageTitle";
import { stylesData } from "./stylesData";
import Button from '@/components/Common/Button';

const pageTitle = `Tattoo Styles Chart`;
const pageDescription = `Design your own tattoos!`;
const pageSlug = '/styles';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const StylesPage = () => {
  return (
    <>
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[black]/70 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
          <PageTitle title="Tattoo Styles" paragraph="InkGen can generate design in many different tattoo styles. From intricate dotwork to minimalist sketches, from bold blackwork to broad-stroked watercolor tattoos - our AI-powered tattoo generator will create designs in the style that you love. Browse through our catalog of styles and discover the one you connect with the most." />
          
          <div className="wow fadeInUp text-center">
              <Button
                href="/design"
                style={{ }}
                className=""
              >
                Design your tattoo
              </Button>
          </div>

          <div className="flex flex-wrap justify-center -mx-4 mt-24">
            {stylesData.map((cell, index) => (
              // href={`${pageSlug}${cell.slug}`}
              <a key={index} href={`/design`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-8 mb-8 duration-100 ease-in hover:scale-105">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                  <img src={cell.image} alt={cell.title} className="w-full h-56 object-cover object-center" />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{cell.title}</h2>
                    <p className="text-gray-600 text-sm dark:text-gray-400">{cell.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default StylesPage;
