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
import { Hero } from "@/componentsV2/Hero";
import { Pricing } from "@/componentsV2/Pricing";
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
       <Pricing />
       <Faqs />
     </main>
     <Footer />
   </>
  )
}

export default MyDefaultPage