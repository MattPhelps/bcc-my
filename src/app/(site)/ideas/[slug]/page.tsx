"use client"
import PageTitle from "../../../../components/Common/PageTitle";
import Button from '@/components/Common/Button';
import { ideasData } from "./../ideasData";
import { Ideas } from "@/types/ideas";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function MeaningTemplatePage() {
  const { slug } = useParams();
  const [idea, setMeaning] = useState<Ideas | null>(null);

  useEffect(() => {
    if (slug) {
      const slugWithSlash = `/${slug}`;  // Add leading slash to match the data
      const foundMeaning = ideasData.find((item) => item.slug === slugWithSlash);
      setMeaning(foundMeaning || null);
    }
  }, [slug]);

  if (!idea) {  // Check for null or undefined meaning before rendering
    return <p>Idea not found!</p>; //code will break if this block is removeed
  }

  const pageTitle = toCapitalCase(idea.keyword);
  const pageDescription = toCapitalCase(idea.description);

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
  const paths = ideasData.map((item) => ({
    slug: item.slug,
  }));

  return paths;
}

function toCapitalCase(str: string): string {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  
