"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
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
  return (
    <nav className="flex justify-between items-center p-6 border-b border-border/40 bg-transparent">
      <h1 className="font-serif text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
        <span className="italic mx-0.5">mocha</span>
        <span className="text-primary/70">.email</span>
      </h1>

      <div className="hidden md:flex items-center gap-8">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
        </button>
        <button
          onClick={() => scrollToSection("features")}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
        >
          Features
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
        </button>
        <button
          onClick={() => scrollToSection("pricing")}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
        >
          Pricing
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
        </button>
        <Link href="/about">
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group flex items-center">
            Manifesto
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:translate-x-0 group-active:translate-y-0" />
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </button>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="md:hidden flex gap-4">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </button>
          <Link href="/about">
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center">
              Manifesto
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:translate-x-0 group-active:translate-y-0" />
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 ease-out focus:ring-2 focus:ring-primary/50 focus:ring-offset-2">
            Join Waitlist 
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:translate-x-0 group-active:translate-y-0" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
