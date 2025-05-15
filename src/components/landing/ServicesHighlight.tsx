import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SERVICES_LIST } from '@/lib/constants';

export default function ServicesHighlight() {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Core AI Services</h2>
        <p className="text-lg text-muted-foreground mt-2">
          Empowering your business with cutting-edge AI solutions.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES_LIST.map((service) => (
          <Card key={service.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mb-4">
                <service.icon className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
            <div className="p-6 pt-0">
               <Button variant="link" asChild className="p-0 text-primary hover:text-accent">
                <Link href="/services">Learn More &rarr;</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
