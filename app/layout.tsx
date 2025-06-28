import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alex Johnson - Full-Stack Developer & UI/UX Designer",
  description:
    "Professional portfolio of Alex Johnson, a full-stack developer and UI/UX designer specializing in React, Next.js, and modern web technologies.",
  keywords: ["web developer", "full-stack", "React", "Next.js", "UI/UX", "portfolio"],
  authors: [{ name: "Alex Johnson" }],
  openGraph: {
    title: "Alex Johnson - Full-Stack Developer",
    description: "Professional portfolio showcasing web development and design projects",
    type: "website",
  },
    generator: 'v0.dev'
}

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
