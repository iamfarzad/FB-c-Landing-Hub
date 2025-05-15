'use client';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { ArrowRight } from 'lucide-react';
import { ParticleOrb } from './ParticleOrb';
import { chatEventBus, OPEN_CHAT_EVENT } from '@/lib/event-bus';

export default function HeroSection() {
  const handleOpenChat = () => {
    chatEventBus.dispatch(OPEN_CHAT_EVENT);
  };

  return (
    <SectionWrapper className="!pt-20 md:!pt-28 relative overflow-hidden hero-grid-background min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        {/* Replace the simple div with ParticleOrb */}
        <ParticleOrb />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-secondary/70 text-secondary-foreground px-4 py-1.5 rounded-full text-xs sm:text-sm mb-6 shadow-sm animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <span className="h-2.5 w-2.5 bg-primary rounded-full animate-pulse"></span>
            <span>F.B Consulting Online</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          What your company needs to get started with AI
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          AI should be simple, not complicated. We help you start the right way and master AI in daily work-employees and leaders alike.
        </p>
        <div className="flex flex-col items-center gap-4 w-full max-w-xs sm:max-w-sm animate-fadeIn" style={{ animationDelay: '0.8s' }}>
            <Button
              variant="outline"
              className="w-full h-14 px-4 sm:px-6 rounded-full shadow-lg bg-background hover:bg-accent/5 flex items-center justify-center text-muted-foreground text-sm sm:text-base group"
              onClick={handleOpenChat}
              aria-label="Open chat assistant"
            >
              {/* Text removed as per request, only arrow remains */}
              <ArrowRight className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
            </Button>
            <Button variant="secondary" size="lg" className="rounded-full bg-muted/70 hover:bg-muted/90 text-foreground shadow-md px-8">
                Book Free Call {/* This can be a Link later if needed: <Link href="/contact?subject=Book Free Call">Book Free Call</Link> */}
            </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
