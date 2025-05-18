'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X, MessageSquare } from 'lucide-react';
import { chatEventBus, OPEN_CHAT_EVENT } from '@/lib/event-bus';
import { Chat } from '@/components/ai-chat/chat';
import { useSession } from 'next-auth/react';
import { generateUUID, cn } from '@/lib/utils';

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
  const { data: session } = useSession();
  const [chatId] = useState(() => generateUUID());

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className={cn(
            'fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl z-50',
            'bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
            'transition-all duration-200 transform hover:scale-105',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
            isOpen && 'hidden'
          )}
          aria-label="Open chat"
        >
          <MessageSquare className="h-6 w-6 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent 
        className={cn(
          'w-full max-w-2xl p-0 flex flex-col shadow-2xl h-[80vh] max-h-[800px]',
          'rounded-lg overflow-hidden border-0',
          'bg-white dark:bg-gray-900',
          'transform transition-all duration-200 ease-in-out',
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          'p-0' // Ensure no padding to allow full control
        )}
        hideCloseButton // This hides the default close button
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="rounded-full h-8 w-8 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="h-full">
              <Chat
                id={chatId}
                initialMessages={[
                  { id: 'initial-bot-greeting', role: 'assistant', content: 'Hello! How can I help you today?' },
                ]}
                initialChatModel="gpt-4"
                initialVisibilityType="private"
                isReadonly={!session}
                session={session}
                autoResume={false}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}