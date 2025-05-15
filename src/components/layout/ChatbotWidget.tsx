'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ChatInterface from '@/components/chatbot/ChatInterface';
import { MessageSquarePlus, X } from 'lucide-react';
import { CHATBOT_ICON as ChatbotIcon } from '@/lib/constants';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="primary"
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90 text-primary-foreground"
          aria-label="Open chat"
        >
          {isOpen ? <X className="h-7 w-7" /> : <ChatbotIcon className="h-7 w-7" />}
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-md p-0 flex flex-col"
        onInteractOutside={(e) => e.preventDefault()} // Keep open if user clicks outside, only X or escape closes.
      >
        {/* SheetHeader and SheetTitle are part of ChatInterface for better layout control */}
        <ChatInterface />
      </SheetContent>
    </Sheet>
  );
}
