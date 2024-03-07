import PrelineScript from "@/components/PrelineScript";
import { Analytics } from "@vercel/analytics/react";
import "aos/dist/aos.css";
import { Architects_Daughter, Inter } from "next/font/google";
import Script from "next/script";
// import { useEffect } from "react";
import getServerSession from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import AuthProvider from "./context/AuthProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession(options);
  return (
    <>
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
          `}
        </Script>
      </head>

      <html lang="en">
        <body
          className={`${inter.variable} ${architects_daughter.variable} `}
        >
          <AuthProvider>
            {children}
            <Analytics />
          </AuthProvider>
        </body>
        <PrelineScript />
      </html>
    </>
  );
}
