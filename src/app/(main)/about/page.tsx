import SectionWrapper from '@/components/shared/SectionWrapper';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Brain, Lightbulb, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <SectionWrapper className="bg-secondary/30 !pt-12 md:!pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About F.B/c</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving innovation and business transformation through the strategic application of Artificial Intelligence.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
             <Image 
              src="https://placehold.co/600x450.png" 
              alt="Farzad Bayat" 
              layout="fill"
              objectFit="cover"
              data-ai-hint="professional portrait"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Meet Farzad Bayat</h2>
            <p className="text-muted-foreground mb-4">
              Farzad Bayat is a seasoned AI consultant and strategist with a passion for helping businesses harness the power of artificial intelligence. With years of experience in developing and implementing AI solutions across various industries, Farzad brings a unique blend of technical expertise and business acumen.
            </p>
            <p className="text-muted-foreground">
              His mission is to demystify AI and make its benefits accessible to organizations of all sizes, fostering innovation and driving measurable results.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Philosophy</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card rounded-lg shadow-md">
            <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation-Driven</h3>
            <p className="text-muted-foreground">We believe in pushing boundaries and exploring novel AI applications to solve complex challenges.</p>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-md">
            <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Solution-Oriented</h3>
            <p className="text-muted-foreground">Our focus is on delivering practical, impactful AI solutions that provide tangible value to your business.</p>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-md">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Client-Centric</h3>
            <p className="text-muted-foreground">We partner closely with our clients, understanding their unique needs to tailor strategies for success.</p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
