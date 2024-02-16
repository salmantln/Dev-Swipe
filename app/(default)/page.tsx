import { CTA } from "@/components/call-to-action";
import { Faq } from "@/components/faq";
import { Features } from "@/components/feature";
import Zigzag from "@/components/zigzag/Zigzag";
import type { Metadata } from "next";
import { CallToAction } from "@/componentsV2/CallToAction";
import { Faqs } from "@/componentsV2/Faqs";
import { Footer } from "@/componentsV2/Footer";
import { Header } from "@/componentsV2/Header";
import { Hero } from "@/componentsV2/Hero";
import { Pricing } from "@/componentsV2/Pricing";
import { PrimaryFeatures } from "@/componentsV2/PrimaryFeatures";
import { Reviews } from "@/componentsV2/Reviews";
import { SecondaryFeatures } from "@/componentsV2/SecondaryFeatures";
import MyDefaultPage from "./my-Cool-page";

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
    <>
      <MyDefaultPage />
    </>
    // <main
    //   className="flex flex-col justify-between min-h-screen lg:pl-15 lg:pr-15 xl:pl-32 xl:pr-32 bg-white  "

    // >
    //   {/* <main className="flex flex-col justify-between min-h-screen "> */}
    //   {/* <Navbar /> */}
    //   <div>
    //     {/* Your main content goes here */}

    //     <Features />
    //     <Zigzag />
    //     {/* <CTA /> */}
    //     {/* <Faq /> */}
    //     {/* ... other content ... */}
    //     {/* <Footer /> */}
    //   </div>
    // </main>
  );
}
