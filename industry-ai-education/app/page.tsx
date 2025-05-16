import Link from "next/link"
import { BookOpen, Brain, Lightbulb, Users, Library } from "lucide-react"
import HeroSection from "@/components/hero-section"
import IndustrialRevolutionTimeline from "@/components/industrial-revolution-timeline"
import CompetenciesSection from "@/components/competencies-section"
import RolesSection from "@/components/roles-section"
import AISection from "@/components/ai-section"
import LocalLLMSection from "@/components/local-llm-section"
import Navigation from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />

      <div className="container mx-auto px-4 py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <Link
            href="#industrial-revolution"
            className="group flex flex-col items-center p-8 rounded-xl border border-transparent bg-gradient-to-b from-slate-50 to-white hover:border-slate-200 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="rounded-full bg-gradient-to-br from-slate-100 to-white p-4 mb-6 shadow-sm group-hover:shadow group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3">Industrial Evolution</h3>
            <p className="text-center text-muted-foreground text-sm">
              From mechanical production to human-centered intelligence
            </p>
          </Link>

          <Link
            href="#competencies"
            className="group flex flex-col items-center p-8 rounded-xl border border-transparent bg-gradient-to-b from-slate-50 to-white hover:border-slate-200 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="rounded-full bg-gradient-to-br from-slate-100 to-white p-4 mb-6 shadow-sm group-hover:shadow group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3">Future Skills</h3>
            <p className="text-center text-muted-foreground text-sm">Essential competencies for tomorrow's workplace</p>
          </Link>

          <Link
            href="#changing-roles"
            className="group flex flex-col items-center p-8 rounded-xl border border-transparent bg-gradient-to-b from-slate-50 to-white hover:border-slate-200 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="rounded-full bg-gradient-to-br from-slate-100 to-white p-4 mb-6 shadow-sm group-hover:shadow group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3">Evolving Roles</h3>
            <p className="text-center text-muted-foreground text-sm">
              Transformation of workplace dynamics and leadership
            </p>
          </Link>

          <Link
            href="#ai-section"
            className="group flex flex-col items-center p-8 rounded-xl border border-transparent bg-gradient-to-b from-slate-50 to-white hover:border-slate-200 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="rounded-full bg-gradient-to-br from-slate-100 to-white p-4 mb-6 shadow-sm group-hover:shadow group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3">AI Integration</h3>
            <p className="text-center text-muted-foreground text-sm">
              Strategic implementation of AI for business growth
            </p>
          </Link>

          <Link
            href="/literature"
            className="group flex flex-col items-center p-8 rounded-xl border border-transparent bg-gradient-to-b from-slate-50 to-white hover:border-slate-200 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="rounded-full bg-gradient-to-br from-slate-100 to-white p-4 mb-6 shadow-sm group-hover:shadow group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300">
              <Library className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3">Literature</h3>
            <p className="text-center text-muted-foreground text-sm">Curated resources on AI in business domains</p>
          </Link>
        </div>
      </div>

      <section id="industrial-revolution" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-4">
              Industrial <span className="font-semibold">Evolution</span>
            </h2>
            <p className="text-muted-foreground">
              Tracing the transformation of industry from mechanical production to human-centered intelligence
            </p>
          </div>
          <IndustrialRevolutionTimeline />
        </div>
      </section>

      <section id="competencies" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-4">
              Future <span className="font-semibold">Skills</span>
            </h2>
            <p className="text-muted-foreground">Essential competencies for success in tomorrow's business landscape</p>
          </div>
          <CompetenciesSection />
        </div>
      </section>

      <section id="changing-roles" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-4">
              Evolving <span className="font-semibold">Roles</span>
            </h2>
            <p className="text-muted-foreground">
              How leadership and team dynamics are transforming in the digital era
            </p>
          </div>
          <RolesSection />
        </div>
      </section>

      <section id="ai-section" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-4">
              AI <span className="font-semibold">Integration</span>
            </h2>
            <p className="text-muted-foreground">
              Leveraging artificial intelligence to drive business transformation and growth
            </p>
          </div>
          <AISection />

          <div className="mt-24">
            <LocalLLMSection />
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-medium mb-4">About</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                This interactive resource explores the evolution of industry, business roles, and AI integration
                strategies for forward-thinking organizations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Contact</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                For more information on implementing these concepts in your organization, reach out to our consulting
                team.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Resources</h3>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>
                  <a href="/literature" className="hover:text-white transition-colors">
                    Literature Database
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Implementation Guides
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
            <p>Based on research by Vidar Luth-Hanssen</p>
            <p className="mt-2">© {new Date().getFullYear()} - Future Business Insights</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

