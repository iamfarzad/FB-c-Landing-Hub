
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Presentation, Users, CalendarDays, Award } from 'lucide-react';
import Image from 'next/image';
import ContactFormSection from '@/components/landing/ContactFormSection';

const workshops = [
  {
    title: "AI Fundamentals for Business Leaders",
    description: "Understand the core concepts of AI and learn how to identify opportunities for AI integration in your organization. No technical background required.",
    duration: "1 Day",
    level: "Beginner",
    icon: Presentation,
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "business meeting"
  },
  {
    title: "Machine Learning for Product Managers",
    description: "Deep dive into machine learning principles and discover how to leverage ML for product innovation and enhancement.",
    duration: "2 Days",
    level: "Intermediate",
    icon: Users,
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "team collaboration"
  },
  {
    title: "Advanced AI: LLMs and Generative AI",
    description: "Explore the latest advancements in Large Language Models and Generative AI, and learn to build applications with them.",
    duration: "3 Days",
    level: "Advanced",
    icon: Award,
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "futuristic technology"
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <SectionWrapper className="bg-secondary/30 !pt-12 md:!pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Workshops & Training</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Equip yourself and your team with the AI skills needed to thrive in the digital age. Our workshops are practical, engaging, and tailored to various skill levels.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <Card key={workshop.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-52 w-full">
                <Image
                  src={workshop.imageUrl}
                  alt={workshop.title}
                  fill
                  className="object-cover rounded-t-lg"
                  data-ai-hint={workshop.dataAiHint}
                />
              </div>
              <CardHeader>
                <div className="mb-2">
                  <workshop.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">{workshop.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{workshop.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1.5 text-primary" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1.5 text-primary" />
                    <span>{workshop.level}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact?subject=Workshop Inquiry">Learn More & Register</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionWrapper>
      <ContactFormSection />
    </>
  );
}
