import prisma from "../prisma";

  export const fetchUserCount = async () => {
    try {
      const userCount = await prisma.user.count();
      return userCount;
    } catch (error) {
      console.error("Error fetching user count:", error);
      return [];
    }
  };

  export const fetchAllUsers = async () => {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };
  
  // Access like this
  // import { getUserCount } from '@/libs/repositories/userRepository';
  // const userCount = await getUserCount();
  // const userName = await prisma.user.findFirst()