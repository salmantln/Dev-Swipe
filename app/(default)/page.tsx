import type { Metadata } from "next";
import MyDefaultPage from "./my-Cool-page";

export const metadata: Metadata = {
  title: "DevSwipe: Developer jobs and UI/UX jobs with an Easy Swipe ",
  description:
    "✓ Discover your ideal job role ✓ 1000+ job opportunities ✓ Simple, anonymous application ✓ Get the DevSwipe-App ✓ PlayStore & AppStore ✓ Dev Swipe",
  applicationName: "DevSwipe",
  authors: [{ name: "Salman Lartey", url: "https://dev-swipe.com" }],
  keywords: [
    "dev swipe",
    "developer jobs",
    "ui/ux jobs",
    "job boards for tech jobs",
    "best job boards for tech jobs",
    "ux design job boards",
    "ai job board",
    "swe job board",
    "stage software engineer",
  ],
  twitter: {
    card: "summary_large_image",
  },
  // manifest: '/manifest.webmanifest',
  openGraph: {
    url: "https://dev-swipe.com/",
  },
};

export default function Home() {
  return (
    <>
      <MyDefaultPage />
    </>
  );
}
