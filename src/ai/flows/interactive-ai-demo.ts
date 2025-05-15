// Interactive AI Demo Flow
'use server';

/**
 * @fileOverview An interactive AI demo flow to showcase language models.
 *
 * - runInteractiveAIDemo - A function that runs the interactive AI demo flow.
 * - InteractiveAIDemoInput - The input type for the runInteractiveAIDemo function.
 * - InteractiveAIDemoOutput - The return type for the runInteractiveAIDemo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InteractiveAIDemoInputSchema = z.object({
  task: z.string().describe('The specific AI task to demonstrate (e.g., text summarization, translation, image generation).'),
  inputData: z.string().describe('The input data for the AI task. Can be text or a data URI for images.'),
  instructions: z.string().optional().describe('Any specific instructions for the AI model.'),
});
export type InteractiveAIDemoInput = z.infer<typeof InteractiveAIDemoInputSchema>;

const InteractiveAIDemoOutputSchema = z.object({
  result: z.string().describe('The AI-generated result of the demo.'),
});
export type InteractiveAIDemoOutput = z.infer<typeof InteractiveAIDemoOutputSchema>;

export async function runInteractiveAIDemo(input: InteractiveAIDemoInput): Promise<InteractiveAIDemoOutput> {
  return interactiveAIDemoFlow(input);
}

const interactiveAIDemoPrompt = ai.definePrompt({
  name: 'interactiveAIDemoPrompt',
  input: {schema: InteractiveAIDemoInputSchema},
  output: {schema: InteractiveAIDemoOutputSchema},
  prompt: `You are an AI assistant demonstrating how language models work. A user has requested a demo of the following task:

Task: {{{task}}}

Input Data: {{{inputData}}}

Instructions: {{{instructions}}}

Generate the result of the AI task, and provide a brief explanation of how the language model processed the input to generate the result.`,
});

const interactiveAIDemoFlow = ai.defineFlow(
  {
    name: 'interactiveAIDemoFlow',
    inputSchema: InteractiveAIDemoInputSchema,
    outputSchema: InteractiveAIDemoOutputSchema,
  },
  async input => {
    const {output} = await interactiveAIDemoPrompt(input);
    return output!;
  }
);
