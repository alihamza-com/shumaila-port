
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Download, Award, GraduationCap, Briefcase } from "lucide-react"
import type { Metadata } from "next";
import { DownloadResumeButton } from "@/components/DownloadResumeButton"

export const metadata: Metadata = {
  title: "About Suhumeela - Expert Content Writer & SEO Copywriter",
  description:
    "Learn about Suhumeela, a skilled content writer specializing in SEO content, blog writing, and copywriting for brands and businesses.",
  keywords: [
  "Suhumeela",
  "content writer",
  "best content writing services",
  "content writing services in Pakistan",
  "article writing services in Pakistan",
  "best SEO content writer in Pakistan",
  "freelance content writer",
  "SEO copywriter",
  "blog writer",
  "professional content writing services",
  "content writer Karachi",
  "content writing in Dubai",
  "best copywriter in USA",
  "freelance copywriter Australia",
  "real estate content writer",
  "marketing content writer",
  "web content writer",
  "best content writing websites",
  "content writer rates per word",
  "content writer Karachi contact number",
],
  authors: [{ name: "Suhumeela" }],
  openGraph: {
    title: "About Suhumeela - Expert Content Writer",
    description:
      "Discover Suhumeela's journey as a content writer, specializing in SEO, blog writing, and persuasive copy for businesses.",
    type: "website",
    url: "https://storycup.vercel.app/about", // Replace with your actual About page URL
    images: [
      {
        url: "/aboutme.webp", // Replace with a relevant image for the About page
        width: 1200,
        height: 630,
        alt: "Suhumeela - Content Writer Profile",
      },
    ],
    siteName: "Suhumeela Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Suhumeela - Expert Content Writer",
    description:
      "Learn about Suhumeela's expertise in SEO content, blog writing, and copywriting for impactful business content.",
    images: ["/aboutme.webp"], // Replace with your actual image
  },
  alternates: {
    canonical: "https://storycup.vercel.app/about", // Replace with your actual About page URL
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
      url: "https://storycup.vercel.app/about", // Replace with your actual About page URL
      sameAs: [
        "https://www.linkedin.com/in/suhumeela", // Replace with your actual LinkedIn
        "https://twitter.com/suhumeela", // Replace with your actual Twitter
      ],
      description:
        "Suhumeela is a professional content writer with expertise in SEO content, blog writing, and copywriting, delivering engaging content for businesses and brands.",
    }),
  },
};

export default function AboutPage() {
 
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/aboutme.webp?height=128&width=128"
              alt="Suhumella"
              fill
              className="rounded-full border-4 border-primary/20"
            />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate content writer with 5+ years of experience crafting words that connect, convert, and inform.
            I specialize in web content, blogs, and brand storytelling that leaves a lasting impact.
          </p>
          <DownloadResumeButton/>
        </section>

        {/* Professional Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Professional Journey</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Senior Content Writer</CardTitle>
                    <p className="text-muted-foreground">CreativeWords Agency • 2022 - Present</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leading content strategy and writing high-impact content for tech and lifestyle brands. Collaborating with SEO specialists and marketing teams to boost engagement.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">SEO Writing</Badge>
                  <Badge variant="secondary">Blog Strategy</Badge>
                  <Badge variant="secondary">Content Planning</Badge>
                  <Badge variant="secondary">Tone & Voice</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Content Specialist</CardTitle>
                    <p className="text-muted-foreground">InspireMedia Co. • 2020 - 2022</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Produced long-form content, case studies, and email campaigns. Worked with designers to develop storytelling that aligned with brand goals.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Content Marketing</Badge>
                  <Badge variant="secondary">Email Campaigns</Badge>
                  <Badge variant="secondary">Brand Messaging</Badge>
                  <Badge variant="secondary">UX Writing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Writing & Editing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>SEO Writing</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Copywriting</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Proofreading</span>
                    <span>88%</span>
                  </div>
                  <Progress value={88} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Content Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Blog Planning</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Keyword Research</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Content Calendars</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Tools & Platforms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>WordPress</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Google Docs</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Grammarly</span>
                    <span>98%</span>
                  </div>
                  <Progress value={98} />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Bachelor of English Literature</CardTitle>
                    <p className="text-muted-foreground">National University • 2015 - 2019</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Graduated with honors. Developed strong analytical, research, and writing skills across various forms of content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>HubSpot Content Marketing Certified</CardTitle>
                    <p className="text-muted-foreground">HubSpot Academy • 2023</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Certification focused on building scalable content strategies that align with business goals and user needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Personal Interests */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Beyond the Page</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                When I'm not writing, I enjoy reading historical fiction, exploring art museums, and journaling. I’m also passionate about language learning and sharing writing tips with new creatives through workshops and webinars.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  )
}
