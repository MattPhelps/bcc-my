import prisma from "../prisma";

export const getUserCount = async () => {
    return prisma.user.count();
  };
  
  export const getAllUsers = async () => {
    return prisma.user.findMany();
  };
  
  