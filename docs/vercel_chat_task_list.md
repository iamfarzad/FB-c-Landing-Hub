# Chat AI SDK Parity Task List

## 1. Analysis & Comparison

### Original Vercel Chat AI SDK Features

- [ ] Modal-based chat UI with sidebar (chat history), chat area, sticky input, and model/visibility selectors
- [ ] Artifacts support: text, code, image, sheet, etc., with proper rendering in chat
- [ ] Multimodal input (file upload, etc.)
- [ ] Responsive, accessible, and theme-aware UI
- [ ] Uses shadcn/ui and Tailwind for styling
- [ ] Data persistence for chat history and artifacts
- [ ] Handles error, loading, and empty states for all async data
- [ ] Accessibility: aria-labels, keyboard navigation
- [ ] All features work with or without authentication (guest mode)

---

## 2. Parity Checklist

### Chat UI & Modal

- [ ] Modal opens/closes cleanly (ESC, outside click)
- [ ] Sidebar with chat history, user nav, and error/empty state handling
- [ ] Sidebar toggle works on all screen sizes
- [ ] Chat area renders messages as styled bubbles (with avatars, timestamps, actions)
- [ ] Sticky input bar with multimodal input (text, file upload)
- [ ] Model selector and visibility selector in header
- [x] Loading, empty, and error states for chat implemented
- [x] Loading, empty, and error states for sidebar
- [ ] Accessibility: aria-labels, keyboard navigation, skip links

### Artifacts

- [ ] All artifact types (text, code, image, sheet) supported and rendered in chat
- [ ] Artifact actions/toolbars (copy, run, polish, etc.) present
- [ ] Artifacts persisted and retrievable in chat history
- [ ] Artifact UI is accessible and theme-aware

### General

- [ ] Responsive layout and mobile support
- [ ] Theme support (light/dark)
- [ ] shadcn/ui and Tailwind used for all UI primitives
- [ ] Data persistence for chat and artifacts
- [ ] All dependencies and lockfiles up to date
- [ ] Automated/manual tests for all major features

---

## 3. Next Steps

- [ ] Refactor `multimodal-input.tsx` to match Vercel AI Chatbot UX: sticky footer, toolbar, artifact previews, quick actions.
- [ ] Integrate multimodal input visually/functionally into floating chat dialog/modal.
- [ ] Connect Ask Bar so it always opens the floating chat dialog/modal with the initial question.
- [ ] Audit and fix accessibility (ARIA, keyboard navigation, skip links).
- [ ] Ensure responsive and theme-aware UI for all chat components.
- [ ] Ensure all artifact types and actions are rendered in chat.
- [ ] Sidebar/history and model/visibility selectors present and functional in modal.
- [ ] Add/verify unit and integration tests for all new/changed UI and logic.

---
## perplexity api 

To integrate Perplexity's API into your Vercel AI Chatbot while maintaining all original capabilities, follow this optimized implementation:

### 1. Core Implementation (Minimal Changes)
**Install Required Packages**:
```bash
pnpm add @ai-sdk/perplexity ai
```

**Environment Variable** (`.env.local`):
```env
PERPLEXITY_API_KEY=pplx-xxxxxxxxxxxxxxxx
```

**API Route** (`app/api/chat/route.ts`):
```diff
+ import { perplexity } from '@ai-sdk/perplexity';
- import { openai } from '@ai-sdk/openai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
-    model: openai('gpt-4'),
+    model: perplexity('sonar-medium-chat'),
    messages,
  });

  return result.toDataStreamResponse();
}
```

### 2. Advanced Feature Preservation
**Streaming Responses**:
```tsx
// Automatically handled by AI SDK
const { messages, append } = useChat({
  api: '/api/chat'
});
```

**Tool Calls**:
```ts
// Same implementation as original
const result = await streamText({
  model: perplexity('sonar-pro'),
  tools: { /* your tools */ }
});
```

**Real-time Web Data**:
```ts
// Use online models for live information
model: perplexity('sonar-medium-online') 
```

### 3. Source Citation Handling
**Access Source Data**:
```tsx
// In your chat message component
{message.sources?.map((source) => (
  
    {source.title}
  
))}
```

### 4. Model Options Table
| Model Name              | Context Window | Best For                    |
|-------------------------|----------------|-----------------------------|
| sonar-medium-chat       | 4k tokens      | General purpose             |
| sonar-pro-chat          | 16k tokens     | Complex reasoning           |
| sonar-medium-online     | 4k tokens      | Real-time web data          |
| sonar-pro-online        | 16k tokens     | Research-intensive queries  |

