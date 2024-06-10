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
