import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getGuest, createGuest } from "@/app/_lib/data-service";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      if (auth?.user) {
        return true;
      }
      return false;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);
        if (!existingGuest)
          await createGuest({
            email: user.email,
            fullName: user.name,
          });

        return true;
      } catch (error) {
        console.error("Error in signIn", error);
        return false;
      }
    },
    async session({ session, user }) {
      const existingGuest = await getGuest(session.user.email);
      session.user.guestId = existingGuest?.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authOptions);
