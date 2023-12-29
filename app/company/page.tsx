import HeroCompany from "@/components/hero/hero_company";
import Pricing from "@/components/price/Pricing";
import React from "react";

import type { Metadata } from "next";
import FeaturesCompany from "@/components/feature/FeaturesCompany";
import { CTACompany } from "@/components/call-to-action";

export const metadata: Metadata = {
  title: "Find the perfect candidate for your job listings | DevSwipe",
  description: "",
  applicationName: "DevSwipe",
  authors: [{ name: "Salman Lartey", url: "https://dev-swipe.com/" }],
  keywords: ["swipe", "swipe your dream job, devswipe, hire, match"],
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://dev-swipe.com/",
  },
};

const CompanyPage = () => {
  return (
    <main className="flex flex-col justify-between min-h-screen p-4">
      <HeroCompany />
      <CTACompany />
      <FeaturesCompany />
      {/* <Pricing/> */}
    </main>
  );
};

export default CompanyPage;
