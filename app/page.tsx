"use client";

import { Footer } from "@/components/footer";
import { HeroIllustration } from "@/components/hero";
import Hero from "@/components/hero/Hero";
import HeroV2 from "@/components/hero/hero_v2";
import Navbar from "@/components/nav/Navbar";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Dev Swipe - Revolutionizing Job Matching for Software Engineers"
        description="✓ Discover your ideal software engineering role ✓ 1000+ job opportunities ✓ Simple, anonymous application ✓ Get the Dev Swipe App ✓ Available on PlayStore & AppStore ✓ Dev Swipe"
        canonical="https://www.dev-swipe.com/"
        openGraph={{
          url: "https://www.dev-swipe.com/",
          title: "Dev Swipe - Next-Gen Job Matching",
          description:
            "Join Dev Swipe to connect with top software engineering talent and leading tech companies. Swipe right to your future career or employee!",
          images: [
            {
              url: "https://www.dev-swipe.com/images/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Dev Swipe App Interface",
              type: "image/jpeg",
            },
            // ... other images
          ],
          siteName: "Dev Swipe",
        }}
        twitter={{
          handle: "@devswipe",
          site: "@devswipe",
          cardType: "summary_large_image",
        }}
      />
      <main className="flex flex-col justify-between min-h-screen p-4">
        <Navbar />
        <div>
          {/* Your main content goes here */}
          <Hero />
          {/* ... other content ... */}
          <Footer />
        </div>
      </main>
    </>
  );
}
