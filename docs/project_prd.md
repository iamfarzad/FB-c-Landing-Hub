FB Consulting Website AI Assistant PRD

Overview and Objective

Objective: Deploy an AI-powered assistant across the FB Consulting website to enhance visitor engagement, personalize content recommendations, and improve lead generation. The assistant will serve as an intelligent guide for visitors – answering questions, providing resources, and capturing potential client information – all through a natural chat interface.

Background & Rationale: FB Consulting’s site visitors often include potential clients looking for information on services, current clients seeking resources, and general audiences researching industry insights. By integrating an AI assistant, we aim to offer immediate, personalized assistance 24/7, thereby reducing bounce rates and increasing conversions. Studies show that businesses using AI chatbots have seen significant boosts in leads and conversions (up to 50% more leads and 47% higher conversion rates) ￼. Chatbots engage visitors instantly (82% of consumers expect immediate replies) ￼ and can qualify leads by asking relevant questions ￼. For example, after introducing a chatbot, one company achieved a 3× higher conversion rate and over $300k in sales in 90 days ￼. These insights underscore the potential ROI of an AI assistant for FB Consulting.

Scope: This PRD focuses on the AI assistant layer embedded on the website, including its chat interface, onboarding flow for new visitors, integration with advanced AI services (Vercel AI SDK, Google’s Gemini multimodal API, and Perplexity AI’s search/reasoning API), and how it will personalize user experiences while handling data responsibly. The goal is a seamless, conversational user experience that feels tailored to each visitor’s intent, whether that’s learning about services, finding case studies, or contacting the consulting team.

Core Features and User Flow

1. Proactive Visitor Engagement: The assistant will be accessible via a chat icon on all pages (persistently in the corner). It can proactively greet new visitors after a short delay or when they show intent (e.g., scrolling or lingering on a page). The greeting will be friendly and context-aware (e.g., “Hello! I’m Ava, the FB Consulting AI Assistant. I can help you navigate our services or answer any questions. What brings you here today?”). Immediate, round-the-clock engagement ensures no visitor query goes unanswered, meeting modern expectations for instant support ￼.

2. Onboarding Conversation (Intent & Context Gathering): For first-time users, the assistant will initiate a brief onboarding chat to understand their intent and needs. This may include questions like:
	•	“What are you looking for today?” (Multiple choice or open text: e.g., “Exploring consulting services,” “Looking for industry insights,” “Existing client,” “Other”).
	•	“Which area of our services or what challenge are you interested in?” (If applicable, drill down into service categories or user’s industry/problem).
	•	“Are you interested in speaking with a consultant or just browsing resources?”

Through this conversational survey ￼, the assistant builds a visitor profile (preferences, goals). For example, a visitor might reveal they are a small business owner interested in digital marketing strategy – the assistant would note this to personalize subsequent interactions. (Privacy note: Users can skip any question or end onboarding at any time.)

3. Personalized Content Suggestions: Based on the onboarding info and the page context, the assistant will suggest relevant content:
	•	If the user is interested in “digital marketing strategy,” the assistant might respond: “Thanks! I recommend our case study on Digital Marketing ROI and a blog post on social media strategies. Would you like a quick summary or the links?”. It can provide summaries of relevant webpages or documents on the site, leveraging AI to tailor information to the user’s context.
	•	The assistant is aware of the current page the user is viewing. For example, on the “Services – Strategy Consulting” page, it might say: “I see you’re looking at Strategy Consulting. Do you have any questions about how we approach strategy, or would you like to see related success stories?”. This context awareness makes suggestions feel natural and timely.

4. Intelligent Q&A and Assistance: Users can ask the assistant any questions, from “What services do you offer for tech startups?” to “Do you have experience in the healthcare sector?”. Core capabilities include:
	•	Instant Answers from Website Content: The assistant will retrieve information from FB Consulting’s site (service pages, case studies, FAQs) to answer questions accurately. It uses the Perplexity API’s real-time search to find up-to-date info with source citations ￼, ensuring the responses are grounded in our content (or trusted external sources if needed). For example, if asked about “healthcare sector experience,” the assistant might surface a relevant case study or statistic from our site with a citation.
	•	Document and Image Understanding: Users may upload or reference documents/images during chat (e.g., “Here’s my business overview PDF, can you identify growth opportunities?” or “[uploads an image] Do you offer training like in this diagram?”). Using the Gemini multimodal API, the assistant can analyze PDFs (up to 2M tokens) and images to extract insights ￼. For instance, it can summarize a PDF report the user shares or caption and interpret an image (like a chart or workflow diagram). Gemini’s vision capability means tasks like reading charts or extracting text from an image are possible within the chat ￼ ￼.
	•	Contextual Memory: The assistant will remember previous interactions within a session. This means it can handle follow-up questions and refer back to earlier answers or the information gathered during onboarding. For example, if later in the chat the user asks, “Remind me, what budget did I mention?” or “How does that case study result apply to my situation?”, the assistant can recall those details. (Technical note: Vercel’s AI SDK supports message persistence ￼, enabling conversation history to be maintained through the session or even across visits if we implement persistent user IDs).

