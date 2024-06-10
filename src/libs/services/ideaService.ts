import prisma from "../prisma";

export const fetchAllIdeas = async () => {
    try {
      const ideas = await prisma.idea.findMany();
      return ideas;
    } catch (error) {
      console.error("Error fetching ideas:", error);
      return [];
    }
  };
  