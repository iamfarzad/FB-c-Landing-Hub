'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ChatInterface from '@/components/chatbot/ChatInterface';
import { X } from 'lucide-react';
import { CHATBOT_ICON as ChatbotIcon } from '@/lib/constants';
import { chatEventBus, OPEN_CHAT_EVENT } from '@/lib/event-bus';


export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
    };

    chatEventBus.on(OPEN_CHAT_EVENT, handleOpenChat);

    return () => {
      chatEventBus.off(OPEN_CHAT_EVENT, handleOpenChat);
    };
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="default" // Uses primary color by default from ShadCN button variants
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl z-50 bg-primary hover:bg-primary/90 text-primary-foreground"
          aria-label={isOpen ? "Close chat" : "Open chat"}
          onClick={() => setIsOpen(!isOpen)} // Ensure direct click also toggles
        >
          {isOpen ? <X className="h-7 w-7" /> : <ChatbotIcon className="h-7 w-7" />}
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-md p-0 flex flex-col shadow-2xl" // Added shadow for better depth
        onInteractOutside={(e) => {
          // Allow closing by clicking outside if preferred, or keep it non-closable
          // e.preventDefault(); // Uncomment to prevent closing on outside click
        }}
      >
        <ChatInterface />
      </SheetContent>
    </Sheet>
  );
}
