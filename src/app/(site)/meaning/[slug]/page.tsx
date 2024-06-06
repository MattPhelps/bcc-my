"use client"
import { meaningData } from "./../meaningData";
import { Meaning } from "@/types/meaning";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function MeaningTemplatePage() {
  const { slug } = useParams();
  const [meaning, setMeaning] = useState<Meaning | null>(null);

  useEffect(() => {
    if (slug) {
      const foundMeaning = meaningData.find((item) => item.slug === slug);
      setMeaning(foundMeaning || null);
    }
  }, [slug]);

  if (!meaning) {
    return <p>Meaning not found!</p>;
  }

  return (
    <div>
      <h1>{meaning.title}</h1>
      <p>{meaning.description}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const paths = meaningData.map((item) => ({
    slug: item.slug,
  }));

  return paths;
}