5. Lead Generation & Conversion Support: A key goal is to convert engaged visitors into leads:
	•	Call-to-Action Prompts: When the assistant detects a high-intent user (e.g., they ask about pricing, timeline, or explicitly say they want to consult), it will proactively offer next steps. For example: “It sounds like you’re interested in our services. Would you like to schedule a free 30-minute consultation with our team?” or “Can I get your email to send more information or set up a call?”.
	•	Form-less Lead Capture: Instead of making users fill out a form, the assistant will conversationally collect contact details. If the user agrees to a consultation or info, the assistant will ask for their name, email, company, etc., in a friendly manner one question at a time (and only necessary info). This conversational approach lowers friction.
	•	Integration with Contact Channels: Upon capture, the assistant can either (a) trigger an email to the sales team with the lead details, (b) store it in a backend or CRM (future integration), or (c) help schedule a meeting via a calendar link. The user will immediately get a confirmation or scheduling link if appropriate.

6. Multi-Turn Guidance and Navigation: The assistant not only answers questions but can guide users through multi-step tasks. For instance, if a visitor wants to “find a relevant case study and then book a call,” the assistant can handle this flow: first presenting a summary of a case study, then asking “Shall we schedule a meeting to discuss how we can achieve similar results for you?” If the user says yes, proceed to scheduling steps. Each step of the flow is conversational and feels user-driven.

User Flow Summary:
	1.	User Initiates Chat: Either by clicking the chat widget or via proactive prompt.
	2.	Onboarding (if first visit): Assistant asks 2-3 questions to determine user intent and needs (with skip option).
	3.	Personalized Interaction: Based on answers and context, assistant suggests content or awaits user questions. User engages in Q&A freely – assistant provides answers using site knowledge and AI capabilities (search, etc.).
	4.	Lead Prompt: If user exhibits buying signals or after several interactions, assistant offers a CTA (e.g. download a resource, schedule a call).
	5.	Lead Capture: If user agrees, assistant collects contact info and confirms follow-up (or schedules meeting).
	6.	Continuing Conversation: User can continue asking more, or say goodbye. The assistant always offers further help or to restart onboarding if needed.

Throughout, the conversation should feel natural and helpful, akin to a knowledgeable guide rather than a sales rep. The assistant’s tone will be professional, warm, and concise.

Technical Requirements

This section outlines the technical needs and constraints for implementing the AI assistant on the FB Consulting website:
	•	Platform & Integration: The website runs on modern web tech (e.g., Next.js on Vercel). The assistant will be built using the Vercel AI SDK (Chat UI template) to embed a chat widget on the site. The SDK provides a front-end React component for the chat interface and hooks (useChat) for real-time streaming of responses ￼. The assistant UI must be responsive and non-intrusive – e.g., a collapsible chat bubble on mobile and desktop.
	•	AI Provider Services: We will integrate with external AI APIs:
	•	Vercel AI SDK: Provides the UI and also a server-side framework to call AI models or routes. We can use its support for any AI model or provider ￼, routing user messages to our backend logic.
	•	Google Vertex AI – Gemini API: Required for multimodal understanding (image/PDF analysis) and text generation. We need access to the Gemini model (e.g., gemini-2 versions) via Google Cloud. Ensure API quotas for image and text processing are sufficient (Gemini’s high token limit for PDFs up to 2M tokens means large documents are supported ￼, but this could be expensive, so we may impose file size limits for users).
	•	Perplexity AI API: Required for real-time web and site search. The API key for Perplexity’s Sonar model will be needed, and its usage should follow their rate limits ￼. The integration must be secure (no exposure of keys on client side). The assistant should use Perplexity’s chat-completion endpoint which is OpenAI-compatible ￼ – making integration easier. This allows retrieval of up-to-date information with citations ￼.
	•	Context & Data Management:
	•	The system will maintain conversation state. We will use session storage or a lightweight database to store ongoing conversations (especially if we want persistence across page reloads or visits). The Vercel Chat SDK’s template includes message persistence mechanisms ￼ that we can adapt (e.g., storing in Supabase or another DB via API routes).
	•	On each query, the assistant should incorporate relevant context: recent chat history, the visitor’s onboarding profile (if gathered), and possibly the current page’s context. For page context, we can pass the page title or key content as part of the prompt (the site could expose a context snippet to the assistant).
	•	The architecture must guard against loss of conversation context during navigation. Using the SPA nature of Next.js, the chat component can remain mounted across page transitions or rehydrate state from a store so the conversation is uninterrupted.
	•	Performance & Responsiveness:
	•	Latency: Round-trip time for answers should be minimal. Streaming responses (token by token) will be used to give immediate feedback to users while the full answer is generated (the Vercel SDK supports streaming out-of-the-box ￼). Target initial response time under 2 seconds for the first token, and full answer within a few seconds for typical queries.
	•	Concurrency: The system should handle multiple simultaneous user sessions. Each user’s conversation is separate. The backend API should be stateless per request (aside from reading/writing conversation context from storage).
	•	Scalability: We may see spikes during campaigns or events. The solution should scale on Vercel’s serverless infrastructure. We should also watch API usage limits (Perplexity’s rate limit and Google’s quotas) to avoid hitting ceilings. Caching can be implemented for repeated queries or frequently retrieved site content to reduce API calls (e.g., store summaries of common pages).
	•	Security:
	•	All communications must be over HTTPS (including API calls to Gemini and Perplexity).
	•	API keys for third-party services will be stored securely (e.g., Vercel environment variables) and never exposed to the client.
	•	The assistant should sanitize user inputs (to avoid injection attacks in prompt). Although we rely on external LLMs, we will implement basic content filtering or use providers’ content moderation (if available) to avoid inappropriate outputs.
	•	If the user uploads a file/image for analysis, it will be processed by Google’s API – ensure we use secure upload methods (the Vertex API’s file upload mechanism) and delete any temporary stored files after processing. We must also inform the user their file is being sent to the AI API (see Privacy section).
	•	Browser Compatibility: The chat widget should work on modern browsers (Chrome, Firefox, Safari, Edge) and degrade gracefully. If JS is disabled (rare for our target users), the assistant obviously won’t function; this is acceptable, but the site should still be navigable.
	•	Monitoring & Analytics: Implement logging for chat sessions (conversational transcripts, minus sensitive data) to a secure admin area or logging service. This is crucial for debugging and continuously improving the assistant. We will track metrics like: number of chats initiated, completion rate of onboarding, conversion events (lead captures), and common questions asked. These should respect user privacy (e.g., PII should be masked or stored only if user consents).
	•	Fallback Behavior: In case the AI services fail or return an error (e.g., Perplexity API is down or times out), the assistant should handle it gracefully. It might respond with: “I’m sorry, I’m having trouble accessing information right now. Let me try again, or you can reach us via our contact form.”. We’ll implement basic retry logic for API calls and a failsafe FAQ database for critical questions (so the assistant can still answer very basic queries if all else fails).

