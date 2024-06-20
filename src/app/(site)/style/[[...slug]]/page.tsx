import CellGrid from "@/components/CellGrid";
import Button from "@/components/Common/Button";
import PageTitle from "@/components/Common/PageTitle";
import { getAllStyles, getStylesBySlug, getStyleBySlug} from "@/libs/services/styleService";
import { Metadata } from "next";
import Link from "next/link";

export async function generateStaticParams() {
  const styles = await getAllStyles();
  const uniqueSlugs = [
    ...new Set(styles.map((style) => style.slug.split("/")[0])),
  ]; // Assuming slugs follow a certain pattern
  return uniqueSlugs.map((slug) => ({
    slug: [slug],
  }));
}

// export const metadata: Metadata = {
//   title: "Style Detail",
//   description: "Detailed view of a tattoo styles",
// };
export async function generateMetadata({ params }) {
  const { slug } = params;
  
  if (!slug) {
    return {
      title: "Style Detail",
      description: "Detailed view of a tattoo styles"
    };
  } else if (slug.length === 1) {
    const categorySlug = slug[0];
    const styles = await getStylesBySlug(`/${categorySlug}`);
    return {
      title: `Styles for ${categorySlug}`,
      description: `Discover tattoo styles in the category: ${categorySlug}`
    };
  } else {
    const nestedSlug = slug.join('/');
    const style = await getStyleBySlug(nestedSlug);
    if (style) {
      return {
        title: style.name,
        description: style.description
      };
    } else {
      return {
        title: "Style not found",
        description: "This tattoo style could not be found."
      };
    }
  }
}

const StylesPage = async ({ params }) => {
  const { slug } = params;
  if (!slug) {
    // No slug provided, show all styles
    const allStyles = await getAllStyles();
    return (
      <>
        <section className="pt-3 pb-25">
          <div className="max-w-[1170px] text-[black]/80 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
            <PageTitle
              title="Tattoo Styles"
              paragraph="InkGen can generate design in many different tattoo styles. From intricate dotwork to minimalist sketches, from bold blackwork to broad-stroked watercolor tattoos - our AI-powered tattoo generator will create designs in the style that you love. Browse through our catalog of styles and discover the one you connect with the most."
            />
            <div className="wow fadeInUp text-center">
              <Button href="/design" style={{}} className="">
                Design your tattoo
              </Button>
            </div>
            <div className="flex flex-wrap justify-center -mx-4 mt-24">
              {allStyles.length > 0 ? (
                allStyles.map((cell, index) => (
                  <Link
                    key={index}
                    href={`style/${cell.slug}`}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-8 mb-8 duration-100 ease-in hover:scale-105"
                  >
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                      <img
                        src={cell.image}
                        alt={cell.name}
                        className="w-full h-56 object-cover object-center"
                      />
                      <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">{cell.name}</h2>
                        <p className="text-gray-600 text-sm dark:text-gray-400">
                          {cell.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No styles available.</p>
              )}
            </div>
          </div>
        </section>
      </>
    );
  } else if (slug.length === 1) {
    // Single segment slug, show category of styles
    const categorySlug = slug[0];
    const styles = await getStylesBySlug(`/${categorySlug}`);
    `/${slug}`;
    if (!styles.length) {
      return <p>No styles found for this category</p>;
    }
    return (
      <>
        <section className="pt-3 pb-25">
          <div className="max-w-[1170px] text-[black]/80 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
            <h1 className="text-3xl font-bold">Styles for {categorySlug}</h1>
            <CellGrid data={styles} rootSlug={`/style/${categorySlug}`} />
          </div>
        </section>
      </>
    );
  } else {
    // Nested slug, show detailed style view
    const nestedSlug = slug.join("/");
    const style = await getStyleBySlug(nestedSlug);
    if (!style) {
      return <p>Style not found</p>;
    }
    return (
      <>
        <section className="pt-3 pb-25">
          <div className="max-w-[1170px] text-[black]/80 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
            <h1 className="text-3xl font-bold">{style.name}</h1>
            {/* <img src={style.image} alt={style.name} className="w-full h-full object-cover object-center mt-4" />
            <p className="mt-4">{style.description}</p> */}
          </div>
        </section>
      </>
    );
  }
};

export default StylesPage;
