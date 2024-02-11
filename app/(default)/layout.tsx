"use client";

import { useEffect } from "react";
import { Faq } from "@/components/faq";
import { CTA } from "@/components/call-to-action";
import AOS from 'aos';
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
// import 'aos/dist/aos.css'

// import PageIllustration from '@/components/page-illustration'
// import Footer from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  });

  return (
    <>
      <main className="grow bg-gray-500 ">
      <Navbar/>
        {/* <PageIllustration /> */}

        {children}

        <div className="flex flex-col justify-between min-h-screen">
          <div className="w-full">
          <Faq />
          </div>
          <CTA />
        </div>
        <Footer />
      </main>

      {/* <Footer /> */}
    </>
  );
}
