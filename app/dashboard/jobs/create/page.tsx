// import CreateJob from './my-Cool-page';

// export default function Home() {
//   return (
//     <>
//      <CreateJob />
//     </>
//   );
// }


"use client";

import { CallToAction } from "@/componentsV2/CallToAction";
import { Faqs } from "@/componentsV2/Faqs";
import { Footer } from "@/componentsV2/Footer";
import { Header } from "@/componentsV2/Header";
import { Hero } from "@/componentsV2/Hero";
import { PrimaryFeatures } from "@/componentsV2/PrimaryFeatures";
import { Reviews } from "@/componentsV2/Reviews";
import { SecondaryFeatures } from "@/componentsV2/SecondaryFeatures";
import dynamic from "next/dynamic";
import { useMemo } from "react";
export default function CreateJob() {
  
  const ClientComponent = useMemo(
    () =>
      dynamic(
        () => import("../../../../dashboard_components/client_components"),
        {
          ssr: false,
        }
      ),
    []
  );

  return (
    <>
      {/* <DetailJob /> */}

      <ClientComponent />
    </>
  );
}
