import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Sushmeela - Best Content Writer in Pakistan",
  description:
    "Contact Sushmeela for top content writing services in Pakistan, SEO content, and copywriting via WhatsApp or email.",
  keywords: [
    "content writer Karachi contact number",
    "content writer Karachi contact number WhatsApp",
    "best content writer Karachi contact number",
    "best content writing services",
    "content writing services in Pakistan",
    "article writing services in Pakistan",
    "content writing agency",
    "best SEO content writer in Pakistan",
    "freelance content writer",
    "SEO copywriting",
    "blog writing services",
    "professional content writing services",
    "content writing in Dubai",
    "best copywriter in USA",
    "freelance copywriter Australia",
    "real estate content writer",
    "marketing content writer",
    "web content writer",
    "content writer rates per word",
    "freelance content writer near me",
  ],
  authors: [{ name: "Sushmeela" }],
  openGraph: {
    title: "Contact Sushmeela - Best Content Writer in Pakistan",
    description:
      "Reach Sushmeela for expert content writing services, SEO content, and copywriting in Pakistan via WhatsApp or email.",
    type: "website",
    url: "https://yourwebsite.com/contact",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Sushmeela for Content Writing Services",
      },
    ],
    siteName: "Sushmeela Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sushmeela - Content Writing Services",
    description:
      "Get in touch with Sushmeela for SEO content, blog writing, and copywriting services in Pakistan, USA, and Dubai.",
    images: ["/contact-og-image.jpg"],
  },
  alternates: {
    canonical: "https://yourwebsite.com/contact",
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
      url: "https://yourwebsite.com/contact",
      sameAs: [
        "https://www.linkedin.com/in/Sushmeela",
        "https://twitter.com/Sushmeela",
        "https://wa.me/yourwhatsappnumber",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "yourphonenumber",
          contactType: "Customer Service",
          areaServed: ["Pakistan", "Karachi", "USA", "Dubai", "Australia", "UK"],
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          url: "https://wa.me/yourwhatsappnumber",
          contactOption: "WhatsApp",
          areaServed: ["Pakistan", "Karachi"],
        },
      ],
      description:
        "Contact Sushmeela, a top content writer in Pakistan, for professional content writing services, including SEO content, blog writing, and copywriting, via WhatsApp or email.",
    }),
  },
}
