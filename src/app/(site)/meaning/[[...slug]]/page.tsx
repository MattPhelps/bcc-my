import CellGrid from "@/components/CellGrid";
import Button from "@/components/Common/Button";
import PageTitle from "@/components/Common/PageTitle";
import { getAllMeanings, getMeaningsBySlug, getMeaningBySlug} from "@/libs/services/meaningService";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

export async function generateStaticParams() {
  const meanings = await getAllMeanings();
  const uniqueSlugs = [
    ...new Set(meanings.map((meaning) => meaning.slug.split("/")[0])),
  ]; // Assuming slugs follow a certain pattern
  return uniqueSlugs.map((slug) => ({
    slug: [slug],
  }));
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};



// export const metadata: Metadata = {
//   title: "Meaning Detail",
//   description: "Detailed view of a tattoo meanings",
// };
export async function generateMetadata({ params }) {
  const { slug } = params;
  
  if (!slug) {
    return {
      title: "Meaning Detail",
      description: "Detailed view of a tattoo meanings"
    };
  } else if (slug.length === 1) {
    const categorySlug = slug[0];
    const meanings = await getMeaningsBySlug(`/${categorySlug}`);
    return {
      title: `Meanings for ${categorySlug}`,
      description: `Discover tattoo meanings in the category: ${categorySlug}`
    };
  } else {
    const nestedSlug = slug.join('/');
    const meaning = await getMeaningBySlug(nestedSlug);
    if (meaning) {
      return {
        title: meaning.name,
      };
    } else {
      return {
        title: "Meaning not found",
        description: "This tattoo meaning could not be found."
      };
    }
  }
}

const MeaningPage = async ({ params }) => {
  const { slug } = params;
  if (!slug) {
    // No slug provided, show all meanings
    const allMeanings = await getAllMeanings();
    return (
      <>
        <section className="pt-3 pb-25">
          <div className="max-w-[1170px] text-[black]/80 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-5">
          <div className="flex justify-center">
            <Breadcrumb />
          </div>
            <PageTitle
              title="Tattoo Meanings"
              paragraph="Find out the meaning behind all tattoo designs"
            />
            <div className="wow fadeInUp text-center">
              <Button href="/design" style={{}} className="" onClick={false}>
                Design your tattoo
              </Button>
            </div>
            <div className="flex flex-wrap justify-center -mx-4 mt-24">
              {allMeanings.length > 0 ? (
                allMeanings.map((cell, index) => (
                  <Link
                    key={index}
                    href={`meaning${cell.slug}`}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-8 mb-8 duration-100 ease-in hover:scale-105"
                  >
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                      <img
                        // src={cell.image}
                        alt={cell.name}
                        className="w-full h-56 object-cover object-center"
                      />
                      <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">{cell.name}</h2>
                        <p className="text-gray-600 text-sm dark:text-gray-400">
                          {/* {cell.description} */}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No meanings available.</p>
              )}
            </div>
          </div>
        </section>
      </>
    );
  } else if (slug.length === 1) {
    const categorySlug = slug[0];
    const meanings = await getMeaningsBySlug(`/${categorySlug}`);
    
    if (!meanings.length) {
      return <p>No meanings found for this category</p>;
    }
    return (
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[black]/80 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-5">
          <div className="flex justify-center">
            <Breadcrumb />
          </div>
          <PageTitle title={`${capitalizeFirstLetter(categorySlug)} Tattoo Meaning`} />
          <div className="wow fadeInUp content-container">
            {meanings.map((meaning, index) => (
              
              <div key={index}>
                <h2 className="text-xl font-bold mb-2">{meaning.name}</h2>
                {/*
                <p className="text-gray-600 text-sm dark:text-gray-400">{meaning.description}</p>  */}
              </div>

            ))}
          </div>
        </div>
      </section>
    );
  } else {
    // Nested slug, show detailed meaning view
      const nestedSlug = slug.join("/");
      const meaning = await getMeaningBySlug(nestedSlug);
      
      if (!meaning) {
        return <p>Meaning not found</p>;
      }
      return (
        <section className="pt-3 pb-25">
          <div className="max-w-[1170px] text-[black]/80 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
            <Breadcrumb />
            <h1 className="text-3xl font-bold">{meaning.name}</h1>
            {/* <img src={meaning.image} alt={meaning.name} className="w-full h-full object-cover object-center mt-4" />
            <p className="mt-4">{meaning.description}</p> */}
          </div>
        </section>
      );
    }
  };

export default MeaningPage;