AI Architecture and API Integration

The AI assistant system will be composed of several interacting components, forming a pipeline for processing user inputs and generating responses. Below is an overview of the architecture and how each API is utilized:

1. Frontend (Vercel AI SDK Chat UI):
	•	The website will include the Chat UI component (likely a React component from Vercel’s AI SDK). This handles:
	•	Displaying the chat interface (chat bubble, conversation window).
	•	Capturing user messages and streaming assistant responses in real-time.
	•	It uses hooks like useChat for stateful messaging and streaming ￼.
	•	The UI can display rich content from the assistant: formatted text, lists, and possibly images (if the assistant provides an image output or we choose to render a chart). For example, if the assistant wants to show a graph from a case study, we could embed it. (Initially, we focus on text; future could include rich media.)

2. Backend Orchestration (Next.js API Route or Edge Function):
	•	When a user sends a message, the frontend calls a backend API (serverless function). This function orchestrates the AI logic:
	•	It receives the user message, session ID, and conversation history (if not stored server-side).
	•	It identifies if this message is part of the onboarding flow or a general query. (Onboarding messages might be handled with predefined logic, e.g., if the last assistant message was an onboarding question, route the user answer into the onboarding state machine).
	•	It performs intent analysis on the user message. This is done via either simple keyword matching or a quick LLM call to classify the query (e.g., categorize if the user’s message looks like a service inquiry, a general question, an upload instruction, etc.). This step ensures we use the right tools for the query.
	•	Logic for API Calls: Based on the analysis, the orchestrator might do one or more of the following:
	•	A) Gemini API Call (Multimodal): If the user message includes an image or document (or references one provided earlier), we leverage Gemini. For example:
	•	If user uploaded a file earlier and then asks a question about it (“What do you think about the attached report?”), we will call Gemini’s generateContent with the file reference and an appropriate prompt (e.g., “Summarize the key points of this document” or “Analyze this image for X”).
	•	Gemini usage: We will choose an appropriate Gemini model (e.g., gemini-2.5-vision if available for images, or a gemini-pro for text) configured via Vertex AI. Gemini can interpret the file and return a text output. This output (e.g., summary or extracted info) is captured for the final answer.
	•	Gemini’s role is specialized: It handles understanding content within images/PDFs that the user supplies or that are part of our knowledge base. Gemini’s multimodal capability means these tasks don’t require separate OCR or domain models ￼.
	•	B) Perplexity API Call (Search & Reasoning): If the query requires external information or knowledge retrieval (e.g., “latest industry trends”, “case studies in healthcare by FB Consulting”), the orchestrator will invoke Perplexity’s chat completion API:
	•	We’ll use the Sonar model family (either sonar for quick search or sonar-pro for more detailed answers). Perplexity’s model will search the web or our site in real-time and return an answer with cited sources ￼. We can specify a search domain filter to focus on our website (e.g., limit to fbconsulting.com domain) when appropriate, ensuring the model pulls from our content for site-specific questions.
	•	Example: User asks, “What are current trends in supply chain management?” – This is a broad question. The assistant will call Perplexity’s API, which will search recent articles or data on supply chain trends and produce a summarized answer with references. The assistant can then present that to the user, possibly with a note like “According to recent data… [source].”
	•	If the user’s question is specifically about FB Consulting (e.g. “What services do you offer for supply chain?”), the Perplexity call can be constrained to our site or known docs. If that content is already indexed in our knowledge base, we might not need a web search – but using Perplexity ensures the most up-to-date information and saves us from manually updating a FAQ if, say, our services page changes ￼.
	•	Technical note: The Perplexity API call will include the conversation context if needed (it can accept a history of messages similar to OpenAI’s format ￼), which could allow follow-up questions to be asked in context. However, we must be mindful of token limits (their models support large context windows, e.g., 100k+ tokens ￼, which is ample for our use).
	•	C) Primary LLM for Response Composition: We have two approaches here, to be decided:
	1.	Use Perplexity API’s response directly for most queries: Perplexity’s model is itself a capable LLM that returns an answer (with citations when it did a search). We could choose to largely rely on it as the backbone for text-based questions. In this case, the assistant’s answer = Perplexity’s answer (possibly lightly formatted). The advantage is the answer is already well-formed and fact-checked via its search. The disadvantage is less control over style/branding of the response (though we can prompt it to use a certain tone).
	2.	Use a Custom Composition via Gemini or another LLM: In this approach, the orchestrator would merge information from various sources (Gemini’s output for a document, Perplexity’s search findings, etc.) and then feed it to a final LLM prompt to generate a cohesive answer in the assistant’s voice. For example, if a user’s query involves both an uploaded document and recent data, we might do: final_answer = LLM([system_prompt with style guidelines], [user query], [Gemini_output], [Perplexity_output]).
	•	This could be done with Gemini itself (as it’s also a powerful text generator) or even OpenAI GPT-4 as a fallback. Since Gemini is state-of-the-art and multimodal, we lean towards using Gemini for final response generation when multi-source info needs synthesis.
	•	The system prompt would ensure the style is consistent (professional, concise, perhaps including a note like “include source references if provided”). The LLM would then produce an answer possibly integrating citations from Perplexity’s data.
	•	We will likely start with approach (1) for simplicity (especially if using Perplexity’s sonar-pro which handles both reasoning and search together ￼), and move to (2) if we need more control.
	•	D) Tool Function Calls: If using the Vercel AI SDK’s agent capabilities, we could implement the above logic as “tools” that the AI can call. For example, define a search(query) function that when called, actually invokes Perplexity. The SDK/AI model (if using OpenAI function-calling or similar) might detect the need for search and call it. However, this requires an LLM that can decide on tool use. We might not need this complexity initially – a rule-based orchestrator can suffice. Future iterations could incorporate a more agentive approach once stable.
	•	Response Assembly: Once the needed data is gathered:
	•	The orchestrator formats the assistant’s reply. If we have a direct answer from Perplexity, ensure it’s phrased in first person as the assistant and perhaps trimmed for brevity. If we have multiple pieces (e.g., a Gemini summary + Perplexity data), we combine them logically (e.g., “Here’s what I found in your document: … In addition, according to recent research: …”).
	•	The answer is then sent back to the frontend, which streams it to the user. If sources are included (e.g., as footnote-style citations like 【source】), the frontend can display them. The UI could even make them clickable so the user sees the reference (this builds trust in the answer’s accuracy).
	•	Architecture Diagram: [Notional, textual] The flow can be summarized as:
	1.	User → (message / file) → Frontend (Vercel Chat UI) → Backend (Next.js API).
	2.	Backend:
	•	If file/image present: call Gemini API → get text understanding.
	•	If info needed: call Perplexity API → get answer or data with citations.
	•	Possibly call LLM to synthesize (if needed).
	3.	Backend → returns final answer → Frontend (streams message to UI).
