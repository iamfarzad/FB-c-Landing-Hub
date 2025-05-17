
'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { useChat, type UIMessage } from '@ai-sdk/react';
import { 
  Send, 
  Sparkles, 
  Check, 
  MoreHorizontal, 
  RefreshCcw, 
  ArrowUp, 
  Paperclip, 
  LinkIcon as LucideLinkIcon, // Renamed to avoid conflict if any
  Search as SearchIcon,
  Bot,
  User,
  Loader2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateUUID, cn } from '@/lib/utils'; // Ensure cn is imported
import { PreviewAttachment } from './PreviewAttachment'; // Assuming PreviewAttachment is in the same directory
import { SuggestedActions } from './SuggestedActions';   // Assuming SuggestedActions is in the same directory
import type { Attachment } from 'ai'; // Core Attachment type from Vercel AI SDK

// This type might need to be defined or imported if it's specific
// type VisibilityType = 'private' | 'public'; 

export default function ChatInterface() {
  const { toast } = useToast();
  const [chatId] = useState(() => generateUUID()); // Generate chatId once
  // const [selectedVisibilityType, setSelectedVisibilityType] = useState<VisibilityType>('private'); // Example state for visibility
  const [attachments, setAttachments] = useState<Attachment[]>([]);


  const { messages, input, handleInputChange, handleSubmit, isLoading, error, append, stop, setMessages } = useChat({
    api: '/api/chat', // Your chat API endpoint
    id: chatId,
    initialMessages: [{id: 'initial-bot-greeting', role: 'assistant', content: "Hello! How can I help you with your AI needs today?"}],
    // experimental_attachments: attachments, // This needs to be handled in handleSubmit options
    onError: (err) => {
      toast({
        title: 'Chat Error',
        description: err.message || 'An unexpected error occurred.',
        variant: 'destructive',
      });
    },
  });

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isLoading]);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e, {
      experimental_attachments: attachments.length > 0 ? attachments : undefined,
    });
    setAttachments([]); // Clear attachments after sending
  };
  
  // Placeholder for file handling - you'd implement actual upload logic
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      // Simulate upload and add to attachments state
      const newAttachments: Attachment[] = files.map(file => ({
        name: file.name,
        contentType: file.type,
        url: URL.createObjectURL(file), // Placeholder URL
      }));
      setAttachments(prev => [...prev, ...newAttachments]);
      toast({ title: `${files.length} file(s) ready to attach.` });
    }
  };


  return (
    <div className="flex flex-col h-full bg-card shadow-xl rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-lg">Ask AI</h3>
          <Badge variant="outline" className="text-xs">Q&A Beta</Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" aria-label="Save chat">
            <Check className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="More options">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4 space-y-4" ref={scrollAreaRef}>
        {messages.map((msg, index) => (
          <div key={msg.id || index}>
            {index === 0 || (new Date(msg.createdAt || Date.now()).toDateString() !== new Date(messages[index-1].createdAt || Date.now()).toDateString()) && (
              <div className="text-center text-xs text-muted-foreground my-2">
                {new Date(msg.createdAt || Date.now()).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })} {new Date(msg.createdAt || Date.now()).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })}
              </div>
            )}
            <div
              className={`flex items-end space-x-2 mb-2 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={cn(
                  "max-w-[70%] rounded-xl px-3 py-2 text-sm whitespace-pre-wrap",
                  msg.role === 'user' ? 'bg-muted text-muted-foreground' : 'bg-card text-card-foreground border',
                  isLoading && msg.id === messages[messages.length -1].id && 'opacity-50'
                )}
              >
                {msg.content}
                 {msg.experimental_attachments && msg.experimental_attachments.map((att, idx) => (
                   <div key={idx} className="mt-2">
                     <img src={att.url} alt={att.name || 'attachment'} className="max-w-xs rounded" />
                     <p className="text-xs text-muted-foreground">{att.name}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        ))}
         {isLoading && messages[messages.length-1]?.role === 'user' && (
          <div className="flex justify-start space-x-2">
            <div className="bg-card text-card-foreground rounded-xl px-3 py-2 text-sm border">
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
            </div>
          </div>
        )}
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t bg-background">
        <form onSubmit={onFormSubmit} className="space-y-3">
          <div className="flex items-center space-x-2">
            <Input
              ref={inputRef}
              type="text"
              placeholder="Ask a question about this answer"
              value={input}
              onChange={handleInputChange}
              disabled={isLoading}
              className="flex-1 rounded-md py-2 px-3 text-sm"
              aria-label="Chat input"
            />
            {/* Placeholder icons */}
            <Button variant="ghost" size="icon" type="button" disabled={isLoading} aria-label="Regenerate response">
              <RefreshCcw className="h-4 w-4 text-muted-foreground" />
            </Button>
             <Button variant="ghost" size="icon" type="button" disabled={isLoading} aria-label="Scroll up">
              <ArrowUp className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
               <Button variant="ghost" size="icon" type="button" onClick={() => document.getElementById('file-upload-input')?.click()} disabled={isLoading} aria-label="Attach file">
                <Paperclip className="h-4 w-4 text-muted-foreground" />
              </Button>
              <input type="file" id="file-upload-input" multiple onChange={handleFileChange} className="hidden" />
              <Button variant="ghost" size="icon" type="button" disabled={isLoading} aria-label="Add link">
                <LucideLinkIcon className="h-4 w-4 text-muted-foreground" />
              </Button>
              <Button variant="ghost" size="icon" type="button" disabled={isLoading} aria-label="Search context">
                <SearchIcon className="h-4 w-4 text-muted-foreground" />
              </Button>
              <Badge variant="secondary" className="text-xs">Speed</Badge>
            </div>
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowUp className="h-4 w-4" />}
              <span className="sr-only">Send message</span>
            </Button>
          </div>
           <div className="text-xs text-muted-foreground text-center">esc to close</div>
        </form>
         {attachments.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {attachments.map((att, idx) => (
              <PreviewAttachment key={idx} attachment={att} onRemove={() => setAttachments(prev => prev.filter((_, i) => i !== idx))} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Minimal PreviewAttachment component if not already defined elsewhere
// This should ideally be in its own file, e.g., src/components/chatbot/PreviewAttachment.tsx
// const PreviewAttachment = ({ attachment, onRemove }: { attachment: Attachment; onRemove?: () => void }) => (
//   <div className="relative group p-1 border rounded-md bg-muted text-xs">
//     {attachment.contentType?.startsWith('image/') && (
//       <img src={attachment.url} alt={attachment.name || 'attachment'} className="h-12 w-12 object-cover rounded" />
//     )}
//     <p className="truncate max-w-[100px]">{attachment.name || 'attachment'}</p>
//     {onRemove && (
//       <Button variant="ghost" size="icon" className="absolute top-0 right-0 h-4 w-4 opacity-0 group-hover:opacity-100" onClick={onRemove}>
//         <X className="h-3 w-3" />
//       </Button>
//     )}
//   </div>
// );
//
// Minimal SuggestedActions component if not already defined elsewhere
// This should ideally be in its own file, e.g., src/components/chatbot/SuggestedActions.tsx
// const SuggestedActions = ({ append }: { append: (message: Omit<UIMessage, 'id'>) => void }) => {
//   const suggestions = ["What is AI?", "How can AI help my business?"];
//   return (
//     <div className="flex flex-wrap gap-2 mb-2">
//       {suggestions.map((s, i) => (
//         <Button key={i} variant="outline" size="sm" onClick={() => append({ role: 'user', content: s })}>
//           {s}
//         </Button>
//       ))}
//     </div>
//   );
// };

