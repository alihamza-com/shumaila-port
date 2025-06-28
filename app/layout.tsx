
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ReviewSidebar from "@/components/reViews"
import { ReviewSidebarProvider } from "@/components/ReviewSidebarContext"
import ReviewToggleButton from "@/components/ReviewToggleButton"
import FloatingWhatsApp from "@/components/floating-whatsapp"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sushmeela - Expert Content Writer & SEO Copywriter",
  description:
    "Discover Sushmeela's professional content writing portfolio. Expert in SEO content, blog writing, and copywriting to boost engagement and rankings.",
  keywords: [
    "content writer",
    "SEO content",
    "blog writing",
    "copywriting",
    "content strategy",
    "freelance writer",
    "Sushmeela portfolio",
    "storycup"
  ],
  authors: [{ name: "Sushmeela" }],
  openGraph: {
    title: "Sushmeela - Expert Content Writer & Copywriter",
    description:
      "Explore Sushmeela's portfolio of engaging blog posts, SEO content, and persuasive copywriting for businesses and brands.",
    type: "website",
    url: "https://storycup.vercel.app/", // Replace with your actual domain
    images: [
      {
        url: "contentwriterhomepage.jpeg", // Replace with a relevant image for social sharing
        width: 1200,
        height: 630,
        alt: "Sushmeela Content Writing Portfolio",
      },
    ],
    siteName: "Sushmeela Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sushmeela - Expert Content Writer & Copywriter",
    description:
      "Explore Sushmeela's portfolio of engaging blog posts, SEO content, and persuasive copywriting.",
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
      name: "Sushmeela",
      jobTitle: "Content Writer & SEO Copywriter",
      url: "https://storycup.vercel.app/", // Replace with your actual domain
      sameAs: [
        "https://www.linkedin.com/in/Sushmeela", // Replace with your LinkedIn
        "https://twitter.com/Sushmeela", // Replace with your Twitter
      ],
      description:
        "Sushmeela is a professional content writer specializing in SEO content, blog writing, and copywriting for businesses and brands.",
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
        <ReviewSidebarProvider>
          <ReviewSidebar />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children} 
           <FloatingWhatsApp/>
          </ThemeProvider>
        </ReviewSidebarProvider>
      </body>
    </html>
  )
}
