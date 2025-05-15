import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatbotWidget from '@/components/layout/ChatbotWidget';
import { Toaster } from "@/components/ui/toaster";

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
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatbotWidget />
      <Toaster />
    </div>
  );
}