Throughout, the AI SDK ties the frontend and backend together, handling streaming and providing a unified interface for model calls. It allows using any provider’s models, which aligns with our multi-provider approach ￼.

Error Handling & Timeouts: Each external API call will have a timeout (e.g., if no reply in 5-10 seconds, abort and fallback). The orchestrator should catch errors and either retry or send a graceful failure message. Logging will record if, say, the search failed, so we can address such issues.

Scalability & Future Integration: The architecture is modular:
	•	We can swap out models (e.g., if a new version of Gemini or a cheaper LLM is available) via config.
	•	We can add more tools (like a CRM API call as a “function” when the user agrees to book a meeting).
	•	The AI SDK being open-source and provider-agnostic ￼ means we’re not locked in to one AI service; we have flexibility as the AI landscape evolves.

Onboarding and Personalization Flow

Creating a smooth onboarding flow is crucial for tailoring the user experience. Below is how the assistant will conduct the onboarding and use that data for personalization:

Triggering Onboarding: When a user opens the chat for the first time (or first time in a long while), the assistant will greet and ask if they’d like personalized help:
	•	Assistant: “Hi there! I’m Ava, the AI assistant for FB Consulting. I can guide you through our site or answer questions. To help me assist you better, can I ask a couple of quick questions about what you’re looking for today?”
	•	If the user accepts (most will, if phrased casually), proceed to questions. If the user says “No” or asks a direct question instead, the assistant will gracefully skip onboarding and directly help, remaining available to personalize later if needed.

Onboarding Questions Logic: We will design 2-4 concise questions. These might be:
	1.	Intent Question: “What brings you to our site?” with suggested answers as buttons (e.g., “🚀 Looking for consulting services”, “📖 Researching industry insights”, “💼 Interested in careers”, “Other”). The user can click an option or type a response.
	•	Personalization use: This categorizes the user. If they choose careers, the assistant will pivot to provide HR/careers info rather than sales content. If “consulting services”, we proceed to Q2.
	2.	Needs/Interest Question: (If services) “Great! Which area are you interested in?” Possibly present key service categories or let them describe their challenge. E.g., options: “Marketing Strategy”, “IT Transformation”, “Not sure, need guidance”, etc. If the user types a custom need, the assistant will parse it (the LLM can summarize it into a category or note the key pain point).
	•	Use: Identify the service line or content that’s most relevant. This could map to internal keywords (for retrieval later, like if they said “digital marketing”, tag them with interest = Marketing).
	3.	Company Role/Size (Optional): For potential clients, it might ask “To give the most relevant examples, do you mind sharing your business size or your role?” e.g., options: “Startup (1-50 employees)”, “Small/Med Business (50-500)”, “Enterprise (500+)” and role: “Founder/CEO”, “Product Manager”, etc. This question is sensitive, so we make it optional or infer from context if possible. We might omit this in initial launch to reduce friction.
	4.	Goal Question: “What would make your visit successful today?” (If not already clear) – e.g. “Find a solution for X”, “Learn about your approach”, “Schedule a call”, etc. This is open-ended but gives the user a chance to express a specific goal. The assistant can later check if that goal was met (“Did we answer what you needed about X?”).