### 5. Verification Checklist
1. Test streaming responses with time-sensitive queries
2. Verify tool call execution with:
   ```ts
   await append({ 
     role: 'user', 
     content: 'What's SF weather? Use get_weather tool'
   })
   ```
3. Check source citations exist in responses:
   ```ts
   console.log(message.sources) // Should show URLs
   ```

This implementation maintains full Vercel AI SDK functionality while adding Perplexity's unique web-connected capabilities. The changes are minimal but enable Perplexity's real-time data integration through their Sonar models.

Citations:
[1] https://vercel.com/integrations/pplx-api
[2] https://vercel.com/docs/ai/perplexity
[3] https://sdk.vercel.ai/providers/ai-sdk-providers/perplexity
[4] https://sdk.vercel.ai/docs/ai-sdk-ui/chatbot
[5] https://vercel.com/blog/ai-integrations
[6] https://www.youtube.com/watch?v=so4Jatc85Aw
[7] https://www.npmjs.com/package/@ai-sdk/perplexity
[8] https://trigger.dev/docs/guides/examples/vercel-ai-sdk
[9] https://www.youtube.com/watch?v=PHEZ6AHR57w
[10] https://vercel.com/docs/ai
[11] https://sdk.vercel.ai/docs/introduction
[12] https://vercel.com/docs/ai/adding-a-model
[13] https://github.com/vercel/ai/issues/2378
[14] https://docs.perplexity.ai/guides/getting-started
[15] https://vercel.com/blog/ai-sdk-4-2
[16] https://www.prompthub.us/blog/what-we-can-learn-from-openai-perplexity-tldraw-and-vercels-system-prompts
[17] https://www.reddit.com/r/perplexity_ai/comments/1f5j7tv/i_made_an_extension_that_will_make_your_life/
[18] https://github.com/vercel/ai/issues/2274
[19] https://github.com/vercel/ai/issues/2794
[20] https://venturebeat.com/ai/perplexity-partners-with-vercel-opening-ai-search-to-developer-apps/

---
# Implementing Model Switching with Artifacts in Vercel AI Chatbot

The Vercel AI Chatbot allows for powerful model switching capabilities and specialized artifact rendering. This enables your AI consulting service to showcase different model strengths for reasoning, research, web connectivity, and document handling all within a single interface.

## Provider Registry for Dynamic Model Selection

The Vercel AI SDK's Provider Registry is the foundation for implementing model switching in your application. It allows you to register multiple AI providers and access them through a unified interface.

### Setting Up the Provider Registry

```typescript
// lib/providers.ts
import { createProviderRegistry } from 'ai';
import { openai } from '@ai-sdk/openai';
import { perplexity } from '@ai-sdk/perplexity';
import { anthropic } from '@ai-sdk/anthropic';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

export const registry = createProviderRegistry({
  // Standard text models
  openai,
  perplexity,
  anthropic,
  
  // Specialized reasoning models
  reasoning: customProvider({
    languageModels: {
      'claude-reasoning': wrapLanguageModel({
        model: anthropic('claude-3-7-sonnet-20250219'),
        middleware: extractReasoningMiddleware({ tagName: 'think' })
      }),
      'r1-reasoning': perplexity('r1-1776')
    }
  }),
  
  // Web-connected models
  web: customProvider({
    languageModels: {
      'web-search': perplexity('sonar-medium-online')
    }
  }),
  
  // Image generation models
  image: customProvider({
    imageModels: {
      'dalle-3': openai('dall-e-3')
    }
  }),
  
  // Google models
  google: createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GEMINI_API_KEY
  })
});
```

### Creating the Model Selector UI

```tsx
// components/model-selector.tsx
'use client';
import { Select } from '@/components/ui/select';
import { useChatStore } from '@/stores/chat-store';

const modelOptions = [
  { value: 'openai:gpt-4o', label: 'GPT-4o', category: 'General' },
  { value: 'perplexity:sonar-medium-chat', label: 'Sonar Medium', category: 'General' },
  { value: 'reasoning:claude-reasoning', label: 'Claude Reasoning', category: 'Reasoning' },
  { value: 'web:web-search', label: 'Web Research', category: 'Research' },
  { value: 'image:dalle-3', label: 'DALL-E 3', category: 'Image' },
  { value: 'google:gemini-pro', label: 'Gemini Pro', category: 'General' }
];

export function ModelSelector() {
  const { selectedModel, setSelectedModel } = useChatStore();
  
  return (
     item.category}
    />
  );
}
```

## Connecting Models to Artifacts

The Vercel AI Chatbot's `/artifacts` directory contains specialized renderers for different output types that models can generate. Connecting these to your model-switching implementation requires proper tool configuration.

### Configuring Tools Based on Selected Model

