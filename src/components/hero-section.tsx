import { Button } from "./ui/button";
import HeroVisual from "./hero-visual";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h1 className="text-5xl font-bold text-center font-serif text-primary leading-tight mt-24">
        <span>your inbox, supercharged</span>
        <br />
        <span className="text-primary/60 italic">and caffeinated</span>
      </h1>
      <p className="mt-4 text-lg text-center text-muted-foreground">
        <span>take control of your inbox with a fast and ai powered email</span>
        <br />
        <span>client built for people who live in email all day</span>
      </p>
      <div className="mt-8">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Get Started
        </Button>
      </div>

      <HeroVisual />
    </div>
  );
}
