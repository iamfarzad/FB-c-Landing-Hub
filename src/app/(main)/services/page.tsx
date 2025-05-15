import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { SERVICES_LIST } from '@/lib/constants';
import { CheckCircle } from 'lucide-react';
import ContactFormSection from '@/components/landing/ContactFormSection';

export default function ServicesPage() {
  return (
    <>
      <SectionWrapper className="bg-secondary/30 !pt-12 md:!pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our AI Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions designed to elevate your business, from strategy and development to implementation and training.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service) => (
            <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-3">
                  <service.icon className="h-10 w-10 text-primary mr-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Customized approach for your specific needs.
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Expert guidance and implementation.
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Measurable results and ROI.
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
      <ContactFormSection />
    </>
  );
}
