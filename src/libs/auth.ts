import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
 
export const authOptions: NextAuthOptions = {
  // @ts-ignore
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
    signOut: "/",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials.password) {
            throw new Error('Missing email or password');
          }
        
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });
        
          if (!user || !(await bcrypt.compare(credentials.password, user.passwordHash))) {
            throw new Error('Invalid email or password');
          }
        
          return { id: user.id, name: user.name, email: user.email };
        }
      })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, email, credentials }) {
      console.log("fire signin Callback");
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("fire redirect Callback");
      return baseUrl;
    },
    async session({ session, user, token }) {
      console.log("fire SESSION Callback");
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    async jwt({ token, user, account }) {
      console.log("fire jwt Callback");
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
};