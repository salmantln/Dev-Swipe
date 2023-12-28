"use client";

import { useEffect } from "react";
import { Faq, FaqCompany } from "@/components/faq";
import { CTA } from "@/components/call-to-action";
import AOS from "aos";
import HeroCompany from "@/components/hero/hero_company";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <main className="grow">
        {/* <PageIllustration /> */}
        {children}
        <div className="flex flex-col justify-between p-4">
          <div className="w-full">
            <FaqCompany />
          </div>
          {/* <CTA /> */}
        </div>
      </main>
    </>
  );
}