We will keep onboarding brief – ideally under 1 minute to complete. Each answer the user gives is stored in their profile context (in memory for that session, and possibly in local storage if we want to reuse on return visits, subject to consent).

Personalization During Session: Once onboarding is done (or skipped), the assistant will use that info actively:
	•	Dynamic Responses: The assistant’s answers and suggestions consider the user’s intent. If the user indicated interest in “Marketing Strategy”, the assistant will tailor examples to marketing in responses. For instance, if asked “How can you help me?”, the assistant might respond: “We have a dedicated Marketing Strategy team that has helped clients increase ROI by X%. For a company like yours (Startup), we often start with a quick audit of your digital presence. Would you like to see a case study relevant to your industry?” – Notice how it injects their interest (marketing) and perhaps their company size context (if known).
	•	Content Curation: The assistant’s suggestions (like links or resources) are filtered by relevance. It won’t overload with irrelevant info. If someone is researching industry insights, it will focus on blog posts, whitepapers, reports. If someone is evaluating services, it will highlight service pages, client testimonials, and invite contact.
	•	Tone Adaptation: While the assistant maintains a professional tone, it can subtly adjust formality or depth based on the user’s profile. A tech startup founder might get a more casual, fast-paced tone and maybe an offer to delve into technical details, whereas a corporate executive might get a slightly more formal tone with high-level summary and the suggestion of a formal proposal. (This would be achieved by setting some tone parameters in the prompt based on persona.)

Personalization Across Visits:
	•	Ideally, if the user returns (and allows cookies or login), the assistant can recognize them. For example, store a cookie with an identifier and minimal profile (non-PII like their interest). Next visit, the assistant could greet: “Welcome back! Last time we talked about marketing strategy. Do you want to continue where we left off or explore something new?”. This requires storing conversation context or at least the profile persistently (opt-in).
	•	We will implement this carefully to respect privacy. Possibly prompt returning users: “I can recall our past conversation to better assist you, with your permission.”

Lead Generation within Conversation: Personalization helps with conversion:
	•	If we know the user’s interest and company size, the assistant can say “We actually have a free e-book on [their interest] for [their segment] – would you like a copy?”. If yes, we then ask for an email to send it. This turns into a lead magnet flow, all within chat.
	•	The assistant can also time its lead capture attempt. For example, after answering a few questions or providing value, it might say “Let us know if you’d like to discuss how FB Consulting can help [solve their stated goal]. I can arrange a call or provide more info.” This feels personalized rather than a generic sales pitch.

Handling Non-Prospective Clients: If the user indicated “Interested in careers” during onboarding, the assistant will switch context:
	•	It may provide info on open positions or how to apply, rather than marketing content.
	•	It might even offer to answer questions about company culture or hiring process, pulling from an internal FAQ for HR.
	•	Lead generation in this case is not a sales lead but could be capturing their email to notify of job openings, etc., but that’s beyond our current scope. At minimum, it directs them to the Careers page or HR contact.

Graceful Degradation: If a user doesn’t engage with onboarding and jumps straight to asking questions, the assistant will handle that naturally. It won’t force the preset questions, but it might still implicitly gather info. For example, if a user asks, “What can you do for a small retail business?”, the assistant has already learned something (user has a small retail business) – it can treat that as if the user answered the onboarding questions about company size and industry. So even without the formal Q&A, personalization can occur by parsing whatever the user says.

Completion of Onboarding: After onboarding Qs, the assistant will say something like: “Thanks for sharing! I have a good idea of what you need. Feel free to ask me anything or type a keyword (like ‘marketing’) to see relevant resources.”. This acknowledges the info and transitions to open conversation.

We will design the onboarding script carefully to avoid feeling like a form. It should feel like a helpful concierge. As noted in research, “A well-designed chatbot adapts to customers’ preferences… by collecting necessary information about the customer’s preferences and getting insights into what works best for them” ￼. Our onboarding is exactly to gather those preferences so the rest of the interaction is high-value and user-specific.

Privacy and Consent Handling

Given the sensitive nature of personal data and the use of external AI services, privacy and consent are paramount. This section details how the assistant will handle user data and obtain consent:

Transparency with Users:
	•	When the chat is first opened, the assistant’s opening message or UI will include a brief disclosure: e.g., “Note: I’m an AI assistant. Your inputs may be processed by our AI services to help answer you.” This lets the user know AI (not a human) is responding. We will also include a link like “Privacy Policy” or an info (i) icon that when clicked explains data usage in more detail (without overwhelming the chat flow).
	•	If the user asks directly about privacy (“How do you use my data?”), the assistant is prepared with a concise answer: “Your privacy is important. I only use your data to generate responses and help you on our site. We don’t store your personal info unless you provide it for follow-up, and we don’t share conversation logs externally.” (with a prompt to read full policy).

