'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, User, Bot, Loader2 } from 'lucide-react';
import { generateChatbotProposal, type ChatbotProposalInput } from '@/ai/flows/chatbot-proposal';
import { useToast } from '@/hooks/use-toast';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
};

enum ConversationStep {
  ASK_NAME,
  ASK_EMAIL,
  ASK_COMPANY,
  ASK_NEEDS,
  SHOW_PROPOSAL,
  ENDED,
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<ConversationStep>(ConversationStep.ASK_NAME);
  const [userData, setUserData] = useState<Partial<ChatbotProposalInput>>({});
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Auto scroll to bottom
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    // Initial bot message
    if (messages.length === 0) {
      addBotMessage("Hi! I'm Farzad's AI assistant. What's your name?");
    }
  }, [messages.length]);
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStep]);


  const addBotMessage = (text: string) => {
    setMessages((prev) => [...prev, { id: Date.now().toString(), text, sender: 'bot' }]);
  };

  const handleSendMessage = async (e?: FormEvent) => {
    e?.preventDefault();
    if (!input.trim() && currentStep !== ConversationStep.ASK_COMPANY) return; // Allow empty for optional company

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { id: Date.now().toString(), text: userMessage, sender: 'user' }]);
    setInput('');
    setIsLoading(true);

    try {
      switch (currentStep) {
        case ConversationStep.ASK_NAME:
          setUserData(prev => ({ ...prev, userName: userMessage }));
          addBotMessage(`Nice to meet you, ${userMessage}! What's your email?`);
          setCurrentStep(ConversationStep.ASK_EMAIL);
          break;
        case ConversationStep.ASK_EMAIL:
          if (!isValidEmail(userMessage)) {
            addBotMessage("That doesn't look like a valid email. Could you please try again?");
            // Stay on ASK_EMAIL step
            break;
          }
          setUserData(prev => ({ ...prev, userEmail: userMessage }));
          addBotMessage("Thanks! Are you looking for help with a specific company or industry? (Optional, press Enter to skip)");
          setCurrentStep(ConversationStep.ASK_COMPANY);
          break;
        case ConversationStep.ASK_COMPANY:
          setUserData(prev => ({ ...prev, companyInfo: userMessage || undefined }));
          addBotMessage("Great! Can you tell me a bit about your needs or what you're hoping to achieve?");
          setCurrentStep(ConversationStep.ASK_NEEDS);
          break;
        case ConversationStep.ASK_NEEDS:
          setUserData(prev => ({ ...prev, needsSummary: userMessage }));
          addBotMessage("Thanks for sharing! I'm generating a tailored proposal for you now...");
          setCurrentStep(ConversationStep.SHOW_PROPOSAL);
          
          const proposalInput = userData as ChatbotProposalInput;
          proposalInput.needsSummary = userMessage; // ensure latest needs summary is used

          const result = await generateChatbotProposal(proposalInput);
          addBotMessage(`Here's a tailored proposal for you:\n\n${result.proposal}`);
          addBotMessage("Is there anything else I can help you with today?");
          setCurrentStep(ConversationStep.ENDED);
          break;
        case ConversationStep.ENDED:
            if (userMessage.toLowerCase().includes("yes")) {
                 addBotMessage("Great! What else can I help you with?");
                 setCurrentStep(ConversationStep.ASK_NEEDS); // Or a more general state
            } else {
                addBotMessage("Alright! Have a great day. Feel free to reach out if you need anything else.");
            }
            break;
      }
    } catch (error) {
      console.error("Chatbot error:", error);
      addBotMessage("Sorry, I encountered an error. Please try again later.");
      toast({
        title: "Chatbot Error",
        description: "Could not process your request.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const isValidEmail = (email: string) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="flex flex-col h-full bg-card shadow-xl rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="font-semibold text-lg text-center">Chat with FarzadBayat.ai Assistant</h3>
      </div>
      <ScrollArea className="flex-1 p-4 space-y-4" ref={scrollAreaRef}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end space-x-2 ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender === 'bot' && (
              <Avatar className="h-8 w-8">
                <AvatarFallback><Bot size={20} /></AvatarFallback>
              </Avatar>
            )}
            <div
              className={`max-w-[70%] rounded-lg px-3 py-2 text-sm whitespace-pre-wrap ${
                msg.sender === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {msg.text}
            </div>
            {msg.sender === 'user' && (
              <Avatar className="h-8 w-8">
                <AvatarFallback><User size={20}/></AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        {isLoading && currentStep !== ConversationStep.SHOW_PROPOSAL && (
          <div className="flex justify-start space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback><Bot size={20}/></AvatarFallback>
            </Avatar>
            <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2 text-sm">
              <Loader2 className="h-5 w-5 animate-spin" />
            </div>
          </div>
        )}
      </ScrollArea>
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <Input
            ref={inputRef}
            type="text"
            placeholder={currentStep === ConversationStep.ENDED ? "Type your response..." : "Type your message..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading || currentStep === ConversationStep.SHOW_PROPOSAL}
            className="flex-1"
            aria-label="Chat input"
          />
          <Button type="submit" size="icon" disabled={isLoading || (currentStep !== ConversationStep.ASK_COMPANY && !input.trim())}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
