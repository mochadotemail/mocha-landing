"use client";
import Link from "next/link";
import React from "react";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Suhas Sumukh",
      link: "http://x.com/suhasasumukh",
    },
    {
      name: "Shoubhit Dash",
      link: "http://x.com/nexxeln",
    },
    {
      name: "Saksham Kushwaha",
      link: "https://www.linkedin.com/in/sakshamkushwaha/",
    },
    {
      name: "Ekaksh Janweja",
      link: "https://www.linkedin.com/in/ekakshjanweja/",
    },
    {
      name: "Shiv Shanmugam",
      link: "http://x.com/sxhivs",
    },
  ];

  return (
    <div className="flex flex-col items-center py-20 px-4">
      {/* Mission Section */}
      <section className="w-full lg:w-4/6 flex flex-col items-center text-center">
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif my-8 sm:my-12 text-foreground leading-tight">
          An Extension of Your Mind
        </h3>
        <div className="w-full max-w-4xl text-xl">
          <p className="text-muted-foreground leading-relaxed mb-8">
            We are working on building the first inbox that works like an
            extension of your mind - it writes in your voice, organizes itself
            based on your habits, and gives you rule-based control over
            everything.
          </p>
          <p className="text-muted-foreground  leading-relaxed">
            The goal is to create a system that reduces friction, respects your
            workflow, and adapts to how you work – not the other way around.
          </p>
        </div>
      </section>


      {/* Team Section */}
      <section className="w-full lg:w-4/6 flex flex-col items-center mt-8">
        <p className="text-muted-foreground text-xl text-center leading-relaxed mb-12 max-w-3xl">
          We're a small team of developers and designers building tools
          that make email more personal, programmable, and effortless to work
          with.
        </p>

        {/* Team Grid */}
        <div className="w-full flex flex-col gap-4 sm:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 text-center"
            >
              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl font-serif text-primary hover:text-primary/80 transition-colors relative group"
                aria-label={`${member.name}'s profile`}
              >
                {member.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/80 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default AboutPage;