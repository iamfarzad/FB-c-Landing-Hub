
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl z-50 bg-primary hover:bg-primary/90 text-primary-foreground"
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          {isOpen ? <X className="h-7 w-7" /> : <ChatbotIcon className="h-7 w-7" />}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-md p-0 flex flex-col shadow-2xl h-[70vh] md:h-[80vh] md:max-w-lg lg:max-w-xl">
        {/* DialogContent is styled to be a centered modal with max width and height */}
        <ChatInterface />
      </DialogContent>
    </Dialog>
  );
}
