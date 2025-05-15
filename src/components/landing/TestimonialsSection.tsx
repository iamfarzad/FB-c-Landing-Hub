import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { TESTIMONIALS_LIST } from '@/lib/constants';
import { Star, MessageSquare } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" className="bg-secondary/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
        <p className="text-lg text-muted-foreground mt-2">
          Real stories from businesses transformed by AI.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS_LIST.map((testimonial) => (
          <Card key={testimonial.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <MessageSquare className="h-8 w-8 text-primary mb-4 opacity-50" />
              <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.company}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
