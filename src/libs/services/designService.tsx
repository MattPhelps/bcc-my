import prisma from "../prisma";

export const getRandomTattooDesign = async () => {

  const count = await prisma.design.count();
  const randomIndex = Math.floor(Math.random() * count);
  
  const randomDesign = await prisma.design.findMany({
    take: 1,
    skip: randomIndex,
  });

  return randomDesign[0];
};

export async function getAllDesignsByIdea(ideaSlug) {
  try {
    const idea = await prisma.idea.findUnique({
      where: { slug: ideaSlug },
      select: { id: true },
    });

    if (!idea) {
      throw new Error(`Idea with slug ${ideaSlug} not found`);
    }

    const designs = await prisma.design.findMany({
      where: {
        ideas: {
          some: {
            ideaId: idea.id,
          },
        },
      },
      include: {
        user: true,
        favorites: true,
        styles: true,
      },
    });

    return designs;
  } catch (error) {
    console.error(error);
    return [];
  }
}