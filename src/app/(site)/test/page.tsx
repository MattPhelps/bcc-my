import React from 'react';
import prisma from '@/libs/prisma';
import { getUserCount } from '@/libs/repositories/userRepository';

const Test = async () => {
  const userCount = await getUserCount();
  const userName = await prisma.user.findFirst()

  return (
    <>
      <h1 className="text-xl">{userName.name}</h1>

    </>
  );
};

export default Test;
