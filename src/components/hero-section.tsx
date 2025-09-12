import { Button } from "./ui/button";
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
          
          <Button className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 ease-out focus:ring-2 focus:ring-primary/50 focus:ring-offset-2">
           Join Waitlist 
          </Button>
      </div>

      <HeroVisual />
    </div>
  );
}
