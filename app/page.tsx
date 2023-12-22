"use client";

import { Footer } from "@/components/footer";
import { HeroIllustration } from "@/components/hero";
import Hero from "@/components/hero/Hero";
import HeroV2 from "@/components/hero/hero_v2";
import Navbar from "@/components/nav/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>

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
