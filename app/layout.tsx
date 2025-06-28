
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Suhumeela - Expert Content Writer & SEO Copywriter",
  description:
    "Discover Suhumeela's professional content writing portfolio. Expert in SEO content, blog writing, and copywriting to boost engagement and rankings.",
  keywords: [
    "content writer",
    "SEO content",
    "blog writing",
    "copywriting",
    "content strategy",
    "freelance writer",
    "Suhumeela portfolio",
  ],
  authors: [{ name: "Suhumeela" }],
  openGraph: {
    title: "Suhumeela - Expert Content Writer & Copywriter",
    description:
      "Explore Suhumeela's portfolio of engaging blog posts, SEO content, and persuasive copywriting for businesses and brands.",
    type: "website",
    url: "https://storycup.vercel.app/", // Replace with your actual domain
    images: [
      {
        url: "contentwriterhomepage.jpeg", // Replace with a relevant image for social sharing
        width: 1200,
        height: 630,
        alt: "Suhumeela Content Writing Portfolio",
      },
    ],
    siteName: "Suhumeela Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhumeela - Expert Content Writer & Copywriter",
    description:
      "Explore Suhumeela's portfolio of engaging blog posts, SEO content, and persuasive copywriting.",
    images: ["/og-image.jpg"], // Replace with your actual image
  },
  alternates: {
    canonical: "https://storycup.vercel.app/", // Replace with your actual domain
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Suhumeela",
      jobTitle: "Content Writer & SEO Copywriter",
      url: "https://storycup.vercel.app/", // Replace with your actual domain
      sameAs: [
        "https://www.linkedin.com/in/suhumeela", // Replace with your LinkedIn
        "https://twitter.com/suhumeela", // Replace with your Twitter
      ],
      description:
        "Suhumeela is a professional content writer specializing in SEO content, blog writing, and copywriting for businesses and brands.",
    }),
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
