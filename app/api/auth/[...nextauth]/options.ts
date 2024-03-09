// import { FirestoreAdapter } from "@auth/firebase-adapter";
// import admin from "firebase-admin";
// import * as firebase from "firebase-admin";
// import { cert } from "firebase-admin/app";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import type { NextAuthOptions } from "next-auth";
// import NextAuth from "next-auth";
// import { Adapter } from "next-auth/adapters";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { auth ,app, db} from "../../../../lib/firebase/firebase-config";

// // if (!admin.apps.length) {
// //   admin.initializeApp({
// //     credential: cert({
// //       projectId: process.env.FIREBASE_PROJECT_ID,
// //       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
// //       privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
// //     }),
// //   });
// // }

// export const options: NextAuthOptions = {
//   pages: {
//     signIn: "/loginV2",
//     signOut: "/",
//     newUser: "/onboarding",
//   },
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         //
//         if (credentials && credentials.email && credentials.password) {
//           try {
//             const userCredential = await signInWithEmailAndPassword(
//               auth,
//               credentials.email,
//               credentials.password
//             );
//             const user = userCredential.user;

//             console.log("User: ", user)
//             // If sign-in was successful, return the user object
//             return {
//               id: user.uid,
//               name: user.displayName,
//               email: user.email,
//               image: user.photoURL,
//             };
//           } catch (error) {
//             // Handle errors (e.g., wrong password, no user, etc.)
//             console.error("Following error is happening: ", error);
//             return null;
//           }
//         }
//         return null;
//       },
//     }),
//   ],

//   adapter: FirestoreAdapter(auth) as Adapter,

//   callbacks: {
//     async session({ session, user }) {
//       session.user = user;
//       return session;
//     },
//   },
// //   adapter: FirestoreAdapter({
// //     credential: cert({
// //       projectId: process.env.FIREBASE_PROJECT_ID,
// //       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
// //       privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
// //     }),
// //   }) as Adapter,
// };

// export default NextAuth(options);

import SpotifyProvider from "next-auth/providers/spotify";

import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

import { FirestoreAdapter } from "@auth/firebase-adapter";
import admin from "firebase-admin";
import * as firebase from "firebase-admin";
import { cert } from "firebase-admin/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import { auth, app, db } from "../../../../lib/firebase/firebase-config";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: FirestoreAdapter(app) as Adapter,
  pages: {
    signIn: "/loginV2",
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
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

            console.log("User: ", user);
            // If sign-in was successful, return the user object
            return {
              id: user.uid,
              name: user.displayName,
              email: user.email,
              image: user.photoURL,
              onboarded: false,
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
  callbacks: {
    async session({ session, user }) {
      // Fetch the user document from Firestore
      const userRef = doc(db, "users", user.id);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        // Attach user role and onboarding status to the session
        session.user.role = userData.role;
        session.user.onboarded = userData.user_metadata.onboarded;
      } else {
        console.error("User document not found");
        // Handle as appropriate
      }

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};
