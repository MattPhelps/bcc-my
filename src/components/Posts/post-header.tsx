import Link from "next/link";
import Date from "./date";

export default function PostHeader({ post }) {
  return (
    <>
      <h1
        className="text-3xl font-bold lg:text-5xl dark:text-white"
        dangerouslySetInnerHTML={{ __html: post.title }}
      />

      <div className="flex items-center gap-x-5">
        <Link
          className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:text-neutral-200"
          href="/"
        >
          {post.author.node.name}
        </Link>
        <Date dateString={post.date} />
      </div>
    </>
  );
}
