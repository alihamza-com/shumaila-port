import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, Search, ArrowRight } from "lucide-react"







const blogPosts = [
{
  id: 1,
  title: "PAKISTAN'S FIRST SMART-TECH TOWER",
  excerpt: "Learn practical tips to improve your blog writing and keep readers hooked from start to finish.",
  image: "/tow.png?height=200&width=400",
  category: "Blog Writing",
  date: "2024-04-10",
  readTime: "6 min read",
  liveUrl: "https://chakorventures.com/",
  featured: true,
},
  {
    id: 2,
    title: "Crafting High-Converting Website Copy",
    excerpt: "Discover the elements that make web copy persuasive, SEO-friendly, and effective for conversions.",
    image: "/it.png?height=200&width=400",
    category: "Website Copy",
    date: "2024-04-05",
    readTime: "7 min read",
    liveUrl: "https://intelisenseit.com",
    featured: true,
  },
  {
    id: 3,
    title: "How to Write Press Releases Journalists Actually Read",
    excerpt: "A guide to writing compelling, professional press releases that get published.",
    image: "/110sol.png?height=200&width=400",
    category: "Press Release",
    date: "2024-03-28",
    readTime: "5 min read",
    liveUrl: "https://110solutionsinc.com/",
    featured: false,
  },
  {
    id: 4,
    title: "Mastering SEO Content: A Writer's Perspective",
    excerpt: "Explore how to create content that ranks while keeping your audience engaged.",
    image: "/6i.png?height=200&width=400",
    category: "SEO Content",
    date: "2024-03-20",
    liveUrl: "https://6itrade.com",
    readTime: "8 min read",
    featured: false,
  },
  
  {
    id: 5,
    title: "Content Calendars: The Key to Consistent Publishing",
    excerpt: "Why content calendars are crucial and how to create one that aligns with your business goals.",
    image: "/wate.png?height=200&width=400",
    category: "Strategy",
    date: "2024-03-01",
    liveUrl: "https://tpswatertechnologies.com.pk",
    readTime: "4 min read",
    featured: false,
  },
]

const categories = ["All", "Blog Writing", "Website Copy", "Press Release", "SEO Content", "Thought Leadership", "Strategy"]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Writing Insights & Tips</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my best writing tips, content strategy insights, and SEO techniques for better content performance.
          </p>
        </section>

        {/* Search and Categories */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary hover:text-primary-foreground"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4">Featured</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto" asChild>
                    <a href={`${post.liveUrl}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg hover:text-primary transition-colors">
                    <a href={`${post.liveUrl}`}>{post.title}</a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={`${post.liveUrl}`}>Read More</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        
      </div>

      <Footer />
    </div>
  )
}