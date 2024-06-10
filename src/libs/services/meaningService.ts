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