Consent for Personal Data & Follow-ups:
	•	Onboarding Data: The questions we ask (like interests, role) should be framed as optional. If a user is uncomfortable, they can skip. We are not asking for personally identifiable info (PII) in onboarding except perhaps role or company size which are not specific identifiers.
	•	Lead Information: When the assistant moves to capture contact details (email/phone/name), it will explicitly ask for consent. For example: “I can arrange a consultation. To do that, I’ll need to collect your email or phone number. Is that okay?”. Only upon the user confirming do we proceed to ask for the details. If the user provides an email, that itself is an implicit consent to be contacted, but we will still confirm: “Thank you, we (or our consultant) will reach out to you at [email]. We will only use this information to follow up on your request.”.
	•	We’ll ensure compliance with regulations like GDPR for EU users: e.g., provide a way to request deletion of their data or not use it beyond the chat. If needed, we can add a checkbox like “I agree to the use of my data as explained” before finalizing a lead capture, though this might be handled in the privacy policy acceptance at site level.

Data Storage and Retention:
	•	Conversation Logs: By default, the content of chats will be stored transiently (in memory or temporary storage) for the purpose of maintaining context. We plan to log conversations for internal improvement, but these logs will anonymize personal data. For instance, if a user shares their name or email, our logging system should mask or hash those fields. We will not store full chat transcripts tied to identifiable users without permission.
	•	External API Data Handling:
	•	Perplexity API: According to Perplexity’s documentation, they do not retain query data or use it for training ￼ ￼. This is good for privacy; we should still inform users that their questions might be sent to a third-party AI for searching information. The integration with Perplexity should be covered under our privacy policy (stating we use it to fetch information).
	•	Gemini API (Google): Data sent to Google’s Vertex AI could be processed and possibly logged by Google (but Google typically provides enterprise assurances like not using data for training if using paid plans). We will use Vertex AI under terms that ensure data is not retained or is protected. We should mention that if a user uploads a file for analysis, it will be processed by Google’s AI. Possibly a one-time prompt like “You are about to share this file with our AI for analysis. No one else will see it, and it won’t be stored after this session. Continue?”. This gives explicit consent for analyzing their document.
	•	We will abide by the principle of data minimization: only collect what’s needed for functionality. For example, if a user doesn’t go into lead capture, we won’t ask for email. If they just ask questions, their chat content is ephemeral.

Opt-Out and Data Deletion:
	•	The chat interface will provide a “Clear conversation” option. When clicked, it wipes the local conversation history and any associated profile data in that session. The assistant will then start fresh. This ensures the user can purge their data easily on the client side.
	•	For persistent profiles (returning users scenario), we will ask for opt-in (“Remember me”). If they opt in to a remembered profile, we’ll store maybe a user ID cookie and their preferences. If they want to opt-out later, we’ll offer a command like “forget me” in chat that erases that cookie and any saved profile on our side.
	•	If a user requests deletion of their data (via chat or contact), we will comply by deleting any stored transcripts or lead info associated with them, as per GDPR “right to be forgotten”.

Compliance and Content Moderation:
	•	We will integrate content moderation checks on user inputs if necessary to filter out sensitive personal data or abusive content to avoid the AI generating problematic responses. While Perplexity’s API is “uncensored” and not moderated on their side ￼, we should ensure the assistant doesn’t produce inappropriate content. The system prompt to the AI will include guidelines to refuse certain requests (e.g., legal advice, hate, personal data about others, etc.). This is more a safety measure than privacy, but it overlaps (ensuring we don’t accidentally output someone else’s private info or defamatory content).
	•	If the AI ever needs to store something like a user’s email for CRM, that transfer will be done securely, and the user will be informed. Our privacy policy (link provided in UI) will detail all such cases.

User Testing for Privacy Comfort: In development, we plan to test the onboarding and lead capture flow with a few users to ensure the tone of asking for info feels comfortable and not intrusive. We will refine wording if users express hesitation.

In summary, user trust is critical. By being transparent about AI usage, limiting data storage, and giving users control (consent and clear data), we aim to make the assistant helpful but not creepy. All privacy measures will be clearly documented and approved by our compliance team before launch.

Development Phases

To implement this AI assistant thoroughly, we will proceed in iterative phases, ensuring core functionality is delivered early and advanced features are added in steps. Below is a breakdown of development phases with key milestones:

Phase 1: Prototype & MVP (Month 1-2)
	•	Setup & Infrastructure: Initialize the project with the Vercel AI SDK and Next.js. Get the basic chat interface working on the site in a test environment.
	•	Basic Q&A Capability: Integrate a baseline AI model for text (could be a simple OpenAI GPT-4 or an initial config of Perplexity’s API). At this stage, even a static FAQ retrieval or GPT-4 with our company info in the prompt could suffice to test flow.
	•	Simple Onboarding Flow: Implement a rudimentary onboarding: one question about intent, and use that to adjust a greeting or a single suggestion. The logic can be basic conditional without full AI understanding.
	•	No External Search (MVP Simplification): Initially, the assistant might rely on a small curated knowledge base (e.g., few key pages content stored as context) to answer questions. This reduces complexity while prototyping.
	•	Lead Form Handoff: As a placeholder, if user wants to contact, just provide a link to contact page or simple form (we’ll integrate actual capture in next phase).
	•	Testing: Internal testing with team members to gather feedback on the interface, latency, and any obvious AI quirks. No real user data yet, so minimal privacy concerns at this point.

