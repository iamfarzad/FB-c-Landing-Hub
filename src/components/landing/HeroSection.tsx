
'use client';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { ArrowRight } from 'lucide-react';
import { ParticleOrb } from './ParticleOrb';
import { chatEventBus, OPEN_CHAT_EVENT } from '@/lib/event-bus';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  const handleOpenChat = () => {
    chatEventBus.dispatch(OPEN_CHAT_EVENT);
  };

  return (
    <SectionWrapper className="!pt-20 md:!pt-28 relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      {/* The global AnimatedHeroBackground from layout.tsx will be visible here */}
      {/* Ensure this SectionWrapper does NOT have its own opaque background interfering */}
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div 
          className="inline-flex items-center space-x-2 bg-secondary/70 dark:bg-secondary/40 text-secondary-foreground px-4 py-1.5 rounded-full text-xs sm:text-sm mb-6 shadow-sm animate-fadeIn" 
          style={{ animationDelay: '0.2s' }}
        >
            <span className="h-2.5 w-2.5 bg-primary rounded-full animate-pulse"></span>
            <span>F.B Consulting Online</span>
        </div>
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight max-w-3xl animate-fadeIn text-foreground" 
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
        
        <div 
          className="my-8 md:my-10 animate-fadeIn"
          style={{ animationDelay: '0.7s' }}
        >
          <div className="w-56 h-56 sm:w-64 sm:h-64 relative flex items-center justify-center">
            <ParticleOrb className="w-full h-full" />
          </div>
        </div>
        
        <button
          onClick={handleOpenChat}
          className={cn(
            "group flex items-center justify-center gap-3 text-muted-foreground hover:text-primary focus:outline-none py-2 mb-8 animate-fadeIn",
            "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md" // Added for better focus visibility
          )}
          style={{ animationDelay: '0.8s' }}
          aria-label="Ask me anything about AI consulting"
        >
          <span className="text-sm sm:text-base transition-colors">Ask me anything about AI consulting</span>
          <div className="flex items-center justify-center w-9 h-9 bg-primary rounded-full text-primary-foreground border-2 border-foreground/70 dark:border-foreground/50 shadow-[0_1px_3px_rgba(0,0,0,0.15)] dark:shadow-[0_1px_3px_rgba(255,255,255,0.08)] group-hover:scale-110 group-hover:shadow-primary/40 transition-all shrink-0">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </button>

        <Button 
          variant="default" 
          size="lg" 
          className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md px-8 animate-fadeIn"
          style={{ animationDelay: '1.0s' }}
          onClick={() => {
            // Assuming you have a contact page or modal logic
            const contactLink = document.createElement('a');
            contactLink.href = '/contact'; // Or your specific booking link
            contactLink.click();
          }}
        >
            Book Free Call
        </Button>
      </div>
    </SectionWrapper>
  );
}
