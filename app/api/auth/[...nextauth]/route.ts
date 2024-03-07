
// import CredentialsProvider from "next-auth/providers/credentials";
// import {signInWithEmailAndPassword} from 'firebase/auth';
// import { auth } from "../../../../lib/firebase/firebase-config";
// import { FirestoreAdapter } from "@auth/firebase-adapter";
// import { cert } from "firebase-admin/app";
// import NextAuth, { AuthOptions } from "next-auth"
// import GoogleProvider from "next-auth/providers/google";

// // export const authOptions = {
// //   // Configure one or more authentication providers
// //   pages: {
// //     signIn: '/loginV2'
// //   },
// //   providers: [
// //     CredentialsProvider({
// //       name: 'Credentials',
// //       credentials: {},
// //       async authorize(credentials): Promise<any> {
// //         return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
// //           .then(userCredential => {
// //             if (userCredential.user) {
// //               return userCredential.user;
// //             }
// //             return null;
// //           })
// //           .catch(error => (console.log(error)))
// //   .catch((error) => {
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
// //     console.log(error);
// //   });
// //       }
// //     })
// //   ],
// // }
// // // export default NextAuth(authOptions)

// // const handler = NextAuth(authOptions)
// // export { handler as GET, handler as POST}

// // export const authOptions: AuthOptions = {
// //   // Configure one or more authentication providers
// //   providers: [
// //     // GoogleProvider({
// //     //   clientId: process.env.GOOGLE_CLIENT_ID!,
// //     //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!
// //     // })
    
// //   ],
// //   adapter: FirestoreAdapter({
// //     credential: cert({
// //       projectId: process.env.FIREBASE_PROJECT_ID,
// //       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
// //       privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
// //     }),
// //   }) as Adapter
// // }
// // export default NextAuth(authOptions)

// export const authoptions = {
//   providers: [
//     // GoogleProvider({
//     //   clientId: process.env.NEXT_GOOGLE_AUTH_CLIENT_ID,
//     //   clientSecret: process.env.NEXT_GOOGLE_AUTH_CLIENT_SECRET,
//     // }),
//   ],
//   adapter: FirestoreAdapter({
//     credential: cert({
//       privateKey: process.env.NEXT_FIREBASE_PRIVATE_KEY
//         ? process.env.NEXT_FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n")
//         : undefined,
//       clientEmail: process.env.NEXT_FIREBASE_CLIENT_EMAIL,
//       projectId: process.env.NEXT_FIREBASE_PROJECTID,
//     }),
//   }),
// };

// const handler = NextAuth(authoptions);

// export { handler as GET, handler as POST };

// import { customUser } from '';
// import NextAuth, { User } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       //this field is not necessary
//       //unless you use the built-in form.
//       //However it also gives us our "credentials" type below.

//       credentials: {
//         login: { label: "username" },
//         password: { label: "password", type: "password" },
//       },

//       //the credentials are passed with our
//       //login form.
//       async authorize(credentials) {
//         //verify our credentials using the route
//         //we created above
//         const user: customUser | null = await fetch(
//           `${process.env.serverURL}/api/verification`,
//           {
//             method: "POST",
//             body: JSON.stringify(credentials),
//             cache: "no-cache", //! To be removed after done testing
//           }
//         ).then(async (res) => {
//           if (res.ok) return await res.json();
//           else return null;
//         });

//         if (user && user.username) {
//           const sessionUser: User = {
//             id: user.id, // required string !!!
//             name: user.username, // undefined | null | string
//             email: undefined, // undefined | null | string
//             image: undefined, // undefined | null | string
//           };

//           return sessionUser;
//         }

//         return null;
//       },
//     }),
//   ],

//   //remove this field
//   //if you use the built-in form
//   pages: {
//     signIn: "/admin/login", //default is /api/auth/signin
//     //this will redirect us
//     //to our custom login page
//     //including an error searchParam
//     //if there is an issue.
//   },
// });

// export { handler as POST, handler as GET };

import NextAuth from "next-auth"
import { options } from './options'

const handler = NextAuth(options)

export { handler as GET, handler as POST }