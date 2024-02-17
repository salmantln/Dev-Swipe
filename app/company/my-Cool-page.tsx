"use client";

import React from 'react'


import { CTA } from "@/components/call-to-action";
import { Faq } from "@/components/faq";
import { Features } from "@/components/feature";
import Zigzag from "@/components/zigzag/Zigzag";
import type { Metadata } from "next";
import { CallToAction } from "@/componentsV2/CallToAction";
import { Faqs } from "@/componentsV2/Faqs";
import { Footer } from "@/componentsV2/Footer";
import { Header } from "@/componentsV2/Header";
// import { HeroCompany } from "../../components/hero/hero_company";
import { Hero } from "@/company_components/Hero";
import { Pricing } from "@/componentsV2/Pricing";
import { PrimaryFeatures } from "@/componentsV2/PrimaryFeatures";
import { Reviews } from "@/componentsV2/Reviews";
import { SecondaryFeatures } from "@/componentsV2/SecondaryFeatures";


export const metadata: Metadata = {
  title: "DevSwipe: Developer jobs and UI/UX jobs with an Easy Swipe ",
  description:
    "✓ Discover your ideal job role ✓ 1000+ job opportunities ✓ Simple, anonymous application ✓ Get the DevSwipe-App ✓ PlayStore & AppStore ✓ Dev Swipe",
  applicationName: "DevSwipe",
  authors: [{ name: "Salman Lartey", url: "https://dev-swipe.com" }],
  keywords: [
    "dev swipe",
    "developer jobs",
    "ui/ux jobs",
    "job boards for tech jobs",
    "best job boards for tech jobs",
    "ux design job boards",
    "ai job board",
    "swe job board",
    "stage software engineer",
  ],
  twitter: {
    card: "summary_large_image",
  },
  // manifest: '/manifest.webmanifest',
  openGraph: {
    url: "https://dev-swipe.com/",
  },
};

const MyDefaultPage = () => {
  return (
    <>
    <Header />
     <main>
       <Hero />
       <PrimaryFeatures />
       <SecondaryFeatures />
       <CallToAction />
       <Reviews />
       <Pricing />
       <Faqs />
     </main>
     <Footer />
   </>
  )
}

export default MyDefaultPage