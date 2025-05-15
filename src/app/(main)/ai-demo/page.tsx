import SectionWrapper from '@/components/shared/SectionWrapper';
import AIDemoRunner from '@/components/ai-demo/AIDemoRunner';

export default function AiDemoPage() {
  return (
    <>
      <SectionWrapper className="bg-secondary/30 !pt-12 md:!pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Interactive AI Demo</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            See our AI models in action. This interactive demo showcases how AI and language models work,
            offering a hands-on experience with tools relevant to our workshops.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <AIDemoRunner />
      </SectionWrapper>
    </>
  );
}
