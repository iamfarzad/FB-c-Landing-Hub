
import type { LucideIcon } from 'lucide-react';
import { Home, Info, Settings, Mail, Zap, Brain, Presentation, BarChart3, Bot, Search, Sun, Sparkles, Briefcase, MessageSquare, LayoutDashboard, Lightbulb, BookOpen } from 'lucide-react';

export const SITE_NAME = "F.B/c";
export const SITE_DESCRIPTION = "AI Consulting & Workshops by Farzad Bayat";

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

// Icons for specific pages not in main NAV_LINKS but used elsewhere
export const WORKSHOPS_ICON = BookOpen; // Changed to BookOpen for variety
export const RECOMMENDATIONS_ICON = Lightbulb; // Changed to Lightbulb
export const AI_DEMO_ICON = Bot;


export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Settings },
  { href: "/workshops", label: "Workshops", icon: WORKSHOPS_ICON },
  { href: "/ai-demo", label: "AI Demo", icon: AI_DEMO_ICON },
  { href: "/recommendations", label: "Recommendations", icon: RECOMMENDATIONS_ICON },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
];


export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const SERVICES_LIST: Service[] = [
  { icon: Zap, title: "AI Strategy Consulting", description: "Develop a roadmap for AI integration in your business." },
  { icon: Brain, title: "Custom AI Solutions", description: "Tailored AI models and applications for your specific needs." },
  { icon: Presentation, title: "AI Workshops & Training", description: "Upskill your team with hands-on AI training." },
  { icon: BarChart3, title: "Data Analytics & Insights", description: "Leverage data to make informed business decisions." },
];

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
};

export const TESTIMONIALS_LIST: Testimonial[] = [
  { quote: "Farzad's insights transformed our approach to AI. Highly recommended!", name: "Alex Chen", company: "Tech Solutions Inc." },
  { quote: "The AI workshop was incredibly valuable for our team. Practical and engaging.", name: "Maria Rodriguez", company: "Innovate Ltd." },
  { quote: "Working with Farzad helped us unlock new efficiencies with AI.", name: "John B. Goode", company: "Growth Co." },
];

export type CaseStudy = {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  dataAiHint: string;
};

export const CASE_STUDIES_LIST: CaseStudy[] = [
  { id: "1", title: "AI-Powered Automation for Retail", summary: "Reduced operational costs by 30% through intelligent automation.", imageUrl: "https://placehold.co/600x400.png", dataAiHint: "retail technology" },
  { id: "2", title: "Predictive Analytics in Healthcare", summary: "Improved patient outcomes with AI-driven predictive modeling.", imageUrl: "https://placehold.co/600x400.png", dataAiHint: "healthcare analytics" },
];

export const CHATBOT_ICON = Bot;
export const SEARCH_ICON = Search;
export const THEME_ICON = Sun;
export { Sparkles }; // Exporting Sparkles if it was intended to be used elsewhere directly.
// If Sparkles is only for RECOMMENDATIONS_ICON (now Lightbulb), this export can be removed.
// For safety, keeping it if it was used directly by other prompts.

