"use client";

import React, { useState } from "react";
import DashboardNavbarV2 from "@/dashboard_components/navbar/Navbar";
import GptSidebar from "@/dashboard_components/sidebar/gptSidebar";
import { DashboardPage } from "./dashboard/page";
import { JobPostsPage } from "./job-post/page";


export default function Page() {
  const [selectedSection, setSelectedSection] = useState("");

  const handleSectionChange = (section: any) => {
    setSelectedSection(section);
  };

  // Function to determine what to render based on `selectedSection`
  const renderSection = () => {
    switch (selectedSection) {
      case "link1":
        return <DashboardPage />;
      case "link2":
        return <JobPostsPage />;
      case "link3":
        return <div>Content for Link 3</div>;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <>
      <body className="bg-gray-50 dark:bg-slate-900">
        <DashboardNavbarV2 />

         <GptSidebar onSectionSelect={handleSectionChange} />

        <main className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
          {/* <DashboardPage /> */}

          {renderSection()}
        </main>
      </body>
    </>

  );
}
