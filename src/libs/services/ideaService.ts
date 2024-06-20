import prisma from "../prisma";

export const getAllIdeas = async () => {
    try {
      const ideas = await prisma.idea.findMany();
      return ideas;
    } catch (error) {
      console.error("Error fetching ideas:", error);
      return [];
    }
};

export const getIdeasBySlug = async (slug: string) => {
  try {
    const ideas = await prisma.idea.findMany({
      where: {
        slug: {
          startsWith: slug, // Assuming the category is part of the slug
        },
      },
    });
    return ideas;
  } catch (error) {
    console.error("Error fetching ideas by slug:", error);
    return [];
  }
};

export const getIdeaBySlug = async (slug: string) => {
  try {
    const idea = await prisma.idea.findUnique({
      where: { slug },
    });
    return idea;
  } catch (error) {
    console.error("Error fetching idea:", error);
    return null;
  }
};

