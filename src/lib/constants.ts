
import type { LucideIcon } from 'lucide-react';
import { Home, Info, Settings, Mail, Zap, Brain, Presentation, BarChart3, Bot, Search, Sun, Sparkles, Briefcase, MessageSquare, LayoutDashboard, Lightbulb, BookOpen, Pencil, Users, Award, CalendarDays, CheckCircle } from 'lucide-react';

export const SITE_NAME = "F.B/c";
export const SITE_DESCRIPTION = "AI Consulting & Workshops by Farzad Bayat";

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const WORKSHOPS_ICON = BookOpen;
export const RECOMMENDATIONS_ICON = Lightbulb;
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

// Service list definition
export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[]; // Optional: for more detailed service pages
};

export const SERVICES_LIST: Service[] = [
  {
    title: "AI Strategy Consulting",
    description: "Develop a roadmap for AI integration to achieve your business goals.",
    icon: Zap,
  },
  {
    title: "Custom AI Solutions",
    description: "Bespoke AI model development tailored to your unique challenges.",
    icon: Brain,
  },
  {
    title: "AI Workshops & Training",
    description: "Empower your team with practical AI knowledge and skills.",
    icon: Presentation,
  },
  {
    title: "Data Analytics & Insights",
    description: "Unlock valuable insights from your data with advanced AI analytics.",
    icon: BarChart3,
  },
];

// Testimonials list definition
export type Testimonial = {
  name: string;
  company: string;
  quote: string;
  // avatarUrl?: string; // Optional
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

// Case studies list definition
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
    client: 'Global E-commerce Retailer',
    challenge: 'Inaccurate sales forecasting leading to overstocking and stockouts.',
    solution: 'Developed a custom time-series forecasting model using machine learning, incorporating historical sales data, promotional events, and seasonality.',
    results: [
      '25% improvement in forecast accuracy.',
      '15% reduction in inventory holding costs.',
      '10% decrease in stockout incidents.'
    ]
  },
  {
    id: 'nlp-customer-support',
    title: 'Automated Customer Support with NLP Chatbot',
    summary: 'Deployed an AI chatbot that handles 70% of Tier-1 customer inquiries, significantly improving response times and agent productivity.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'chatbot support',
    client: 'SaaS Provider',
    challenge: 'High volume of repetitive customer inquiries overwhelming the support team.',
    solution: 'Built and trained an NLP-based chatbot integrated with the existing knowledge base to provide instant answers to common questions.',
    results: [
      '70% of Tier-1 inquiries automated.',
      '50% reduction in average response time.',
      '30% increase in customer support agent capacity for complex issues.'
    ]
  },
  {
    id: 'cv-defect-detection',
    title: 'Manufacturing Defect Detection using Computer Vision',
    summary: 'Developed a computer vision system that identified product defects in real-time, decreasing waste by 20% and enhancing quality control.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'industrial manufacturing',
    client: 'Automotive Parts Manufacturer',
    challenge: 'Manual defect detection was slow, error-prone, and costly.',
    solution: 'Implemented a real-time computer vision system on the assembly line using deep learning models to identify and flag defective parts.',
    results: [
      '99.5% defect detection accuracy.',
      '20% reduction in material waste.',
      'Improved overall product quality and consistency.'
    ]
  }
];


// For DockDemo example if needed elsewhere, but primary nav uses NAV_LINKS
export const DOCK_DEMO_NAVBAR_ITEMS = [
    { href: "#", icon: Home, label: "Home" },
    { href: "#", icon: Pencil, label: "Blog" },
];

export const CHATBOT_ICON = Bot;
export const SEARCH_ICON = Search;
export const THEME_ICON = Sun;
export { Sparkles, Presentation, Users, Award, CalendarDays, CheckCircle, Briefcase, MessageSquare, LayoutDashboard, Lightbulb, BookOpen, Pencil, Zap, Brain, BarChart3 };
