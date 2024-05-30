import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
      <Link
        rel="noopener noreferrer"
        href={`/blog/${slug}`} 
        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
      >
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
        <div className="p-6 space-y-2 lg:col-span-5">
          <h3
            dangerouslySetInnerHTML={{ __html: title }}
            className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline"
          >
          </h3>
          <span className="text-xs dark:text-gray-600">
            <Date dateString={date} />
          </span>
          <div 
          dangerouslySetInnerHTML={{ __html: excerpt }}
          >
          </div>
          {/* <Avatar author={author} /> */}
        </div>
      </Link>
  );
}
