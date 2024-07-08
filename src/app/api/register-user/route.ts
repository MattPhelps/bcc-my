import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      return NextResponse.json({ error: 'Email already in use.' }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
      },
    });

    // return NextResponse.json(newUser, { status: 200 });
    return NextResponse.json({ success: true, user: newUser }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error creating user.' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
