"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Crown, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for trying out the platform",
    icon: Zap,
    features: [
      "Access to free courses",
      "Basic learning tools",
      "Community support",
      "Limited AI assistance",
    ],
    button: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    description: "Best for serious learners",
    icon: Sparkles,
    features: [
      "All Starter features",
      "Unlimited courses access",
      "AI-powered learning assistant",
      "Progress tracking dashboard",
      "Downloadable resources",
    ],
    button: "Start Pro",
    highlighted: true,
  },
  {
    name: "Elite",
    price: "$49",
    description: "For professionals & teams",
    icon: Crown,
    features: [
      "Everything in Pro",
      "1-on-1 mentorship",
      "Advanced certifications",
      "Team collaboration tools",
      "Priority support 24/7",
    ],
    button: "Go Elite",
    highlighted: false,
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-[#153151]">
      {/* HERO */}
      <section className="pt-24 px-6 text-center mb-12">
        <Badge className="bg-[#153151]/10 text-[#153151] border-none px-5 py-2 mb-6">
          Simple & Transparent Pricing
        </Badge>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Choose the plan that fits you
        </h1>

        <p className="text-lg text-[#153151]/70 max-w-2xl mx-auto">
          Start free, upgrade anytime. No hidden fees. Cancel whenever you want.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mt-10">
          <div className="bg-white border border-[#153151]/10 rounded-full p-1 flex">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                billing === "monthly"
                  ? "bg-[#153151] text-white"
                  : "text-[#153151]/60"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                billing === "yearly"
                  ? "bg-[#153151] text-white"
                  : "text-[#153151]/60"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs text-emerald-500 font-semibold">
                -20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* PRICING GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => {
            const Icon = plan.icon;

            return (
              <div
                key={i}
                className={`rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "bg-[#153151] text-white shadow-2xl scale-[1.02]"
                    : "bg-white border-[#153151]/10 hover:border-[#153151]/20"
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-2xl ${
                      plan.highlighted ? "bg-white/10" : "bg-[#153151]/5"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        plan.highlighted ? "text-white" : "text-[#153151]"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <p
                      className={`text-sm ${
                        plan.highlighted ? "text-white/70" : "text-[#153151]/60"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-4xl font-bold">
                    {plan.price}
                    <span className="text-base font-normal opacity-70">
                      /mo
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`w-4 h-4 mt-0.5 ${
                          plan.highlighted ? "text-white" : "text-emerald-500"
                        }`}
                      />
                      <span
                        className={
                          plan.highlighted
                            ? "text-white/80"
                            : "text-[#153151]/70"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button
                  className={`w-full h-12 rounded-2xl font-semibold transition ${
                    plan.highlighted
                      ? "bg-white text-[#153151] hover:bg-white/90"
                      : "bg-[#153151] text-white hover:bg-[#153151]/90"
                  }`}
                >
                  {plan.button}
                </Button>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ / EXTRA VALUE */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {[
            {
              q: "Can I cancel anytime?",
              a: "Yes, you can cancel your subscription at any time with no penalties.",
            },
            {
              q: "Do you offer refunds?",
              a: "We offer a 7-day refund policy for all paid plans.",
            },
            {
              q: "Is there a free plan?",
              a: "Yes, our Starter plan is completely free forever.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-[#153151]/10 rounded-2xl p-6"
            >
              <h4 className="font-semibold mb-2">{faq.q}</h4>
              <p className="text-[#153151]/70 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
