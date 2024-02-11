"use client";

import DashboardNavbarV2 from "@/dashboard_components/navbar/dashboardNavbar";
import GptSidebar from "@/dashboard_components/sidebar/gptSidebar";
import { useState } from "react";

import JobPostsPage from "./job-post/page";
import DashboardPage from "@/dashboard_components/page1/dashboardpage";
import Sidebar from "@/dashboard_components/sidebar/sidebar";

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
        {/* <Sidebar/> */}

        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
          {renderSection()}
        </div>
      </body>
    </>
  );
}
