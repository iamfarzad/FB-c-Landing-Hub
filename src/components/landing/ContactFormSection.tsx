import SectionWrapper from '@/components/shared/SectionWrapper';
import ContactForm from '@/components/shared/ContactForm';
import { Mail, Phone } from 'lucide-react';

export default function ContactFormSection() {
  return (
    <SectionWrapper id="contact-form" className="bg-secondary/30">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have a question or a project in mind? We'd love to hear from you.
            Fill out the form, and we'll get back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-primary" />
              <a href="mailto:info@F.B/c" className="hover:text-primary">info@F.B/c</a>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
