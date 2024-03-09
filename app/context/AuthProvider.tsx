// 'use client';

// import { SessionProvider as Provider } from 'next-auth/react';

// type Props = {
//   children: React.ReactNode;
// }

// export default function AuthProvider({children}: Props) {
//   return (
//     <Provider>
//       {children}
//     </Provider>
//   )
// }

"use client";
import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

export default function SessionProvider({children, session}: Props) {
  return <Provider>{children}</Provider>;
}
