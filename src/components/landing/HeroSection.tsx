
'use client';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { ArrowRight } from 'lucide-react';
import { ParticleOrb } from './ParticleOrb';
import { chatEventBus, OPEN_CHAT_EVENT } from '@/lib/event-bus';
import { AnimatedGridPattern } from "@/registry/magicui/animated-grid-pattern";
import { cn } from '@/lib/utils';

export default function HeroSection() {
  const handleOpenChat = () => {
    chatEventBus.dispatch(OPEN_CHAT_EVENT);
  };

  return (
    <SectionWrapper className="!pt-20 md:!pt-28 relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <AnimatedGridPattern
        numSquares={40} // Increased for better coverage
        maxOpacity={0.07} // Softer effect
        duration={4}
        repeatDelay={0.5}
        className={cn(
          "[mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]", // Adjusted mask for softer edges
          "inset-0 h-full w-full skew-y-0", // Removed skew, ensure full coverage
          "text-muted-foreground/30 dark:text-muted-foreground/20" // Color for squares
        )}
        gridCellClassName="bg-current" // Ensures squares take the text color
      />
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 mt-8 sm:mt-12 md:mt-16">
         {/* Orb is visually between sub-headline and ask bar, but structurally can be here for absolute positioning */}
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div 
          className="inline-flex items-center space-x-2 bg-secondary/70 text-secondary-foreground px-4 py-1.5 rounded-full text-xs sm:text-sm mb-6 shadow-sm animate-fadeIn" 
          style={{ animationDelay: '0.2s' }}
        >
            <span className="h-2.5 w-2.5 bg-primary rounded-full animate-pulse"></span>
            <span>F.B Consulting Online</span>
        </div>
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight max-w-3xl animate-fadeIn" 
          style={{ animationDelay: '0.4s' }}
        >
          What your company needs to get started with AI
        </h1>
        <p 
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fadeIn" 
          style={{ animationDelay: '0.6s' }}
        >
          AI should be simple, not complicated. We help you start the right way and master AI in daily work-employees and leaders alike.
        </p>
        
        {/* ParticleOrb is placed here so it appears after the sub-headline and before the ask bar */}
        <div 
            className="my-8 md:my-10 animate-fadeIn"
            style={{ animationDelay: '0.7s' }}
        >
            <ParticleOrb className="w-56 h-56 sm:w-64 sm:h-64" />
        </div>
        
        <button
          onClick={handleOpenChat}
          className="group flex items-center justify-center gap-3 text-muted-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background py-2 mb-8 animate-fadeIn"
          style={{ animationDelay: '0.8s' }}
          aria-label="Ask me anything about AI consulting"
        >
          <span className="text-sm sm:text-base transition-colors">Ask me anything about AI consulting</span>
          <div className="flex items-center justify-center w-9 h-9 bg-primary rounded-full text-primary-foreground border-2 border-foreground shadow-[0_1px_3px_rgba(0,0,0,0.15)] dark:shadow-[0_1px_3px_rgba(255,255,255,0.08)] group-hover:scale-110 group-hover:shadow-primary/40 transition-all shrink-0">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </button>

        <Button 
          variant="secondary" 
          size="lg" 
          className="rounded-full bg-muted/70 hover:bg-muted/90 text-foreground shadow-md px-8 animate-fadeIn"
          style={{ animationDelay: '1.0s' }}
        >
            Book Free Call
        </Button>
      </div>
    </SectionWrapper>
  );
}
