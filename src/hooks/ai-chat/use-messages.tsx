import { useState, useEffect } from 'react';
import { useScrollToBottom } from './use-scroll-to-bottom';

export function useMessages({
  chatId,
  status,
}: {
  chatId: string;
  status: UseChatHelpers['status'];
}) {
  const {
    containerRef,
    endRef,
    isAtBottom,
    scrollToBottom,
    onViewportEnter,
    onViewportLeave,
  } = useScrollToBottom();

  const [messages, setMessages] = useState<any[]>([]); // Assuming messages are of type any for now

  const [hasSentMessage, setHasSentMessage] = useState(false);

  useEffect(() => {
    if (chatId) {
      scrollToBottom('instant');
      setHasSentMessage(false);
    }
  }, [chatId, scrollToBottom]);

  useEffect(() => {
    if (status === 'submitted') {
      setHasSentMessage(true);
    }
  }, [status]);

  // Add the send function here based on your needs
  const send = async (message: any) => { // Assuming message is of type any
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [...messages, message] }), // Include previous messages + new one
    });
    const data = await res.json();
    setMessages(prev => [...prev, ...data.messages]);
  };

  return {
    containerRef,
    endRef,
    isAtBottom,
    scrollToBottom,
    onViewportEnter,
    onViewportLeave,
    hasSentMessage,
    messages, // Expose messages
    send, // Expose send function
  };
}
