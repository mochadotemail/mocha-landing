"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { CTAButton } from "./cta-button";
import { ArrowUpRight } from "lucide-react";

// Smooth scroll function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const router = useRouter();
  const pathname = usePathname();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(true)
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-full max-w-2xl fixed top-10 left-1/2 -translate-x-1/2 border border-border/40 bg-card/30 backdrop-blur-xl rounded-2xl shadow-lg z-[5000] px-4 py-3 items-center justify-between",
          className
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <h1 className="font-serif text-lg font-bold text-primary hover:text-primary/90 transition-colors">
            <span className="italic mx-0.5">mocha</span>
            <span className="text-primary/70">.email</span>
          </h1>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-4 mx-4 flex-nowrap">
          {navItems.map((navItem: any, idx: number) => {
            if (navItem.link.startsWith('#')) {
              const sectionId = navItem.link.slice(1);
              return (
                <button
                  key={`link=${idx}`}
                  onClick={() => {
                    if (pathname === "/") {
                      scrollToSection(sectionId);
                    } else {
                      router.push(`/#${sectionId}`);
                    }
                  }}
                  className="text-sm cursor-pointer font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group flex items-center"
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block">{navItem.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </button>
              );
            }
            return (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className="text-sm cursor-pointer font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group flex items-center"
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="flex items-center">
                  <span>{navItem.name}</span>
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <CTAButton />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
