import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl">Suhumaila</span>
            </div>
            <p className="text-muted-foreground">Full-Stack Developer crafting exceptional digital experiences.</p>
            <div className="flex space-x-2">
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="mailto:alex@example.com">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">Web Development</span>
              </li>
              <li>
                <span className="text-muted-foreground">UI/UX Design</span>
              </li>
              <li>
                <span className="text-muted-foreground">Mobile Apps</span>
              </li>
              <li>
                <span className="text-muted-foreground">Consulting</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">shustorycup@example.com</span>
              </li>
              <li>
                <span className="text-muted-foreground">+92 3181463425</span>
              </li>
              <li>
                <span className="text-muted-foreground">Lahore ,Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} @2025 Suhumaila. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
