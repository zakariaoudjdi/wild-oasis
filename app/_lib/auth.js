import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks:{
    authorized({auth,request}){
      if (auth?.user) {
        return true; 
      }
      return false; 
    }
  }
  ,
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,signIn,signOut,
  handlers: { GET, POST },
} = NextAuth(authOptions);
