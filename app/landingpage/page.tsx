import LandingpageHero from "@/components/landingpageHero";
import LandingpageTrusted from "@/components/landingpageTrusted";
import LandingpageNavbar from "@/components/landingpagenavbar";
import Zigzag from "@/components/zigzag/Zigzag";
import React from "react";

const Page = () => {
  return (
    <>
      <LandingpageNavbar />
      <LandingpageHero />
      <LandingpageTrusted />
      <Zigzag />
      {/* <LandingpageFeatures /> */}
    </>
  );
};

export default Page;
