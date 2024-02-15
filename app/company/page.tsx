"use client"; 

import HeroCompany from "@/components/hero/hero_company";
// import Pricing from "@/components/price/Pricing";
import React from "react";

import type { Metadata } from "next";
import FeaturesCompany from "@/components/feature/FeaturesCompany";
import { CTACompany } from "@/components/call-to-action";

import { CallToAction } from "@/componentsV2/CallToAction";
import { Faqs } from "@/componentsV2/Faqs";
import { Footer } from "@/componentsV2/Footer";
import { Header } from "@/componentsV2/Header";
import { Hero } from "@/componentsV2/Hero";
import { Pricing } from "@/componentsV2/Pricing";
import { PrimaryFeatures } from "@/componentsV2/PrimaryFeatures";
import { Reviews } from "@/componentsV2/Reviews";
import { SecondaryFeatures } from "@/componentsV2/SecondaryFeatures";

// export const metadata: Metadata = {
//   title: "Find the perfect candidate for your job listings | DevSwipe",
//   description: "",
//   applicationName: "DevSwipe",
//   authors: [{ name: "Salman Lartey", url: "https://dev-swipe.com/" }],
//   keywords: ["swipe", "swipe your dream job, devswipe, hire, match"],
//   twitter: {
//     card: "summary_large_image",
//   },
//   openGraph: {
//     url: "https://dev-swipe.com/",
//   },
// };

const CompanyPage = () => {
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
    // <main className="flex flex-col justify-between min-h-screen p-1">
    //   <HeroCompany />
    //   <CTACompany />
    //   <FeaturesCompany />
    //   {/* <Pricing/> */}
    // </main>
  );
};

export default CompanyPage;
