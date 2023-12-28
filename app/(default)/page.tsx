// "use client";

import { CTA } from "@/components/call-to-action";
import { Faq } from "@/components/faq";
import { Features } from "@/components/feature";
import Hero from "@/components/hero/Hero";
import Zigzag from "@/components/zigzag/Zigzag";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevSwipe: Discover Top Tech and Dev Jobs with an Easy Swipe ",
  description:
    "✓ Discover your ideal job role ✓ 1000+ job opportunities ✓ Simple, anonymous application ✓ Get the DevSwipe-App ✓ PlayStore & AppStore ✓ Dev Swipe",
  applicationName: "DevSwipe",
  authors: [{ name: "Salman Lartey", url: "https://dev-swipe.com" }],
  keywords: ["swipe", "swipe your dream job, dev swipe"],
  twitter: {
    card: "summary_large_image",
  },
  // manifest: '/manifest.webmanifest',
  openGraph: {
    url: "https://dev-swipe.com/",
    // images: [
    //   {
    //     width: 1200,
    //     height: 630,
    //     url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png",
    //   },
    // ],
  },
};

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen p-4">
      {/* <Navbar /> */}
      <div>
        {/* Your main content goes here */}
        <Hero />
        <Features />
        <Zigzag />
        {/* <CTA /> */}
        {/* <Faq /> */}
        {/* ... other content ... */}
        {/* <Footer /> */}
      </div>
    </main>
  );
}
