import React from 'react';
import { getUserCount } from '@/libs/repositories/userRepository';

const Test = async () => {
  const userCount = await getUserCount();

  return (
    <>
      <h1 className="text-xl">{userCount}</h1>

    </>
  );
};

export default Test;
