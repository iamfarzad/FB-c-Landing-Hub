import HeroSection from '@/components/landing/HeroSection';
import ServicesHighlight from '@/components/landing/ServicesHighlight';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CaseStudiesPreview from '@/components/landing/CaseStudiesPreview';
import WorkshopCTA from '@/components/landing/WorkshopCTA';
import ContactFormSection from '@/components/landing/ContactFormSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesHighlight />
      <TestimonialsSection />
      <CaseStudiesPreview />
      <WorkshopCTA />
      <ContactFormSection />
    </>
  );
}
