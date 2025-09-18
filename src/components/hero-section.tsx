import { CTAButton } from "./ui/cta-button";
import HeroVisual from "./hero-visual";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center pb-8 pt-24">
      <h1 className="text-7xl font-medium text-center text-primary">
        <span className="font-serif tracking-wide">Your Inbox, Supercharged</span>
        <br />
        <span className="italic font-serif tracking-wide text-primary/60">and Caffeinated</span>
      </h1>
      <p className="mt-4 text-center text-muted-foreground/70 pb-8">
        <span>Take control of your inbox with a fast and AI powered email</span>
        <br />
        <span>client built for people who live in email all day</span>
      </p>
      <div>
          
          <CTAButton />
      </div>

      <HeroVisual />
    </div>
  );
}
