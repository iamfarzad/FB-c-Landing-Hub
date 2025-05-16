
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TrendingUp, Clock, CheckCircle, Zap, LineChart } from 'lucide-react'; // Added Zap and LineChart as potential icons

const resultsData = [
  {
    icon: Clock,
    title: "Response time dropped 65%",
    description: "with a custom chatbot",
    bgColor: "bg-sky-100 dark:bg-sky-900",
    iconColor: "text-sky-500",
  },
  {
    icon: TrendingUp, // Changed from a generic CheckCircle to be more descriptive
    title: "Conversion rates up 40%",
    description: "after implementing AI insights",
    bgColor: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-500",
  },
  {
    icon: Zap, // Changed from a generic CheckCircle
    title: "Financial reports in 30 seconds",
    description: "that took 3 days",
    bgColor: "bg-amber-100 dark:bg-amber-900",
    iconColor: "text-amber-500",
  },
];

export default function ResultsSection() {
  return (
    <SectionWrapper id="results" className="bg-slate-50 dark:bg-slate-800/30">
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
            className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col text-center group hover:scale-105"
          >
            <CardHeader className="pb-4">
              <div className={`mx-auto p-4 rounded-full w-fit mb-4 ${result.bgColor} group-hover:ring-4 group-hover:ring-offset-2 ring-primary/30 transition-all`}>
                <result.icon className={`h-10 w-10 ${result.iconColor}`} />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">{result.title}</CardTitle>
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
