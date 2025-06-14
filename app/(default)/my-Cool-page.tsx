"use client";

import { CallToAction } from "@/componentsV2/CallToAction";
import { Faqs } from "@/componentsV2/Faqs";
import { Footer } from "@/componentsV2/Footer";
import { Header } from "@/componentsV2/Header";
import { Hero } from "@/componentsV2/Hero";
import { PrimaryFeatures } from "@/componentsV2/PrimaryFeatures";
import { Reviews } from "@/componentsV2/Reviews";
import { SecondaryFeatures } from "@/componentsV2/SecondaryFeatures";
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
       {/* <Pricing /> */}
       <Faqs />
     </main>
     <Footer />
   </>
  )
}

export default MyDefaultPage