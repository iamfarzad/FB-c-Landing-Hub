
import type { LucideIcon } from 'lucide-react';
import { 
  Home, Info, Settings, Mail, Zap, Brain, Presentation, BarChart3, 
  Bot, Search, Sun, Sparkles, Briefcase, MessageSquare, LayoutDashboard, 
  Lightbulb, BookOpen, Pencil, Users, Award, CalendarDays, CheckCircle, 
  X as CloseIcon, Code, GitBranch, LightbulbIcon, Target, TrendingUp, HelpCircle 
} from 'lucide-react';

export const SITE_NAME = "F.B/c";
export const SITE_DESCRIPTION = "AI Consulting & Workshops by Farzad Bayat";

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const WORKSHOPS_ICON = BookOpen;
export const RECOMMENDATIONS_ICON = Sparkles;
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
  title: string;
  description: string;
  icon: LucideIcon; // Keeping icon for potential other uses
  details?: string[];
};

export const SERVICES_LIST: Service[] = [
  {
    title: "AI Strategy Consulting",
    description: "Develop a roadmap for AI integration to achieve your business goals. We help define use cases, select tools, and plan implementation.",
    icon: LightbulbIcon, // Changed from Zap
  },
  {
    title: "Custom AI Solutions",
    description: "Bespoke AI model development, including internal copilots, chatbots, and workflow automation tailored to your unique challenges.",
    icon: Brain,
  },
  {
    title: "Hands-On AI Training",
    description: "Empower your team with practical AI knowledge and skills through interactive workshops covering ChatGPT, Claude, Gemini, and more.",
    icon: Presentation,
  },
  {
    title: "AI for Data & Ops",
    description: "Unlock valuable insights from your data and automate operational tasks with advanced AI analytics and workflow automation.",
    icon: BarChart3, 
  },
];

export type Testimonial = {
  name: string;
  company: string;
  quote: string;
};

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    name: 'Alex Chen',
    company: 'Innovatech Ltd.',
    quote: 'F.B/c’s AI solutions revolutionized our workflow and boosted efficiency by 40%. Their expertise is unmatched!',
  },
  {
    name: 'Samantha Miller',
    company: 'MarketBoost Co.',
    quote: 'The AI marketing workshop was incredibly insightful. We saw immediate improvements in our campaign targeting.',
  },
  {
    name: 'David Green',
    company: 'DataDriven Inc.',
    quote: 'Thanks to F.B/c, we now have a clear AI strategy that aligns perfectly with our long-term vision.',
  },
];

export type CaseStudy = {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  dataAiHint: string;
  client?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
};

export const CASE_STUDIES_LIST: CaseStudy[] = [
  {
    id: 'ai-sales-forecasting',
    title: 'AI-Powered Sales Forecasting for E-commerce',
    summary: 'Implemented an ML model that increased sales forecast accuracy by 25%, leading to optimized inventory and reduced holding costs.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'ecommerce analytics',
  },
  {
    id: 'nlp-customer-support',
    title: 'Automated Customer Support with NLP Chatbot',
    summary: 'Deployed an AI chatbot that handles 70% of Tier-1 customer inquiries, significantly improving response times and agent productivity.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'chatbot support',
  },
  {
    id: 'cv-defect-detection',
    title: 'Manufacturing Defect Detection using Computer Vision',
    summary: 'Developed a computer vision system that identified product defects in real-time, decreasing waste by 20% and enhancing quality control.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'industrial manufacturing',
  }
];

export const CHATBOT_ICON = Bot; // Changed from MessageSquarePlus which isn't standard
export const SEARCH_ICON = Search;
export const THEME_ICON = Sun;
export { Zap, Brain, Presentation, BarChart3, Bot as FB_BotIcon, Search as FB_SearchIcon, Sun as FB_SunIcon, Sparkles as FB_SparklesIcon, Briefcase, MessageSquare, LayoutDashboard, Lightbulb as FB_LightbulbIcon, BookOpen as FB_BookOpenIcon, Pencil, Users, Award, CalendarDays, CheckCircle, Info as FB_InfoIcon, Mail as FB_MailIcon, Home as FB_HomeIcon, Settings as FB_SettingsIcon };

// Ensure all icons referenced in NAV_LINKS are exported if they are used directly by name elsewhere.
// The ones like Home, Info, Settings, Mail are directly from lucide-react and fine.
// WORKSHOPS_ICON, RECOMMENDATIONS_ICON, AI_DEMO_ICON are aliases.
