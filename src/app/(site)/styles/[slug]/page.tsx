"use client"
import PageTitle from "../../../../components/Common/PageTitle";
import Button from '@/components/Common/Button';
import { stylesData } from "./../stylesData";
import { Styles } from "@/types/styles";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function StylesTemplatePage() {
  const { slug } = useParams();
  const [style, setMeaning] = useState<Styles | null>(null);

  useEffect(() => {
    if (slug) {
      const slugWithSlash = `/${slug}`;  // Add leading slash to match the data
      const foundMeaning = stylesData.find((item) => item.slug === slugWithSlash);
      setMeaning(foundMeaning || null);
    }
  }, [slug]);

  if (!style) {  // Check for null or undefined meaning before rendering
    return <p>Idea not found!</p>; //code will break if this block is removeed
  }

  const pageTitle = toCapitalCase(style.title);
  const pageDescription = toCapitalCase(style.description);

  return (
    <>
      <section className="pt-3 pb-25">
        <div className="max-w-[1170px] text-[black]/70 dark:text-[white]/50 mx-auto px-4 sm:px-8 xl:px-0 z-10 pt-25">
          <PageTitle title={pageTitle}  paragraph={pageDescription}   />
            <div className="wow fadeInUp text-center">
              <Button
                href="/design"
                style={{ }}
                className="">
                  Design your tattoo
              </Button>
            </div>

        </div>
      </section>
    </>
  );
};

export async function generateStaticParams() {
  const paths = stylesData.map((item) => ({
    slug: item.slug,
  }));

  return paths;
}

function toCapitalCase(str: string): string {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  
