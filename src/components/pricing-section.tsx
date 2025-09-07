"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant?: "default" | "outline" | "secondary";
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans: PricingPlan[] = [
    {
      name: "Free",
      price: "₹0",
      description: "Start exploring. A complete experience for occasional use.",
      features: [
        "Basic email management",
        "Up to 100 emails per day",
        "Standard AI replies",
        "Mobile app access",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
    },
    {
      name: "Plus",
      price: isYearly ? "₹3,950" : "₹658.33",
      originalPrice: isYearly ? "₹7,900" : "₹658.33",
      description:
        "For your daily workflow. Remove all limits and make Craft your everyday creative home. Purchase now to lock in this special discount for the following year too.",
      features: [
        "Unlimited storage & content",
        "Advanced AI personalization",
        "Premium templates",
        "Team collaboration",
        "API access",
        "White-label options",
        "Priority support",
        "Custom rules",
      ],
      popular: true,
      buttonText: "Purchase Now",
      buttonVariant: "default",
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground leading-tight mb-6">
            <span>Choose The Plan</span>
            <br />
            <span className="text-primary italic">That's Right For You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Start with free and upgrade to Plus for unlimited access. All plans
            include our core AI-powered email features.
          </p>

          {/* Billing Toggle for Plus Plan */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <span
              className={`text-sm font-medium transition-colors ${
                !isYearly ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-12 h-6 bg-muted rounded-full transition-colors hover:bg-muted/80"
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-primary rounded-full transition-all duration-300 shadow-sm ${
                  isYearly ? "left-6" : "left-0.5"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium transition-colors ${
                isYearly ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Yearly
            </span>
            {isYearly && (
              <span className="text-xs text-green-600 font-medium bg-green-50 dark:bg-green-950 px-2 py-1 rounded-full animate-fade-in">
                Save 40%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`group relative bg-card rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:scale-[1.02] ${
                plan.popular ? "ring-2 ring-primary/20 shadow-lg" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {plan.name}
                </h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.name !== "Free" && (
                    <span className="text-muted-foreground text-sm">
                      {isYearly && plan.name === "Plus" ? "/year" : "/month"}
                    </span>
                  )}
                  {plan.originalPrice && isYearly && plan.name === "Plus" && (
                    <div className="text-sm text-muted-foreground line-through mt-1">
                      {plan.originalPrice}/year
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3 group/feature"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600 group-hover/feature:scale-110 transition-transform duration-200" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover/feature:text-foreground transition-colors duration-200">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.buttonVariant}
                className="w-full transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need a custom plan for your team?
          </p>
          <Button variant="link" className="text-primary hover:text-primary/80">
            Contact Sales →
          </Button>
        </div>
      </div>
    </section>
  );
}
