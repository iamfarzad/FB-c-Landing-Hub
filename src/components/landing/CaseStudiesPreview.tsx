import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CASE_STUDIES_LIST } from '@/lib/constants';

export default function CaseStudiesPreview() {
  return (
    <SectionWrapper id="case-studies">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Success Stories</h2>
        <p className="text-lg text-muted-foreground mt-2">
          See how we've helped businesses like yours achieve remarkable results with AI.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {CASE_STUDIES_LIST.slice(0, 2).map((study) => (
          <Card key={study.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-60 w-full">
              <Image
                src={study.imageUrl}
                alt={study.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={study.dataAiHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{study.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{study.summary}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="link" asChild className="text-primary hover:text-accent p-0">
                <Link href={`/case-studies/${study.id}`}>Read Full Study &rarr;</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button asChild size="lg" variant="outline">
          <Link href="/case-studies">Explore All Case Studies</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
