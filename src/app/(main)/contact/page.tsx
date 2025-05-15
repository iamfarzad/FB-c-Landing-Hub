import SectionWrapper from '@/components/shared/SectionWrapper';
import ContactForm from '@/components/shared/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <SectionWrapper className="bg-secondary/30 !pt-12 md:!pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help you navigate the world of AI. Reach out to discuss your project, ask questions, or explore collaboration opportunities.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form, and our team will get back to you promptly.
              </p>
              <ContactForm />
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Our Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:info@farzadbayat.ai" className="text-muted-foreground hover:text-primary">info@farzadbayat.ai</a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                <div>
                  <h3 className="font-medium">Office Address</h3>
                  <p className="text-muted-foreground">123 AI Avenue, Innovation City, CA 90210</p>
                  <p className="text-sm text-muted-foreground">(By appointment only)</p>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t pt-6">
              <h3 className="font-medium mb-2">Business Hours</h3>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
