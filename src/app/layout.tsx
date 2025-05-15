import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster'; // Ensure Toaster is imported if not already managed by a sub-layout

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FarzadBayat.ai',
  description: 'AI Consulting & Workshops by Farzad Bayat',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* If Toaster is not in a nested layout that always renders, it can be here. 
            However, it's better placed in the (main)/layout.tsx to be within the context of pages that might use it.
            The current (main)/layout.tsx already includes it.
        */}
      </body>
    </html>
  );
}
