import React, { useState, useEffect } from 'react';
import { Response } from "@/components/ui/shadcn-io/ai/response";

export default function AnimatedEmailMessage(props: { className?: string}) {
  const [visibleWords, setVisibleWords] = useState(0);

  const emailText = "**Dear Sarah,**\n\nI hope this email finds you well. I would like to schedule a meeting to discuss the upcoming quarterly project milestones and review our current progress.\n\nGiven the recent developments in our timeline, I believe it would be beneficial to align on priorities and address any potential roadblocks we might encounter.\n\nWould you be available for a 30-minute discussion sometime next week? I'm flexible with timing and can accommodate your schedule.\n\nPlease let me know what works best for you.\n\n**Best regards,**\nAlex";

  const words = emailText.split(' ');

  useEffect(() => {
    if (visibleWords < words.length) {
      const timer = setTimeout(() => {
        setVisibleWords(prev => prev + 1);
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [visibleWords, words.length]);

  const displayText = words.slice(0, visibleWords).join(' ');

  return (
    <div className='px-6 py-8 text-sm h-full'>
    <Response className={props.className}>{displayText}</Response>
    </div>
  );
}