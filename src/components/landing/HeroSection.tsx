
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
        <ParticleOrb />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-secondary/70 text-secondary-foreground px-4 py-1.5 rounded-full text-xs sm:text-sm mb-6 shadow-sm animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <span className="h-2.5 w-2.5 bg-primary rounded-full animate-pulse"></span>
            <span>F.B Consulting Online</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight max-w-3xl animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          What your company needs to get started with AI
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          AI should be simple, not complicated. We help you start the right way and master AI in daily work-employees and leaders alike.
        </p>
        
        <div className="flex flex-col items-center gap-6 w-full max-w-md sm:max-w-lg animate-fadeIn" style={{ animationDelay: '0.8s' }}>
            {/* "Ask me anything" bar - frameless design */}
            <button
              onClick={handleOpenChat}
              className="flex items-center justify-between w-full h-14 px-4 sm:px-6 py-3 text-muted-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background group transition-colors duration-200 ease-in-out"
              aria-label="Ask me anything about AI consulting"
            >
              <span className="text-sm sm:text-base">Ask me anything about AI consulting</span>
              <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-primary rounded-full text-primary-foreground ml-3 shadow-md transition-transform group-hover:scale-110 group-hover:shadow-primary/40 shrink-0">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </button>

            <Button variant="secondary" size="lg" className="rounded-full bg-muted/70 hover:bg-muted/90 text-foreground shadow-md px-8">
                Book Free Call
            </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
