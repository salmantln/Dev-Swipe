"use client";
// Remember you must use an AuthProvider for
// client components to useSession
import { useSession } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";
// import Sidebar from "@/dashboard_components/sidebar";
import { Component, useState } from "react";
// import Navbar from "/dashboard_components/SidebarV2";
// import Navbar from "@/dashboard_components/navbar";
import UserCard from "@/components/UserCard/UserCard";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dashboard");
    },
  });

  const [fixed] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // if (isWindowAvailable()) document.documentElement.dir = 'ltr';

  // let titleConcat = "Responsive Sidebar Example";
  // if (pageTitle) titleConcat = pageTitle + " | " + titleConcat;

  // Mobile sidebar visibility state
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {/* <section className="flex flex-col gap-6">
        <UserCard user={session?.user} pagetype={"Client"} />
      </section> */}
      <div>Dashboard</div>
    </>
  );
};

export default Dashboard;
