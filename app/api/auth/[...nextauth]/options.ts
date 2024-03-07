import { FirestoreAdapter } from "@auth/firebase-adapter";
import admin from "firebase-admin";
import { cert } from "firebase-admin/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import { auth } from "../../../../lib/firebase/firebase-config";
if (!admin.apps.length) {
  admin.initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    }),
  });
}

export const options: NextAuthOptions = {
  pages: {
    signIn: "/loginV2",
    signOut: "/",
    newUser: "/onboarding",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        //
        if (credentials && credentials.email && credentials.password) {
          try {
            const userCredential = await signInWithEmailAndPassword(
              auth,
              credentials.email,
              credentials.password
            );
            const user = userCredential.user;

            console.log("User: ", user)
            // If sign-in was successful, return the user object
            return {
              id: user.uid,
              name: user.displayName,
              email: user.email,
              image: user.photoURL,
            };
          } catch (error) {
            // Handle errors (e.g., wrong password, no user, etc.)
            console.error("Following error is happening: ", error);
            return null;
          }
        }
        return null;
      },
    }),
  ],

  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    }),
  }) as Adapter,
};

export default NextAuth(options);
