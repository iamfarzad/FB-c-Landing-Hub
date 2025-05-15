import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Presentation } from 'lucide-react';

export default function WorkshopCTA() {
  return (
    <SectionWrapper id="workshops-cta" className="bg-primary text-primary-foreground">
      <div className="text-center">
        <Presentation className="h-16 w-16 mx-auto mb-6 opacity-80" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Master AI?</h2>
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Join our interactive workshops and gain practical AI skills. Tailored for individuals and teams.
        </p>
        <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          <Link href="/workshops">Discover Workshops</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
