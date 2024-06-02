import { Metadata } from "next";
import { fetchPosts } from "@/lib/fetchPosts";
import HeroPost from "@/components/Posts/HeroPost";
import LoadMoreButton from "@/components/Posts/LoadMoreButton";


const pageTitle = `InkGen Blog`;
const pageDescription = `Learn about tattoos!`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

export const revalidate = 10;
 
const BlogPage = async () => {
  const initialPosts = await fetchPosts(); // Fetch initial posts server-side
  const heroPost = initialPosts.edges[0]?.node;
  const morePosts = initialPosts.edges.slice(1);
 
  return (
    <>
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="content-container">
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          <LoadMoreButton initialMorePosts={morePosts} pageInfo={initialPosts.pageInfo} />
        </div>
        </div>
      </section>
    </div>
    </>
  );
};
 
export default BlogPage;


// HELPER CODE THAT WORKS INSTEAD OF THE ABOVE

  // let initialPosts;
  // try {
  //   initialPosts = await fetchPosts(); // Fetch initial posts server-side
  // } catch (error) {
  //   console.error('Failed to fetch posts during static generation:', error);
  //   return (
  //     <>
  //       <div>Error loading posts.</div>
  //     </>
  //   );
  // }

  // const heroPost = initialPosts.edges[0]?.node;
  // const morePosts = initialPosts.edges.slice(1);