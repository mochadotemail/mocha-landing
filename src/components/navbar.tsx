"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { CTAButton } from "./ui/cta-button";
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

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center p-6 border-b border-border/40 bg-transparent">
      <h1 className="font-serif text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
        <span className="italic mx-0.5">mocha</span>
        <span className="text-primary/70">.email</span>
      </h1>

      <div className="hidden md:flex items-center gap-8">
        <button
          onClick={() => {
            if (pathname === "/") {
              scrollToSection("hero");
            } else {
              router.push("/");
            }
          }}
          className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
        </button>
        <button
          onClick={() => {
            if (pathname === "/") {
              scrollToSection("features");
            } else {
              router.push("/#features");
            }
          }}
          className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
        >
          Features
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
        </button>
        <button
          onClick={() => {
            if (pathname === "/") {
              scrollToSection("pricing");
            } else {
              router.push("/#pricing");
            }
          }}
          className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
        >
          Pricing
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
        </button>
        <Link href="/manifesto">
          <button className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group flex items-center">
            Manifesto
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </button>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="md:hidden flex gap-4">
          <button
            onClick={() => {
              if (pathname === "/") {
                scrollToSection("hero");
              } else {
                router.push("/");
              }
            }}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => {
              if (pathname === "/") {
                scrollToSection("features");
              } else {
                router.push("/#features");
              }
            }}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => {
              if (pathname === "/") {
                scrollToSection("pricing");
              } else {
                router.push("/#pricing");
              }
            }}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </button>
          <Link href="/manifesto">
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center">
              Manifesto
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <CTAButton />
        </div>
      </div>
    </nav>
  );
}
