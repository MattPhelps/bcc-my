import Image from "next/image";

type propsType = {
  title: string;
  paragraph: string;
  center?: boolean;
  icon?: string;
};

const SectionTitle = ({
  title,
  paragraph,
  icon = "/images/hero/icon-title.svg",
}: propsType) => {
  return (
    <div className="wow fadeInUp mb-16 text-center relative z-10">

      <h2 className="text-[black] dark:text-[white] mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
        {title}
      </h2>
      <p className="max-w-[714px] text-[black] dark:text-[white]  mx-auto font-medium">{paragraph}</p>
    </div>
  );
};

export default SectionTitle;
