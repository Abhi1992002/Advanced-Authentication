// will not execute in edge

import NextAuth, { Session } from "next-auth";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";
import { JWT } from "@auth/core/jwt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login", // page for sigin
    error: "/auth/error", // if i get some error , i come here
  },
  events: {
    // this event will trigger if we sign in using some 3rd party providers
    async linkAccount({ user }) {
      // i do not wnat to verify email if he is using 3rd party provider
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      //if the user tries to signin/login  and his email is not verified , don't allow

      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id!);

      if (!existingUser || !existingUser.emailVerified) {
        return false;
      }

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        );

        if (!twoFactorConfirmation) return false;

        await db.twoFactorConfirmation.delete({
          where: {
            id: twoFactorConfirmation.id,
          },
        });
      }

      return true;
    },
    async session(params: { session: Session; token?: JWT }) {
      const { session, token } = params;
      if (token?.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token?.role && session.user) {
        session.user.role = token?.role;
      }

      return session;
    },

    async jwt({ token }: any) {
      if (!token.sub) return token;

      const user = await getUserById(token.sub);
      console.log(user?.role);
      if (!user) return token;

      token.role = user?.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});

// it returns handler (i can use it to create next auth server) and auth (i can use it to communicate with nextauth server for checking if he is loggedin or not etc)

// i could use signIn and signOut in server actions and server component

// re_ixzga6TQ_CKps8ZE2AcF92RwHWSXFteT4
