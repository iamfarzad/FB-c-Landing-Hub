'use server';

/**
 * @fileOverview Generates a tailored service proposal based on user input collected by the chatbot.
 *
 * - generateChatbotProposal - A function that generates a service proposal based on user input.
 * - ChatbotProposalInput - The input type for the generateChatbotProposal function.
 * - ChatbotProposalOutput - The return type for the generateChatbotProposal function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotProposalInputSchema = z.object({
  userName: z.string().describe('The name of the user.'),
  userEmail: z.string().describe('The email address of the user.'),
  companyInfo: z.string().optional().describe('Optional information about the user\'s company or industry.'),
  needsSummary: z.string().describe('A summary of the user\'s needs and requirements.'),
});
export type ChatbotProposalInput = z.infer<typeof ChatbotProposalInputSchema>;

const ChatbotProposalOutputSchema = z.object({
  proposal: z.string().describe('A tailored service proposal for the user.'),
});
export type ChatbotProposalOutput = z.infer<typeof ChatbotProposalOutputSchema>;

export async function generateChatbotProposal(input: ChatbotProposalInput): Promise<ChatbotProposalOutput> {
  return chatbotProposalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotProposalPrompt',
  input: {schema: ChatbotProposalInputSchema},
  output: {schema: ChatbotProposalOutputSchema},
  prompt: `You are an AI assistant specializing in crafting tailored service proposals.

  Based on the information provided below, generate a personalized and engaging service proposal for the user.

  User Name: {{{userName}}}
  User Email: {{{userEmail}}}
  Company Info: {{{companyInfo}}}
  Needs Summary: {{{needsSummary}}}

  Please ensure the proposal highlights the key benefits of the services and addresses the user's specific needs.
  The proposal should be concise, professional, and persuasive.
  `,
});

const chatbotProposalFlow = ai.defineFlow(
  {
    name: 'chatbotProposalFlow',
    inputSchema: ChatbotProposalInputSchema,
    outputSchema: ChatbotProposalOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
