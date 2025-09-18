import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import PricingSection from "@/components/pricing-section";

export default function Home() {
  return (
    <main className="min-h-screen" id="hero">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:bg-primary focus:text-primary-foreground p-2 z-50"
      >
        Skip to main content
      </a>
      <div id="main-content">
        <section id="hero" className="animate-fadeIn">
          <HeroSection />
        </section>
        <section id="features" className="py-16 animate-slide-in-up animation-delay-200">
          <FeaturesSection />
        </section>
        <section id="pricing" className="py-16 animate-slide-in-up animation-delay-400">
          <PricingSection />
        </section>
      </div>
    </main>
  );
}
