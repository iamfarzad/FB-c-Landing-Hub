import { runFlow } from '@genkit-ai/next'

export async function POST(req: Request) {
 const { messages } = await req.json()
 const result = await runFlow('chatbot-proposal', { messages })
 return new Response(JSON.stringify({ messages: [result] }), { status: 200 })
}