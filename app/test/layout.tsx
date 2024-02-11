import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevSwipe: Discover Top Tech and Dev Jobs with an Easy Swipe ",
  description:
    "✓ Discover your ideal job role ✓ 1000+ job opportunities ✓ Simple, anonymous application ✓ Get the DevSwipe-App ✓ PlayStore & AppStore ✓ Dev Swipe",
  applicationName: "DevSwipe",
  authors: [{ name: "Salman Lartey", url: "https://dev-swipe.com/test" }],
  keywords: ["job board", "jobboard, dev swipe"],
  twitter: {
    card: "summary_large_image",
  },
  // manifest: '/manifest.webmanifest',
  openGraph: {
    url: "https://dev-swipe.com/test",
    // images: [
    //   {
    //     width: 1200,
    //     height: 630,
    //     url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png",
    //   },
    // ],
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
