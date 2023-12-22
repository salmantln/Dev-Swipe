import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Dev Swipe",
  description: "✓ Discover your ideal software engineering role ✓ 1000+ job opportunities ✓ Simple, anonymous application ✓ Get the Dev Swipe App ✓ Available on PlayStore & AppStore ✓ Dev Swipe",
  applicationName: "Dev ",
  authors: [{ name: "Salman Lartey", url: "https://dev-swipe.com" }],
  keywords: ["swipe", "swipe your dream job, dev swipe"],
  twitter: {
    card: "summary_large_image",
  },
  // manifest: '/manifest.webmanifest',
  openGraph: {
    url: "https://dev-swipe.com/",
    // images: [
    //   {
    //     width: 1200,
    //     height: 630,
    //     url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png",
    //   },
    // ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        </body>
    </html>
  )
}
