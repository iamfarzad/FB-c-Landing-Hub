
import HeroSection from '@/components/landing/HeroSection';
import WhyWorkWithMeSection from '@/components/home/WhyWorkWithMeSection';
import WhatIOfferSection from '@/components/home/WhatIOfferSection';
import FreeWorkshopCtaSection from '@/components/home/FreeWorkshopCtaSection';
import LiveDemoProofSection from '@/components/home/LiveDemoProofSection';
import ResultsSection from '@/components/home/ResultsSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';

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
