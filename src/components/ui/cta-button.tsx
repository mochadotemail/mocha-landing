"use client";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ArrowUpRight } from "lucide-react";

interface CTAButtonProps {
  children?: React.ReactNode;
  withIcon?: boolean;
  className?: string;
}

export function CTAButton({ 
  children = "Join Waitlist", 
  withIcon = true, 
  className 
}: CTAButtonProps) {
  return (
    <Button size="lg" className={cn(
      "group cursor-pointer bg-amber-600 rounded-xl hover:bg-amber-600/80 border-t border-l border-orange-200 text-white shadow-sm focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
      className
    )}>
      {children}
      {withIcon && (
        <ArrowUpRight className="ml-1 h-4 w-4" />
      )}
    </Button>
  );
}