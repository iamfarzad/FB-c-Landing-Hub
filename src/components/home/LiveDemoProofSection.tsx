
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Cpu, MessageCircle, FileText } from 'lucide-react';
import Link from 'next/link';

export default function LiveDemoProofSection() {
  return (
    <SectionWrapper id="live-demo-proof" className="bg-secondary/30 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-xl border-primary/20 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex flex-col justify-center items-center text-center">
              <Cpu className="h-20 w-20 text-primary mb-6" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">This Website is a Live Demo</h3>
              <p className="text-muted-foreground">
                Experience practical AI in action.
              </p>
            </div>
            <div className="md:w-1/2">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                  Proof in Practice
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-1">
                  My entire website runs on its own AI assistant—powered by leading models.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground text-sm md:text-base">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                    <span>Built with Gemini, OpenAI (GPT), and Claude models for diverse capabilities.</span>
                  </li>
                  <li className="flex items-start">
                    <MessageCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                    <span>Interactive voice/text assistance with real-time document, media, and PDF analysis.</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                    <span>Personalized responses and service recommendations tailored to your queries.</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/ai-demo">Explore the AI Assistant &rarr;</Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
