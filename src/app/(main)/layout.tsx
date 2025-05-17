
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatbotWidget from '@/components/layout/ChatbotWidget';
import { Toaster } from "@/components/ui/toaster";
import AnimatedHeroBackground from '@/components/landing/AnimatedHeroBackground'; // Import the new background

export const metadata: Metadata = {
  title: 'F.B/c - AI Consulting & Workshops',
  description: 'Unlock the power of AI for your business with Farzad Bayat.',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedHeroBackground /> {/* Add as a fixed background */}
      <div className="relative z-0 flex flex-col min-h-screen"> {/* Wrapper for content to be above background */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <ChatbotWidget />
      <Toaster />
    </div>
  );
}
