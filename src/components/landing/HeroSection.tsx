import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/SectionWrapper';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <SectionWrapper className="!pt-20 md:!pt-28 relative overflow-hidden hero-grid-background min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-secondary/70 text-secondary-foreground px-4 py-1.5 rounded-full text-xs sm:text-sm mb-6 shadow-sm">
            <span className="h-2.5 w-2.5 bg-primary rounded-full"></span>
            <span>F.B Consulting Online</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl">
          What your company needs to get started with AI
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
          AI should be simple, not complicated. We help you start the right way and master AI in daily work-employees and leaders alike.
        </p>
        <div className="flex flex-col items-center gap-4 w-full max-w-md sm:max-w-lg">
            <Button
              variant="outline"
              className="w-full h-14 px-4 sm:px-6 rounded-full shadow-lg bg-background hover:bg-accent/5 justify-between text-muted-foreground text-sm sm:text-base group"
              asChild
            >
              <Link href="/contact?subject=Mental Clarity Inquiry">
                <span>Ask me anything about mental clarity...</span>
                <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="rounded-full bg-muted/70 hover:bg-muted/90 text-foreground shadow-md px-8">
                <Link href="/contact?subject=Book Free Call">Book Free Call</Link>
            </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
