import { fetchPost } from "@/lib/fetchPost";
import type { Metadata, ResolvingMetadata } from "next";
import striptags from "striptags";
import Link from "next/link";
import NotFound from "../../[...not-found]/page";
import PostBody from "@/components/Posts/post-body";
import PostHeader from "@/components/Posts/post-header";
import Tags from "@/components/Posts/tags";
import Sidebar from "@/components/Posts/sidebar";

// Define the `generateMetadata` function
// export async function generateMetadata(
//   { params }: { params: { slug: string } },
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const { slug } = params;
//   const data = await fetchPost(slug);

//   if (!data.post) {
//     return {
//       title: "Post Not Found",
//       description: "This post does not exist.",
//     };
//   }

//   const { post } = data;

//   // Strip HTML tags from the description and limit its length
//   const cleanDescription = striptags(post.excerpt).substring(0, 160);

//   return {
//     title: post.title,
//     description: cleanDescription,
//   };
// }

export default async function PostPage({ params }) {
  const { slug } = params;
  const data = await fetchPost(slug);

  if (!data.post) {
    return <NotFound />;
  }

  const { post, posts } = data;
  const morePosts = posts.edges;

  return (
    //  <!-- Blog Article -->
    <>
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
          <div className="lg:col-span-2">
            <div className="py-8 lg:pe-8">
              <div className="space-y-5 lg:space-y-8">
                <Link
                  className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-500"
                  href="/blog"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Blog
                </Link>
                <PostHeader post={post} />
                <PostBody content={post.content} />
                <Tags post={post} />
              </div>
            </div>
          </div>
          {/* <!-- End Content --> */}
          <Sidebar posts={morePosts} />
        </div>
      </div>
    </>
  );
}
