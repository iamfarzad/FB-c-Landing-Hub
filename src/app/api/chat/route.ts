import { streamText } from 'ai'
import { openai } from '@ai-sdk/openai'

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const stream = streamText({
    model: openai('gpt-4'),
    messages,
  })

  return stream.toDataStreamResponse()
}