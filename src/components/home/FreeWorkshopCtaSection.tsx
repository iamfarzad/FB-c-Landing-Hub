
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap } from 'lucide-react';
import Link from 'next/link';

export default function FreeWorkshopCtaSection() {
  return (
    <SectionWrapper id="free-workshop" className="bg-secondary/30 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-xl border-primary/20">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Zap className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold text-foreground">
              Free Digital Workshop: AI in 30 Minutes
            </CardTitle>
            <CardDescription className="text-lg md:text-xl text-muted-foreground mt-2">
              Get a real taste of how AI can help your business – no fluff, just working examples.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-6 mb-8 text-left">
              <ul className="space-y-3 text-muted-foreground text-base md:text-lg">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <span>Learn what AI can (and can't) do for your business.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <span>Automate one real task using ChatGPT or Claude.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <span>No slides, no fluff. Just working examples.</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                <Link href="/workshops">Join Free Workshop &rarr;</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
