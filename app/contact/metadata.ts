import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Suhumeela - Best Content Writer in Pakistan",
  description:
    "Contact Suhumeela for top content writing services in Pakistan, SEO content, and copywriting via WhatsApp or email.",
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
  authors: [{ name: "Suhumeela" }],
  openGraph: {
    title: "Contact Suhumeela - Best Content Writer in Pakistan",
    description:
      "Reach Suhumeela for expert content writing services, SEO content, and copywriting in Pakistan via WhatsApp or email.",
    type: "website",
    url: "https://yourwebsite.com/contact",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Suhumeela for Content Writing Services",
      },
    ],
    siteName: "Suhumeela Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Suhumeela - Content Writing Services",
    description:
      "Get in touch with Suhumeela for SEO content, blog writing, and copywriting services in Pakistan, USA, and Dubai.",
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
      name: "Suhumeela",
      jobTitle: "Content Writer & SEO Copywriter",
      url: "https://yourwebsite.com/contact",
      sameAs: [
        "https://www.linkedin.com/in/suhumeela",
        "https://twitter.com/suhumeela",
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
        "Contact Suhumeela, a top content writer in Pakistan, for professional content writing services, including SEO content, blog writing, and copywriting, via WhatsApp or email.",
    }),
  },
}
