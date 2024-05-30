import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
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
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
    >
      {coverImage && (
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      )}
      <div className="p-6 space-y-2">
        <h3
          className="text-2xl font-semibold group-hover:underline group-focus:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h3>
        <span className="text-xs dark:text-gray-600">
          <Date dateString={date} />
        </span>
        <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
      </div>
    </Link>
  );
}
