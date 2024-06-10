import prisma from "../prisma";

export const fetchAllStyles = async () => {
  try {
    const styles = await prisma.style.findMany();
    return styles;
  } catch (error) {
    console.error("Error fetching styles:", error);
    return [];
  }
};
