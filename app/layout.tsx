"use client";

// import { Inter } from "next/font/google";
import PrelineScript from "@/components/PrelineScript";
import { Analytics } from "@vercel/analytics/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Architects_Daughter, Inter } from "next/font/google";
import { useEffect } from "react";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${architects_daughter.variable} `}
        // className={`${inter.variable} ${architects_daughter.variable} pr-8 pl-8`}
      >
        <AuthProvider>
          {children}
          <Analytics />
         
          {/* <Navbar  />
        {children}
        <Footer />
        <Analytics />
        <PrelineScript /> */}
        </AuthProvider>
       
      </body>
      <PrelineScript />
    </html>
  );
}