Phase 2: Enhanced AI Integration (Month 3-4)
	•	Integrate Perplexity API: Replace or augment the basic Q&A with Perplexity’s real-time model for significantly better answers. This includes coding the backend orchestration to call Perplexity for user queries and properly handling streaming responses. We will test domain-restricted searches to ensure it pulls from our content where appropriate.
	•	Integrate Gemini Multimodal: Enable file/image upload in the chat. Use Google’s Gemini API for processing uploads and incorporate its output in responses. Initially, perhaps support only one file at a time and types like PDF and JPEG. We’ll implement the UI for file upload in the chat interface and the backend to handle the file (upload to Vertex AI and get results). Test with sample docs (like one of our whitepapers) to see that summaries are accurate.
	•	Full Onboarding Dialog: Expand the onboarding script to the planned 2-4 questions. Implement state management for the onboarding (so the assistant knows which question it’s on, etc.). This may involve a simple state machine or using conversation memory with a system tag like “onboarding_stage”.
	•	Personalization Engine: After onboarding, ensure that the collected data actually affects the assistant’s behavior. For now, this can be rule-based: e.g., if interest = “Marketing”, prepend any user question with context like “User is interested in Marketing.” in the prompt to the AI, or fetch relevant content proactively. Fine-tune as needed so that the changes in responses are meaningful.
	•	Lead Capture Conversational Flow: Instead of linking a form, now implement the chatbot asking for email/phone in chat and storing it. At this stage, if we don’t have CRM integration yet, we can simply email the details to our sales or store in a secure database table. Ensure confirmation messages are sent to user. Also, handle validation (e.g., if email format is wrong, prompt again politely).
	•	UI/UX Improvements: Add typing indicators (“Assistant is thinking…”), the option to minimize chat, and any branding (company logo or avatar for the assistant). Also, begin including small source citations in answers where appropriate (especially from Perplexity outputs) to test how it looks and if users find it useful.
	•	Internal Demo & Review: At end of Phase 2, we should have a functional assistant that team members can interact with realistically. We’ll conduct a demo for stakeholders, gather feedback, and likely iterate on the onboarding questions or tone based on this feedback.

Phase 3: Pilot Launch (Month 5)
	•	Soft Launch on Site: Enable the assistant for a subset of site visitors (or during off-peak hours) to monitor usage. Alternatively, a beta launch where it’s available but perhaps not heavily advertised at first.
	•	Analytics & Monitoring: Set up dashboards for key metrics (engagement rate, drop-off rate at onboarding, number of questions asked, conversion rate to leads). Closely monitor API usage and costs as real users start using it.
	•	Refinement: Based on pilot data:
	•	Adjust the onboarding if users are dropping off at a certain question (maybe simplify or reword it).
	•	Refine the AI prompts if we see irrelevant or off-brand answers. Possibly add more company-specific grounding data to the prompt if needed.
	•	Fix any technical issues (e.g., if the file upload fails on certain file types, or if the search sometimes gives wrong domain info).
	•	Scalability & Robustness: Optimize any slow points. If Perplexity calls are too slow, consider using a smaller model for simple FAQs. Implement caching for popular queries (so the second time a user asks something common, it’s near-instant).
	•	Security Audit: Do a review of the system for any security holes before full launch. E.g., ensure API keys are secure, user-uploaded files don’t remain on server, and conversation logs are properly stored.
	•	Content Moderation Check: Run some tests with potentially problematic inputs to see how the assistant responds (e.g., profanity, or asking for disallowed content). Ensure it responds within content guidelines.

Phase 4: Full Launch & Knowledge Expansion (Month 6)
	•	Full Deployment: Make the assistant live for all users. Announce it on the website (maybe a banner: “Need help? Ask our new AI Assistant Ava.”).
	•	Knowledge Base Expansion: Feed more data into the assistant’s arsenal. This could mean integrating a vector database of all site content so that even if Perplexity isn’t used, the assistant has context. Or it could mean adding more structured data (like if we have a database of past projects or metrics, ensure the assistant can access those).
	•	Multi-turn Deep Conversations: By now, we expect some users to engage in longer chats. Fine-tune the experience for longer sessions: ensure the model doesn’t lose context or start looping. Possibly summarize older parts of the conversation to itself to keep context window small.
	•	Gather Feedback: Provide a way for users to rate the chat or provide feedback after an interaction. Even a simple thumbs up/down can help identify sessions to review. Incorporate this feedback into continual prompt tuning or FAQ additions.
	•	Marketing Alignment: Work with sales/marketing to ensure the assistant’s answers align with current messaging. If new services launch or promotions, update the assistant’s knowledge or prompt to include those.
	•	Maintenance Plan: Establish who on the team monitors the assistant’s performance and updates it. For example, assign a team member to review transcripts weekly to identify any incorrect answers or opportunities to improve the assistant’s knowledge.

Each phase builds upon the previous, reducing risk by testing incrementally. By Phase 4, we should have a robust, well-calibrated AI assistant. The timeline above is a rough estimate; we will remain flexible and potentially overlap some tasks or extend as needed (especially integration tasks which might take more time).

Future Extensions

Looking beyond the initial implementation, there are several enhancements and extensions we can pursue to make the AI assistant even more powerful and integrated into FB Consulting’s workflows:

