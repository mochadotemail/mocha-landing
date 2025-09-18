import React, { useState, useEffect } from 'react';
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ui/shadcn-io/ai/conversation";
import { Message, MessageContent } from "@/components/ui/shadcn-io/ai/message";
import { cn } from '@/lib/utils';

export default function AnimatedEmailConversation(props: { className?: string; style?: React.CSSProperties }) {
  const [visibleMessages, setVisibleMessages] = useState(0);

  const messages = [
    {
      from: "user",
      content: "I need help writing a professional email to request a meeting with my manager about a promotion discussion."
    },
    {
      from: "assistant",
      content: "I'd be happy to help you craft a professional meeting request! Can you tell me your manager's name and how formal your workplace communication typically is?"
    },
  ];

  useEffect(() => {
    if (visibleMessages < messages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [visibleMessages, messages.length]);

  return (
    <Conversation className={cn("relative w-full", props.className)} style={{height: '400px'}}>
      <ConversationContent>
        {messages.slice(0, visibleMessages).map((message, index) => (
          <Message
            key={index}
            className={cn("animate-fadeIn", index > 0 ? "animation-delay-200" : "")}
            from={message.from as "user" | "assistant"}
          >
            <MessageContent>{message.content}</MessageContent>
          </Message>
        ))}
      </ConversationContent>
      <ConversationScrollButton />
    </Conversation>
  );
}