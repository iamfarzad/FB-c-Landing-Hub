import type {Metadata} from 'next';
import {Geist, Geist_Mono, Inconsolata} from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inconsolata = Inconsolata({
  variable: '--font-inconsolata',
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust weights as needed
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${inconsolata.variable} font-sans antialiased`}>
        {/* Apply Inconsolata as the primary font via its variable in globals.css or here directly */}
        {/* Or, if Inconsolata should be default, ensure 'font-sans' uses its variable */}
        {children}
      </body>
    </html>
  );
}
