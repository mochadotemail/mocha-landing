"use client";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FloatingDock } from "./ui/floating-dock";
import KeyboardDemo from "./KeyboardDemo";

export default function FeaturesSection() {
  const features = [
    {
      name: "Research notes in one place",
      description:
        "Save articles, docs, and ideas into tables or collections. On-device AI turns messy notes into clear insights.",
      icon: "📝",
      href: "#",
      cta: "Learn more",
      background: (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/15 dark:from-primary/10 dark:to-primary/20 rounded-xl" />
        </div>
      ),
      className: "md:col-span-2 lg:row-span-2",
    },
    {
      name: "Personalized AI replies",
      description:
        "Get instant drafts in your tone and style. Faster, consistent replies without the effort.",
      icon: "🤖",
      href: "#",
      cta: "Try it",
      background: (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/15 dark:from-secondary/10 dark:to-secondary/20 rounded-xl" />
        </div>
      ),
      className: "md:col-span-1 lg:row-span-1",
    },
    {
      name: "Auto email labels",
      description:
        "Emails get sorted by priority, content, and spam so you can focus on what actually matters.",
      icon: "🏷️",
      href: "#",
      cta: "See how",
      background: (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-chart-2/10 to-chart-4/15 dark:from-chart-2/10 dark:to-chart-4/20 rounded-xl">
          <div className="h-full p-6">
          <FloatingDock items={[
            { icon: "‼️", title: "Priority", href: "#" },
            { icon: "📩", title: "Inbox", href: "#" },
            { icon: "🚫", title: "Spam", href: "#" },
          ]}/>
          </div>
          </div>
        </div>
      ),
      className: "md:col-span-1 lg:row-span-1",
    },
    {
      name: "Adaptive inbox",
      description:
        "Your inbox learns from you — surfacing what's important, hiding what's not.",
      icon: "🧠",
      href: "#",
      cta: "Explore",
      background: (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-chart-5/10 to-accent/15 dark:from-chart-5/10 dark:to-accent/20 rounded-xl" />
        </div>
      ),
      className: "md:col-span-1",
    },
    {
      name: "Smart agent chat",
      description:
        "Summaries, suggested replies, and email help — all in one chat.",
      icon: "💬",
      href: "#",
      cta: "Chat now",
      background: (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/60 to-muted/80 dark:from-muted/40 dark:to-muted/60 rounded-xl" />
        </div>
      ),
      className: "md:col-span-2",
    },
    {
      name: "Fast, minimal UI",
      description: "Built for speed and simplicity. Less clutter, more flow.",
      icon: "⚡",
      href: "#",
      cta: "Experience",
      background: (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-chart-3/10 to-chart-3/15 dark:from-chart-3/10 dark:to-chart-3/20 rounded-xl" />
        </div>
      ),
      className: "md:col-span-1",
    },
    {
      name: "Custom rules",
      description:
        "Set rules to move, filter, or block noise. Full control over your inbox.",
      icon: "⚙️",
      href: "#",
      cta: "Customize",
      background: (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/15 dark:from-accent/10 dark:to-accent/25 rounded-xl" />
        </div>
      ),
      className: "md:col-span-1",
    },
    {
      name: "CMD + K everywhere",
      description: "Hit cmd+k to jump, search, or take action instantly.",
      icon: "⌨️",
      href: "#",
      cta: "Try shortcut",
      background: (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-chart-1/10 to-chart-1/15 dark:from-chart-1/10 dark:to-chart-1/20 rounded-xl" />
        </div>
      ),
      // extra: <KeyboardDemo />,
      className: "md:col-span-1",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
            <span>Features that make email</span>
            <br />
            <span className="text-primary italic">effortless</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to master your inbox with AI-powered
            productivity tools
          </p>
        </div>

        {/* Features Bento Grid */}
        <BentoGrid className="max-w-5xl mx-auto auto-rows-[18rem] gap-4">
          {features.map((feature, index) => {
            // Create an icon component for BentoCard
            const IconComponent = () => (
              <div className="text-4xl">{feature.icon}</div>
            );

            return (
              <BentoCard
                key={index}
                name={feature.name}
                className={`${feature.className} [&_h3]:text-foreground dark:[&_h3]:text-neutral-300 [&_p]:text-muted-foreground dark:[&_p]:text-neutral-400 [&_svg]:text-foreground dark:[&_svg]:text-neutral-300`}
                background={feature.background}
                Icon={IconComponent}
                description={feature.description}
                href={feature.href}
                cta={feature.cta}
                // extra={feature.extra}
              />
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
