
import HeroSection from '@/components/landing/HeroSection';
import WhyWorkWithMeSection from '@/components/home/WhyWorkWithMeSection';
import WhatIOfferSection from '@/components/home/WhatIOfferSection';
import FreeWorkshopCtaSection from '@/components/home/FreeWorkshopCtaSection';
import LiveDemoProofSection from '@/components/home/LiveDemoProofSection';
import ResultsSection from '@/components/home/ResultsSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';
// Removed ServicesHighlight, TestimonialsSection, CaseStudiesPreview, WorkshopCTA, ContactFormSection
// as their content should now be covered by the new sections from docs/1_home.md

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyWorkWithMeSection />
      <WhatIOfferSection />
      <FreeWorkshopCtaSection />
      <LiveDemoProofSection />
      <ResultsSection />
      <FinalCtaSection />
    </>
  );
}
