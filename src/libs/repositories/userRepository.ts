import prisma from "../prisma";

export const getUserCount = async () => {
    return prisma.user.count();
  };
  
  export const getAllUsers = async () => {
    return prisma.user.findMany();
  };
  
  // Access like this
  // import { getUserCount } from '@/libs/repositories/userRepository';
  // const userCount = await getUserCount();
  // const userName = await prisma.user.findFirst()