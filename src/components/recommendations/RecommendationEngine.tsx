'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, Lightbulb } from 'lucide-react';
import { generatePersonalizedRecommendations, type PersonalizedRecommendationsInput, type PersonalizedRecommendationsOutput } from '@/ai/flows/personalized-recommendations';

const formSchema = z.object({
  interests: z.string().min(10, { message: "Please describe your interests in at least 10 characters." }),
  chatHistory: z.string().optional().describe('Simulated chat history input'),
  pageNavigationHistory: z.string().optional().describe('Simulated page navigation history input'),
});

type RecommendationFormValues = z.infer<typeof formSchema>;

export default function RecommendationEngine() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<PersonalizedRecommendationsOutput['recommendations'] | null>(null);

  const form = useForm<RecommendationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: '',
      chatHistory: 'User expressed interest in AI for small businesses and automating customer support.',
      pageNavigationHistory: 'Visited: /services, /ai-chatbot-solutions, /workshops/ai-fundamentals',
    },
  });

  async function onSubmit(values: RecommendationFormValues) {
    setIsLoading(true);
    setRecommendations(null);
    try {
      const input: PersonalizedRecommendationsInput = {
        interests: values.interests,
        // For a real app, these would be dynamically gathered.
        // For now, we can use placeholders or let user fill them if we add form fields.
        chatHistory: values.chatHistory || "No chat history available.", 
        pageNavigationHistory: values.pageNavigationHistory || "No navigation history available.",
      };
      const result = await generatePersonalizedRecommendations(input);
      setRecommendations(result.recommendations);
      toast({
        title: 'Recommendations Generated!',
        description: 'We found some personalized suggestions for you.',
      });
    } catch (error) {
      console.error('Recommendation error:', error);
      toast({
        title: 'Recommendation Error',
        description: 'Could not generate recommendations. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Personalized Recommendations</CardTitle>
          <CardDescription>
            Tell us about your interests, and we'll suggest services tailored to you.
            (Chat & navigation history are pre-filled for demo purposes).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Interests & Needs</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., I'm interested in using AI to improve marketing for my e-commerce store, specifically customer segmentation and personalized ads." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="chatHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Simulated Chat History (for demo)</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={3} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pageNavigationHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Simulated Page Navigation (for demo)</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={3} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Get Recommendations
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Our Suggestions For You</CardTitle>
          <CardDescription>Based on your input, here are some services you might find valuable.</CardDescription>
        </CardHeader>
        <CardContent className="min-h-[300px] bg-muted/50 rounded-md p-4">
          {isLoading && !recommendations && (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          {recommendations && recommendations.length > 0 && (
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-4 border rounded-lg bg-background">
                  <h3 className="font-semibold text-lg text-primary mb-1 flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2" />
                    {rec.serviceName}
                  </h3>
                  <p className="text-sm text-muted-foreground">{rec.description}</p>
                </div>
              ))}
            </div>
          )}
           {recommendations && recommendations.length === 0 && !isLoading && (
            <p className="text-muted-foreground text-center py-10">
              No specific recommendations found based on the provided input. Try broadening your interests.
            </p>
          )}
          {!isLoading && !recommendations && (
            <p className="text-muted-foreground text-center py-10">
              Fill out the form to receive personalized recommendations.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
