// import { Metadata } from "next";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import { fetchPosts } from "@/lib/fetchPosts";
import HeroPost from "@/components/Posts/HeroPost";
import LoadMoreButton from "@/components/Posts/LoadMoreButton";


// const pageTitle = `InkGen Blog`;
// const pageDescription = `Learn about tattoos!`;

// export const metadata: Metadata = {
//   title: pageTitle,
//   description: pageDescription,
// };

// export const revalidate = 10;
 
const BlogPage = async () => {
  const initialPosts = await fetchPosts(); // Fetch initial posts server-side
  const heroPost = initialPosts.edges[0]?.node;
  const morePosts = initialPosts.edges.slice(1);
 
  return (
    <>
    {/* <Header /> */}
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
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
      </section>
    </div>
    {/* <Footer /> */}
    </>
  );
};
 
export default BlogPage;
