"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
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
      description: "Perfect for getting started with Mocha. Manage your emails with ease for occasional use.",
      features: [
        "Basic email management",
        "Standard AI replies",
        "Limited email templates",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
    },
    {
      name: "Plus",
      price: isYearly ? "₹3,950" : "₹658.33",
      originalPrice: isYearly ? "₹7,900" : "₹658.33",
      description:
        "Power your professional email workflow with Mocha Plus. Unlimited access to AI drafting, smart sorting, and advanced features. Lock in savings with annual billing.",
      features: [
        "Everything in Free",
        "AI-powered email drafting and replies",
        "Smart inbox sorting & priority labels",
        "Custom email templates",
        "Team shared inboxes",
        "API integration",
        "24/7 priority support",
        "Advanced filtering rules",
      ],
      popular: true,
      buttonText: "Upgrade to Plus",
      buttonVariant: "default",
    },
  ];

  return (
    <section id="pricing" className="pb-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6 space-x-2">
            <span>Brew Your</span>
            <span className="text-primary italic">Mocha Plan</span>
          </h2>
          <p className="w-2/5 text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Start free and upgrade to Plus for unlimited AI email features like smart drafting and inbox management.
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
            <span className={`text-xs ${ isYearly ? "text-green-600 bg-green-50" : "bg-red-50 text-red-600"} font-medium  px-2 py-1 rounded-full animate-fade-in transition-opacity`}>
              Save {isYearly ? '40' : '0'}%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`group relative flex flex-col bg-gradient-to-b from-white to-gray-50 rounded-2xl border p-6 transition-all duration-500 hover:shadow-sm hover:shadow-primary/10 hover:border-primary/20 ${
                plan.popular ? "ring-1 ring-primary/20 shadow-md" : ""
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

              <div className="text-left mb-6 mt-4">
                <div className="h-40">

                <h3 className="text-xl text-foreground/70 mb-2 group-hover:text-primary transition-colors duration-200"> {plan.name}
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
                <hr className="border-muted my-6" />
              </div>

              <div className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3 group/feature"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600 transition-transform duration-200" />
                    </div>
                    <span className="text-sm text-muted-foreground transition-colors duration-200">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <hr className="border-muted my-6" />
              
              <div className="mt-auto">
                <button
                  className={cn(
                    "group w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus:ring-2 focus:ring-amber-500/50 focus:ring-offset-2",
                    plan.name === "Plus"
                      ? "bg-amber-600 hover:bg-amber-600/90 text-white shadow-sm border border-amber-600/50"
                      : "border-2 border-amber-600/50 text-amber-600 hover:bg-amber-50 hover:border-amber-600"
                  )}
                >
                  {plan.buttonText}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need a custom plan for your team?
          </p>
          <Button variant="link" className="text-primary hover:text-primary/80">
            Contact Sales →
          </Button>
        </div> */}
      </div>
    </section>
  );
}
