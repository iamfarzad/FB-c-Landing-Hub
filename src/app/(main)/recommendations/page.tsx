import SectionWrapper from '@/components/shared/SectionWrapper';
import RecommendationEngine from '@/components/recommendations/RecommendationEngine';

export default function RecommendationsPage() {
  return (
    <>
      <SectionWrapper className="bg-secondary/30 !pt-12 md:!pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Personalized AI Service Recommendations</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the AI services that best fit your unique needs and goals. Our AI tool analyzes your
            interests and context to provide tailored suggestions.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <RecommendationEngine />
      </SectionWrapper>
    </>
  );
}