```typescript
// app/api/chat/route.ts
import { streamText, tool } from 'ai';
import { z } from 'zod';
import { registry } from '@/lib/providers';

export async function POST(req: Request) {
  const { messages, selectedModel } = await req.json();
  
  // Extract provider and model IDs
  const [provider, modelId] = selectedModel.split(':');
  
  // Configure active tools based on provider type
  const activeTools = [];
  
  if (provider === 'web') {
    activeTools.push('searchWeb');
  }
  
  if (provider === 'reasoning') {
    // Reasoning models often don't need external tools
    // but might use special rendering for showing reasoning steps
  }
  
  if (provider !== 'image') {
    // Text tools for non-image models
    activeTools.push('createDocument', 'updateDocument');
  }
  
  const result = await streamText({
    model: registry.languageModel(selectedModel),
    messages,
    experimental_activeTools: activeTools,
    tools: {
      searchWeb: tool({
        description: 'Search the web for recent information',
        parameters: z.object({
          query: z.string().describe('Search query')
        }),
        execute: async ({ query }) => {
          // Implement web search functionality
          return { results: [] };
        }
      }),
      createDocument: tool({
        description: 'Create a document',
        parameters: z.object({
          title: z.string(),
          content: z.string()
        }),
        execute: async ({ title, content }) => {
          // Document creation logic
          return { documentId: '123' };
        }
      }),
      // Additional tools...
    }
  });
  
  return result.toDataStreamResponse();
}
```

## Rendering Different Artifact Types

The artifacts in the Vercel AI Chatbot repository (`/artifacts/code`, `/artifacts/image`, etc.) are responsible for rendering different types of content. To leverage these in your model-switching implementation:

### Artifact Renderers

```tsx
// components/chat-message.tsx
import { Message } from 'ai';
import { CodeArtifact } from '@/artifacts/code';
import { ImageArtifact } from '@/artifacts/image';
import { SheetArtifact } from '@/artifacts/sheet';
import { TextArtifact } from '@/artifacts/text';

interface ChatMessageProps {
  message: Message;
  selectedModel: string;
}

export function ChatMessage({ message, selectedModel }: ChatMessageProps) {
  return (
    
      {/* Render the basic message content */}
      
        {message.content}
      
      
      {/* Render any tool invocations with appropriate artifacts */}
      {message.toolInvocations?.map((tool) => {
        // Select the appropriate artifact renderer based on tool type
        if (tool.toolName === 'createDocument' && 'result' in tool) {
          return ;
        }
        
        if (tool.toolName === 'generateImage' && 'result' in tool) {
          return ;
        }
        
        if (tool.toolName === 'generateSpreadsheet' && 'result' in tool) {
          return ;
        }
        
        if (tool.toolName === 'generateCode' && 'result' in tool) {
          return ;
        }
        
        // Generic fallback for other tools
        return (
          
            {JSON.stringify(tool, null, 2)}
          
        );
      })}
      
      {/* Special handling for reasoning models */}
      {selectedModel.startsWith('reasoning:') && message.reasoning && (
        
          Reasoning Process:
          {message.reasoning}
        
      )}
    
  );
}
```

## Integrating Model Switching in the Chat UI

To complete the implementation, integrate the model selector into your chat interface:

```tsx
// components/chat.tsx
'use client';
import { useChat } from 'ai/react';
import { useState } from 'react';
import { ModelSelector } from './model-selector';
import { ChatMessage } from './chat-message';
import { useChatStore } from '@/stores/chat-store';

export function Chat() {
  const { selectedModel } = useChatStore();
  
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
    body: {
      selectedModel
    },
    // Other useChat options...
  });
  
  return (
    
      
        AI Assistant
        
      
      
      
        {messages.map(message => (
          
        ))}
      
      
      
        
      
    
  );
}
```

## Examples of Model-Specific Artifacts

Different model types excel at different tasks, which can be rendered with specialized artifacts:

1. **Reasoning models** (Claude Reasoning, R1 1776): Display step-by-step thinking processes using the `TextArtifact` with special formatting.

2. **Web search models** (Perplexity Sonar): Render search results with `TextArtifact` enhanced with citation links.

3. **Image generation models** (DALL-E 3): Use `ImageArtifact` to display generated images with proper sizing and captions.

4. **Code generation models**: Leverage `CodeArtifact` for syntax-highlighted code displays with copy functionality.

5. **Data analysis models**: Render structured data using `SheetArtifact` for interactive table displays.

By implementing this model-switching architecture with specialized artifacts, your AI consulting website can effectively showcase the diverse capabilities of different AI models, providing a compelling demonstration of your expertise in the field.

