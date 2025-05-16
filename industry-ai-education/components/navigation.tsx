"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-medium">
              <span className="text-primary">Future</span>Business
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#industrial-revolution"
                className="text-sm text-slate-600 hover:text-primary transition-colors"
              >
                Industrial Evolution
              </Link>
              <Link href="#competencies" className="text-sm text-slate-600 hover:text-primary transition-colors">
                Future Skills
              </Link>
              <Link href="#changing-roles" className="text-sm text-slate-600 hover:text-primary transition-colors">
                Evolving Roles
              </Link>
              <Link href="#ai-section" className="text-sm text-slate-600 hover:text-primary transition-colors">
                AI Integration
              </Link>
              <Link href="/literature" className="text-sm text-slate-600 hover:text-primary transition-colors">
                Literature
              </Link>
              <Button size="sm" variant="outline" className="ml-4">
                Contact Us
              </Button>
            </nav>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          <Link
            href="#industrial-revolution"
            className="text-xl font-medium hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Industrial Evolution
          </Link>
          <Link
            href="#competencies"
            className="text-xl font-medium hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Future Skills
          </Link>
          <Link
            href="#changing-roles"
            className="text-xl font-medium hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Evolving Roles
          </Link>
          <Link
            href="#ai-section"
            className="text-xl font-medium hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            AI Integration
          </Link>
          <Link
            href="/literature"
            className="text-xl font-medium hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Literature
          </Link>
          <Button className="mt-8">Contact Us</Button>
        </nav>
      </div>
    </>
  )
}

