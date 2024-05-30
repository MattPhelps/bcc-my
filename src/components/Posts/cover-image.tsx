import Image from "next/image";

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug?: string;
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  
  const image = (
    <Image
      src={coverImage?.node.sourceUrl}
      alt={`${title}`}
      width={500}  
      height={500}
      priority
      className="rounded dark:bg-gray-500 w-full h-auto"
    />
  );

  return (
    <div className="sm:mx-0 lg:col-span-7">
      { image }
    </div>
  );
}
