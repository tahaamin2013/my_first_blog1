import { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import NextAuth from 'next-auth/next';
import { Prisma } from '@prisma/client';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from "../../../../utils/connect"

import { getServerSession } from "next-auth"


const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: 'af34a935a3f2db7cbd31',
      clientSecret: 'c010c539044693779a7b8cc3b92d06ec48c39bb0',
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      console.log(session, token);
      // You can modify the session data here if needed
      return session;
    },
    // Add the callbackUrl to redirect to the root page after login
    async redirect({ url, baseUrl }) {
      return 'http://localhost:3000/';
    },
  },
  secret: 'iamadeveloperlove',  
};

const nextAuth = NextAuth(authOptions);
export const getAuthSession = () => getServerSession(authOptions)

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}