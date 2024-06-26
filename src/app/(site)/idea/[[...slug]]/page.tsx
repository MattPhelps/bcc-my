import { Metadata } from "next";
import { getAllIdeas, getIdeasBySlug, getIdeaBySlug } from "@/libs/services/ideaService";
import { getAllDesignsByIdea } from "@/libs/services/designService";
import CellGrid from "@/components/CellGrid";
import PageTitle from "@/components/Common/PageTitle";
import Button from "@/components/Common/Button";
import Headline from "@/components/Common/Headline";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export async function generateStaticParams() {
  const ideas = await getAllIdeas();
  const uniqueSlugs = [...new Set(ideas.map(idea => idea.slug.split('/')[0]))]; // Assuming slugs follow a certain pattern
  return uniqueSlugs.map((slug) => ({
    slug: [slug],
  }));
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export async function generateMetadata({ params }) {
  const { slug } = params;
  
  if (!slug) {
    return {
      title: "Tattoo Ideas: Explore 100,000+ Unique Designs",
      description: "Discover endless tattoo ideas for every style and personality. Browse our comprehensive guide to find inspiration for your next tattoo, from classic designs to modern trends. Perfect for anyone looking to explore diverse tattoo styles and concepts."
    };
  } else if (slug.length === 1) {
    const categorySlug = slug[0];
    const ideaName = capitalizeFirstLetter(categorySlug)
    const ideas = await getIdeasBySlug(`/${categorySlug}`);
    return {
      title: `${ideaName} Tattoo Ideas`,
      description: `Explore stunning ${categorySlug} tattoo ideas. Find inspiration and creative designs for your next ink with our curated collection of ${categorySlug} tattoos. Perfect if you're looking to express your unique style.`
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
    const idea = await getIdeaBySlug(`/${categorySlug}`); `/${slug}`
    const designs = await getAllDesignsByIdea(categorySlug);
    if (!idea.name) {
      return <p>This idea doesn't exist!</p>;
    }
    return (
      <>
        <section className="pt-3 pb-25">
          <div className="max-w-[1170px] text-[black]/80 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-5">
            
          <div className="flex justify-center">
            <Breadcrumb />
          </div>
          
          <PageTitle title={`${idea.name} Tattoo Ideas`} paragraph={`${idea.description}`} />
          
          <div className="text-center mb-4 text-sm text-blue-500 underline">
            <Link href={`/meaning${idea.slug}`}>
              {`${idea.name} Tattoo Meaning`}
            </Link>
          </div>

          {designs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              {designs.map((design, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                  <img src={design.imageUrl} alt={design.description} className="w-full h-56 object-cover object-center" />
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-center mb-2">{design.description}</h2>
                    {/* You can add more design details here */}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-[green] mt-20"><a href="https://inkgen.ai/design" className="text-green underline">
            Generate the first {`${idea.name}`} design
          </a></p>
          )}
             {/* Insert link to the tattoo meaning */}
          {/* Insert the idea designs here */}
        
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