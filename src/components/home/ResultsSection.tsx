
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TrendingUp, Clock, Zap } from 'lucide-react';

const resultsData = [
  {
    icon: Clock,
    title: "Response time dropped 65%",
    description: "with a custom chatbot",
    bgColor: "bg-sky-100 dark:bg-sky-900/50", // Adjusted for better dark mode
    iconColor: "text-sky-500 dark:text-sky-400",
  },
  {
    icon: TrendingUp,
    title: "Conversion rates up 40%",
    description: "after implementing AI insights",
    bgColor: "bg-green-100 dark:bg-green-900/50", // Adjusted for better dark mode
    iconColor: "text-green-500 dark:text-green-400",
  },
  {
    icon: Zap,
    title: "Financial reports in 30 seconds",
    description: "that previously took 3 days",
    bgColor: "bg-amber-100 dark:bg-amber-900/50", // Adjusted for better dark mode
    iconColor: "text-amber-500 dark:text-amber-400",
  },
];

export default function ResultsSection() {
  return (
    <SectionWrapper id="results" className="bg-slate-50 dark:bg-background">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Results From Real Projects
        </h2>
        <p className="text-lg text-muted-foreground mt-3 max-w-xl mx-auto">
          See the tangible impact of our AI solutions.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {resultsData.map((result) => (
          <Card 
            key={result.title} 
            className="shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col text-center group hover:scale-105 hover:border-primary/50 border border-transparent"
          >
            <CardHeader className="pb-4 items-center">
              <div className={`p-4 rounded-full w-fit mb-4 ${result.bgColor} group-hover:ring-4 group-hover:ring-primary/30 ring-offset-2 ring-offset-background transition-all duration-300`}>
                <result.icon className={`h-10 w-10 ${result.iconColor}`} />
              </div>
              <CardTitle className="text-xl lg:text-2xl font-semibold text-foreground">{result.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-muted-foreground">{result.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
