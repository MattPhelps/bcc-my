import prisma from "../prisma";

export const getAllMeanings = async () => {
  try {
    const meaning = await prisma.meaning.findMany();
    return meaning;
  } catch (error) {
    console.error("Error fetching meanings:", error);
    return [];
  }
};

export const getMeaningsBySlug = async (slug: string) => {
  try {
    const styles = await prisma.meaning.findMany({
      where: {
        slug: {
          startsWith: slug, // Assuming the category is part of the slug
        },
      },
    });
    return styles;
  } catch (error) {
    console.error("Error fetching meaning by slug:", error);
    return [];
  }
};

export const getMeaningBySlug = async (slug: string) => {
  try {
    const style = await prisma.meaning.findUnique({
      where: { slug },
    });
    return style;
  } catch (error) {
    console.error("Error fetching meaning:", error);
    return null;
  }
};
