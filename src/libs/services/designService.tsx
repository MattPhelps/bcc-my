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
