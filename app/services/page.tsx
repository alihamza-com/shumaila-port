import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, FileText, PenLine, Search, Newspaper, MessageCircle } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Blog & Article Writing",
    description: "Engaging, SEO-optimized content that drives traffic and builds brand authority.",
    features: ["Keyword Research", "On-page SEO", "Original & Researched Content", "Quick Turnaround"],
    price: "Starting at $100/article",
  },
  {
    icon: PenLine,
    title: "Website Copywriting",
    description: "Compelling copy for homepages, about pages, service pages, and more.",
    features: ["Conversion-Focused", "Brand Voice Aligned", "SEO Optimized", "Clear CTAs"],
    price: "Starting at $300/page",
  },
  {
    icon: Newspaper,
    title: "Press Releases & PR Writing",
    description: "Professional press releases to announce product launches, events, and company news.",
    features: ["Industry Targeted", "Journalistic Style", "Distribution-Ready", "Fast Delivery"],
    price: "Starting at $250/release",
  },
  {
    icon: Search,
    title: "SEO Content Strategy",
    description: "Content strategy planning to improve rankings and support business goals.",
    features: ["Content Audit", "SEO Planning", "Content Calendar", "Performance Reports"],
    price: "Custom Quote",
  },
]

const packages = [
  {
    name: "Starter",
    price: "$500",
    description: "Perfect for startups and personal brands",
    features: [
      "3 blog posts (up to 1,000 words)",
      "1 landing page",
      "SEO keyword integration",
      "Basic content calendar",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$1,200",
    description: "Ideal for growing businesses and agencies",
    features: [
      "6 blog posts (up to 1,200 words)",
      "3 pages of website copy",
      "Advanced SEO strategy",
      "Monthly content calendar",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    description: "For brands with large-scale content needs",
    features: [
      "Custom blog volume",
      "Sales copy & campaigns",
      "Full SEO & content audit",
      "Custom strategy & reports",
      "Dedicated account support",
    ],
    popular: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Content Writing Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            High-quality, strategic writing that informs, converts, and connects with your audience.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What I Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <Badge variant="secondary">{service.price}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pricing Packages</h2>
            <p className="text-lg text-muted-foreground">Flexible content solutions for every stage of growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "border-primary shadow-lg" : ""}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"} asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">My Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Briefing", description: "Understanding your content goals and audience" },
              { step: "02", title: "Research", description: "Keyword and competitor analysis" },
              { step: "03", title: "Writing", description: "Crafting compelling and SEO-friendly content" },
              { step: "04", title: "Delivery", description: "Final edits, approval, and publishing support" },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What industries do you specialize in?",
                answer:
                  "I write for a wide range of industries including tech, marketing, health, SaaS, and e-commerce.",
              },
              {
                question: "Do you offer revisions?",
                answer:
                  "Yes, I include 2 rounds of revisions with each piece of content to ensure it meets your expectations.",
              },
              {
                question: "How do you handle SEO?",
                answer:
                  "I use keyword research, meta tags, internal linking, and formatting techniques to boost SEO naturally.",
              },
              {
                question: "What is your turnaround time?",
                answer:
                  "Most projects are delivered within 5–7 business days, depending on length and complexity.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Ready to Elevate Your Content?</h2>
              <p className="text-muted-foreground mb-6">
                Let's discuss your content needs and bring your ideas to life with impactful writing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Writing Samples</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  )
}
