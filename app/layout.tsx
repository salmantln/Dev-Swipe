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

// export const metadata: Metadata = {
//   title: "DevSwipe: Discover Top Tech and Dev Jobs with an Easy Swipe ",
//   description:
//     "✓ Discover your ideal job role ✓ 1000+ job opportunities ✓ Simple, anonymous application ✓ Get the DevSwipe-App ✓ PlayStore & AppStore ✓ Dev Swipe",
//   applicationName: "Dev ",
//   authors: [{ name: "Salman Lartey", url: "https://dev-swipe.com" }],
//   keywords: ["swipe", "swipe your dream job, dev swipe"],
//   twitter: {
//     card: "summary_large_image",
//   },
//   // manifest: '/manifest.webmanifest',
//   openGraph: {
//     url: "https://dev-swipe.com/",
//     // images: [
//     //   {
//     //     width: 1200,
//     //     height: 630,
//     //     url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png",
//     //   },
//     // ],
//   },
// };

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
        className={`${inter.variable} ${architects_daughter.variable} pr-8 pl-8`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <PrelineScript />
      </body>
    </html>
  );
}
