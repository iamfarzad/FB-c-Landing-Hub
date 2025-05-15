import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/SectionWrapper';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <SectionWrapper className="bg-secondary/30 !pt-20 md:!pt-28 text-center md:text-left">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Unlock AI Potential for Your Business with <span className="text-primary">FarzadBayat.ai</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Expert AI consulting, custom solutions, and hands-on workshops to transform your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl max-w-xl mx-auto md:max-w-none">
           <Image 
            src="https://placehold.co/800x600.png" 
            alt="AI technology concept" 
            layout="fill"
            objectFit="cover"
            data-ai-hint="abstract technology"
            priority
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
