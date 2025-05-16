
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Brain, Rocket, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function WhyWorkWithMeSection() {
  return (
    <SectionWrapper id="why-work-with-me">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Work With Me?</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl text-center">10,000+ Hours of Real-World AI</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="text-center">
              Extensive hands-on experience in AI implementation since 2020, focusing on what truly delivers results.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl text-center">Self-Taught: Practice Over Theory</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="text-center">
              My approach is rooted in practical application, not just academic theory. I build solutions that work in the real business world.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:col-span-2 lg:col-span-1">
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
              <UserCheck className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl text-center">Proven Track Record</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="text-center">
              Successfully built and deployed AI tools for mental health, productivity, and automation. My website itself runs on my AI assistant—try it!
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <div className="text-center mt-12 md:mt-16">
        <Button asChild size="lg" variant="outline">
          <Link href="/about">Read My Full Story &rarr;</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
