// src/ai/flows/personalized-recommendations.ts
'use server';

/**
 * @fileOverview Generates personalized service recommendations based on user data.
 *
 * - generatePersonalizedRecommendations - A function that generates personalized service recommendations.
 * - PersonalizedRecommendationsInput - The input type for the generatePersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the generatePersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  chatHistory: z.string().describe('The complete chat history of the user.'),
  pageNavigationHistory: z.string().describe('The page navigation history of the user.'),
  interests: z.string().describe('A description of the user\u0027s interests.'),
});
export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      serviceName: z.string().describe('The name of the service.'),
      description: z.string().describe('A detailed description of the service and why it fits the user\u0027s needs.'),
    })
  ).describe('A list of personalized service recommendations.'),
});
export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function generatePersonalizedRecommendations(input: PersonalizedRecommendationsInput): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an AI assistant that provides personalized service recommendations based on user data.

  Analyze the following information to generate a list of services that best fit the user's needs and interests.

  Chat History: {{{chatHistory}}}
  Page Navigation History: {{{pageNavigationHistory}}}
  User Interests: {{{interests}}}

  Provide a detailed description for each service and explain why it would be beneficial for the user.
  Format the recommendations as a JSON array.`,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
