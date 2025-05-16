
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <SectionWrapper id="final-cta" className="bg-secondary/30">
      <div className="text-center py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Ready to use AI that actually works?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Let’s identify a use case and get started on bringing practical AI solutions to your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 w-full sm:w-auto">
            <Link href="/contact">
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="/ai-demo">
              Try the AI Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
