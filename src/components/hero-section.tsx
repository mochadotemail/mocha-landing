import HeroVisual from "./hero-visual";
import { Button } from "./ui/button";
import { AuroraBackground } from "./ui/shadcn-io/aurora-background";

export default function HeroSection() {
  return (
    <div className="flex flex-col">
      <AuroraBackground>
        <div className="flex flex-col items-center justify-center pt-24">
          <h1 className="text-7xl font-medium text-center text-primary">
            <span className="font-serif tracking-wide">
              Your Inbox, Supercharged
            </span>
            <br />
            <span className="italic font-serif tracking-wide text-primary/60">
              and Caffeinated
            </span>
          </h1>
          <p className="mt-4 text-center text-muted-foreground/90 pb-8">
            <span>
              Take control of your inbox with a fast and AI powered email
            </span>
            <br />
            <span>client built for people who live in email all day</span>
          </p>
          <div></div>
        </div>
      </AuroraBackground>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4 px-4 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="your.email@example.com"
          className="flex-1 px-4 py-2 border border-input rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <Button>Join Waitlist</Button>
      </div>
      <HeroVisual />
    </div>
  );
}
