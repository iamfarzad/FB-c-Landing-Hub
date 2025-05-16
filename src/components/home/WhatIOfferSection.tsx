
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES_LIST } from '@/lib/constants'; // Assuming SERVICES_LIST still has titles and descriptions

export default function WhatIOfferSection() {
  // Placeholder hints for isometric illustrations
  const illustrationHints = [
    "isometric data network", // For AI Strategy Consulting
    "isometric ai gears",    // For Custom AI Solutions
    "isometric learning screen", // For AI Workshops & Training
    "isometric data chart", // For Data Analytics & Insights
  ];

  return (
    <SectionWrapper id="what-i-offer" className="bg-slate-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">What I Offer</h2>
        <p className="text-lg text-muted-foreground mt-2">
          From custom internal copilots to hands-on AI training for your team.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {SERVICES_LIST.map((service, index) => (
          <Card key={service.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <div className="relative w-full h-48 bg-secondary/30"> {/* Added bg for consistency */}
              <Image
                src={`https://placehold.co/300x200.png`}
                alt={`${service.title} isometric illustration`}
                layout="fill"
                objectFit="cover"
                data-ai-hint={illustrationHints[index % illustrationHints.length]} // Cycle through hints or assign specific ones
              />
            </div>
            <CardHeader className="pt-6">
              <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-sm">
                {service.description /* Assuming description is still relevant from SERVICES_LIST */}
              </CardDescription>
            </CardContent>
            <div className="p-6 pt-2">
              <Button variant="link" asChild className="p-0 text-primary hover:text-accent">
                <Link href="/services">See Services &rarr;</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