1. Voice Interface:
	•	Voice Input & Output: Enable users to speak their questions to the assistant and/or have the assistant read out responses. This can improve accessibility and user convenience. Technically, we would integrate a speech-to-text service (like Web Speech API or a cloud STT service) to convert the user’s voice query into text for the AI. For the assistant’s reply, integrate a text-to-speech (TTS) engine (perhaps Google’s WaveNet via the browser or an AWS Polly) to produce a natural sounding voice.
	•	The UI would need a microphone button to start/stop listening and possibly an audio widget for the assistant’s spoken response. This is feasible using browser APIs and would make the experience more interactive, almost like a smart assistant.
	•	We’d also consider a voice persona for Ava that matches our brand – likely friendly and professional. Ensuring correct pronunciation of industry terms or company-specific jargon will be part of this effort.
	•	Voice features should be opt-in (some users prefer silence). And we must handle accents and languages appropriately – possibly starting with English voice only, then expanding.

2. Multilingual Support:
	•	As FB Consulting attracts global clients, making the assistant multilingual could greatly enhance user experience for non-English speakers. We could leverage the underlying models’ capabilities or add translation layers.
	•	Approach: Detect the user’s browser language or initial message language. If, say, the user greets in Spanish, the assistant can switch to Spanish. Services like Google’s translation API or using a multilingual LLM (Gemini or others often support multiple languages) could enable this.
	•	We would need to have key content (like pages or case studies) available in those languages or be confident in AI translating on the fly. Likely, we start with a few major languages (Spanish, French, etc.) and test accuracy. The Perplexity API might also support multilingual queries for search.
	•	UI changes: perhaps a language toggle in the chat or an initial query “¿Prefiere continuar en Español?” if we detect the user might be Spanish-speaking.

3. CRM Integration:
	•	To fully close the loop on lead generation, integrating with a CRM (Salesforce, HubSpot, etc. depending on what FB Consulting uses) will be critical. This would allow:
	•	Automatic creation of a lead entry when the assistant captures contact info, including transcript highlights (e.g., what they were interested in, their questions).
	•	Tagging the lead as coming from “Website AI Assistant” for attribution.
	•	Possibly scheduling follow-up tasks for sales reps.
	•	Technical Implementation: Use the CRM’s API or Zapier. For example, when the chatbot conversation ends with a successful lead capture, our backend can call Salesforce API to create a new Lead with name, email, and a note (like “AI chat summary: Interested in marketing consulting for a startup, requested meeting.”). We’ll ensure only after user consent this happens.
	•	We might also integrate a scheduling tool: e.g., use Calendly’s API to schedule meetings directly. The assistant could propose time slots and book it, then put the meeting on a calendar and send invites. This kind of integration would streamline the handoff from chat to real-world meeting.

4. Deeper Personalization with CRM Data:
	•	Once CRM integration exists, if a known contact comes to the site (perhaps identified by a cookie or if they log in to a portal), the assistant could pull info from CRM to personalize the chat. For instance, “Hi Alex, welcome back! How is your project going? Need any new assistance?” This bridges the gap between marketing site and client relations.
	•	This would require careful handling of personal data and only if the user is authenticated or explicitly identified – it’s a more distant future feature due to privacy considerations.

5. Integration with Internal Knowledge & Tools:
	•	Internal Document Access: Extend the assistant’s knowledge beyond public website content to internal knowledge bases (with proper access control). For example, an authenticated client could ask about their project status, and the assistant could retrieve data from internal project management systems. This moves towards a client support chatbot.
	•	Analytic Tools Integration: The assistant could potentially run simple analyses or calculations if integrated with tools (for example, if the user provides some data or asks for an ROI calculation, the assistant could execute a small script or use a tool, given the Vercel SDK even allows in-browser code execution for chatbots ￼).
	•	Plugins/Extensions: As the AI ecosystem evolves, we could plug into new APIs – e.g., a data visualization API to let the assistant return charts, or a knowledge graph for more structured Q&A about the company.

6. Improved AI Reasoning & Cost Optimization:
	•	Continuously evaluate newer models (OpenAI, Anthropic, etc.) and possibly fine-tune a smaller model on our data to reduce reliance on expensive API calls. A future extension could be to host a fine-tuned model that knows FB Consulting’s content by heart (reducing the need to hit search API for common queries).
	•	We could implement a hybrid: use a local model for very frequent simple questions and reserve the heavy API calls for complex or unique queries. This would cut costs and latency.

7. Omnichannel Deployment:
	•	Extend the assistant to other channels: e.g., integrate it into FB Consulting’s Facebook Messenger, WhatsApp (via bot API), or Slack (for clients who use Slack connect). The core logic would remain the same, but we’d create connectors to these platforms. Users could then interact with “Ava” on their preferred platform, and it would tap into the same brain.
	•	Similarly, possibly embed the assistant in the company’s mobile app if one exists.

Each future extension will require its own design and testing, especially voice and multilingual support (which affect the user interface and experience significantly).

Prioritization likely starts with CRM integration (since that directly ties to business value by streamlining lead capture) and then voice/multilingual for improved UX.

We will maintain the system’s modularity to accommodate these features. For example, adding voice is mostly an addition on the client side with minor backend changes; CRM integration is a contained module in backend after lead capture.

In summary, this PRD outlines a comprehensive plan for an AI assistant that not only handles FAQs but truly engages and guides website visitors. By leveraging cutting-edge AI (Gemini’s multimodal understanding and Perplexity’s real-time knowledge ￼ ￼) combined with thoughtful design (onboarding, personalization, privacy), FB Consulting can provide a standout digital experience. The development will be phased to manage complexity, with future enhancements keeping the assistant at the forefront of innovation – possibly evolving into a full-fledged virtual consultant for the company in the long run.