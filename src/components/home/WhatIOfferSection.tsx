
'use client';

import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES_LIST } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

export default function WhatIOfferSection() {
  const illustrationHints = [
    "isometric data network",
    "isometric ai gears",
    "isometric learning screen",
    "isometric data chart",
  ];

  return (
    <SectionWrapper id="what-i-offer" className="bg-slate-50 dark:bg-background">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">What I Offer</h2>
        <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
          From custom internal copilots to hands-on AI training for your team.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {SERVICES_LIST.map((service, index) => (
          <Card
            key={service.title}
            className={cn(
              "flex flex-col bg-card text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden group hover:scale-105 dark:border-neutral-700/60 dark:hover:shadow-[0_0_25px_-5px_var(--primary)] dark:hover:border-primary/70"
            )}
          >
            <div className="relative w-full h-48 sm:h-56 group-hover:opacity-90 transition-opacity duration-300">
              <Image
                src={`https://placehold.co/400x300.png`}
                alt={`${service.title} isometric illustration`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={illustrationHints[index % illustrationHints.length]}
              />
            </div>
            <CardHeader className="pt-6">
              <div className="flex items-center mb-2">
                <service.icon className="h-10 w-10 text-primary mr-3 shrink-0" />
                <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-sm text-muted-foreground">
                {service.description}
              </CardDescription>
              <ul className="mt-4 space-y-1 text-xs text-muted-foreground/80">
                {(service.details || ['Custom internal copilots and chatbots', 'Workflow and data automation', 'Private/local AI models for sensitive business logic']).slice(0,2).map(detail => (
                    <li key={detail} className="flex items-start">
                        <CheckCircle className="h-3.5 w-3.5 text-primary/70 mr-2 mt-0.5 shrink-0" />
                        <span>{detail}</span>
                    </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-2">
              <Button variant="link" asChild className="p-0 text-primary hover:text-accent font-semibold">
                <Link href="/services">See Services &rarr;</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
       <div className="text-center mt-12 md:mt-16">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
          <Link href="/services">Explore All My Services</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
