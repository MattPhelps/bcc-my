import prisma from "../prisma";

export const getAllStyles = async () => {
  try {
    const styles = await prisma.style.findMany();
    return styles;
  } catch (error) {
    console.error("Error fetching styles:", error);
    return [];
  }
};

export const getStylesBySlug = async (slug: string) => {
  try {
    const styles = await prisma.style.findMany({
      where: {
        slug: {
          startsWith: slug, // Assuming the category is part of the slug
        },
      },
    });
    return styles;
  } catch (error) {
    console.error("Error fetching styles by slug:", error);
    return [];
  }
};

export const getStyleBySlug = async (slug: string) => {
  try {
    const style = await prisma.style.findUnique({
      where: { slug },
    });
    return style;
  } catch (error) {
    console.error("Error fetching style:", error);
    return null;
  }
};
