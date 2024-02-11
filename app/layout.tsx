"use client";

import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/footer";
import Navbar from "@/components/nav/Navbar";
import { Inter, Architects_Daughter } from "next/font/google";
import PrelineScript from "@/components/PrelineScript";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import AuthProvider from "./context/AuthProvider";
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
          <PrelineScript />
          {/* <Navbar  />
        {children}
        <Footer />
        <Analytics />
        <PrelineScript /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
