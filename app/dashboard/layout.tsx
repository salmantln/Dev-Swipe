"use client";

import React from "react";

// import { Metadata } from "next";
import DashboardNavbarV2 from "@/dashboard_components/navbar/dashboardNavbar";
import GptSidebar from "@/dashboard_components/sidebar/gptSidebar";
import SideNav from "@/dashboard_components/sidenav";

// export const metadata: Metadata = {
//   title: "DevSwipe: Discover Top Tech and Dev Jobs with an Easy Swipe ",
//   description:
//     "✓ Discover your ideal job role ✓ 1000+ job opportunities ✓ Simple, anonymous application ✓ Get the DevSwipe-App ✓ PlayStore & AppStore ✓ Dev Swipe",
//   applicationName: "DevSwipe",
//   authors: [{ name: "Salman Lartey", url: "https://dev-swipe.com/test" }],
//   keywords: ["job board", "jobboard, dev swipe"],
//   twitter: {
//     card: "summary_large_image",
//   },
//   // manifest: '/manifest.webmanifest',
//   openGraph: {
//     url: "https://dev-swipe.com/test",
//     // images: [
//     //   {
//     //     width: 1200,
//     //     height: 630,
//     //     url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png",
//     //   },
//     // ],
//   },
// };

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <>
    //   <body className="bg-gray-50 ">
    //     <DashboardNavbarV2 />

    //     {/* <GptSidebar /> */}
    //     <SideNav/>
    //     {/* <GptSidebar onSectionSelect={handleSectionChange} /> */}
    //     {/* <Sidebar/> */}

    //     <div className="w-full pt-20 lg:pl-99 pl-11  sm:px-6 md:px-8 lg:ps-80 lg:pe-60 ">
    //       {/* {renderSection()} */}
    //       {children}
    //     </div>
    //   </body>
    // </>

    <>
      {/* <DashboardNavbarV2 /> */}
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
