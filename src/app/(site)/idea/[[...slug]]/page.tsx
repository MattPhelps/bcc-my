import { Metadata } from "next";
import { getAllIdeas, getIdeasBySlug, getIdeaBySlug } from "@/libs/services/ideaService";
import CellGrid from "@/components/CellGrid";
import PageTitle from "@/components/Common/PageTitle";
import Button from "@/components/Common/Button";
import Headline from "@/components/Common/Headline";
import Breadcrumb from "@/components/Common/Breadcrumb";

export async function generateStaticParams() {
  const ideas = await getAllIdeas();
  const uniqueSlugs = [...new Set(ideas.map(idea => idea.slug.split('/')[0]))]; // Assuming slugs follow a certain pattern
  return uniqueSlugs.map((slug) => ({
    slug: [slug],
  }));
}

// export const metadata: Metadata = {
//   title: "Ideas",
//   description: "Discover tattoo ideas"
// };
// Function to generate dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = params;
  
  if (!slug) {
    return {
      title: "Ideas",
      description: "Discover tattoo ideas"
    };
  } else if (slug.length === 1) {
    const categorySlug = slug[0];
    const ideas = await getIdeasBySlug(`/${categorySlug}`);
    return {
      title: `Ideas for ${categorySlug}`,
      description: `Discover tattoo ideas in the category: ${categorySlug}`
    };
  } else {
    const nestedSlug = slug.join('/');
    const idea = await getIdeaBySlug(nestedSlug);
    if (idea) {
      return {
        title: idea.name,
        description: idea.description
      };
    } else {
      return {
        title: "Idea not found",
        description: "This tattoo idea could not be found."
      };
    }
  }
}

const IdeasPage = async ({ params }) => {
  const { slug } = params;
  if (!slug) {
    // No slug provided, show all ideas
    const allIdeas = await getAllIdeas();
    return (
      <>
         <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[black]/80 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-5">
        <div className="flex justify-center">
          <Breadcrumb />
        </div>
          <PageTitle title="Tattoo Ideas"  paragraph="Your next tattoo idea is waiting for you. Here you will find thousands of popular tattoo concepts for your next ink session. Browse through thousands of high-quality designs and discover the perfect tattoo that suits your personality and style."   />
            <div className="wow fadeInUp text-center">
              <Button
                onClick={false}
                href="/design"
                style={{ }}
                className="">
                  Design your tattoo
              </Button>
            </div>

          <h2 className="text-3xl font-bold mt-24 mb-4">Tattoo Ideas</h2>
          <CellGrid data={allIdeas} rootSlug={`/idea`}/>
        </div>
      </section>
      </>
    );
  } else if (slug.length === 1) {
    // Single segment slug, show category of ideas
    const categorySlug = slug[0];
    const ideas = await getIdeasBySlug(`/${categorySlug}`); `/${slug}`
    if (!ideas.length) {
      return <p>No ideas found for this category</p>;
    }
    return (
      <>
        <section className="pt-3 pb-25">
          <div className="max-w-[1170px] text-[black]/80 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
            <h1 className="text-3xl font-bold">Ideas for {categorySlug}</h1>
            <CellGrid data={ideas} rootSlug={`/idea/${categorySlug}`} />
          </div>
        </section>
      </>
    );
  } else {
    // Nested slug, show detailed idea view
    const nestedSlug = slug.join('/');
    const idea = await getIdeaBySlug(nestedSlug);
    if (!idea) {
      return <p>Idea not found</p>;
    }
    return (
      <>
        <section className="pt-3 pb-25">
          <div className="max-w-[1170px] text-[black]/80 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
            <h1 className="text-3xl font-bold">{idea.name}</h1>
            {/* <img src={idea.image} alt={idea.name} className="w-full h-full object-cover object-center mt-4" />
            <p className="mt-4">{idea.description}</p> */}
          </div>
        </section>
      </>
    );
  }
};

export default IdeasPage;

// import { Metadata } from "next";
// import { getAllIdeas, getIdeaBySlug } from "@/libs/services/ideaService";

// export async function generateStaticParams() {
//   const ideas = await getAllIdeas();
  
//   return ideas.map((idea) => ({
//     slug: [idea.slug], // Ensure the slug is returned as an array
//   }));
// }

// export const metadata: Metadata = {
//   title: "Idea Detail",
//   description: "Detailed view of a tattoo idea"
// };

// const IdeaDetailPage = async ({ params }) => {
//   const slug = params.slug.join('/');
//   const idea = await getIdeaBySlug(`/${slug}`);
//   if (!idea) {
//     return <p>Idea not found</p>;
//   }

//   return (
//     <>
//       <section className="pt-3 pb-25">
//         <div className="max-w-[1170px] text-[black]/80 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
//           <h1 className="text-3xl font-bold">{idea.name}</h1>
//           {/* <img src={idea.image} alt={idea.name} className="w-full h-full object-cover object-center mt-4" />
//           <p className="mt-4">{idea.description}</p> */}
//         </div>
//       </section>
//     </>
//   );
// };

// export default IdeaDetailPage;

