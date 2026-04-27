"use client";

import { Search, Calendar, Video, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: Search,
    title: "Find Your Tutor",
    description: "Browse expert tutors by subject, rating, and availability.",
  },
  {
    icon: Calendar,
    title: "Book a Session",
    description: "Choose a time that fits your schedule and book instantly.",
  },
  {
    icon: Video,
    title: "Start Learning",
    description: "Join live sessions and improve your skills in real time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold">How It Works</h2>
          <p className="text-muted-foreground mt-3">
            Three simple steps to start learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: "🔍",
              title: "Find Your Tutor",
              desc: "Browse expert tutors by subject, rating, and availability",
            },
            {
              icon: "📅",
              title: "Book a Session",
              desc: "Choose a time that fits your schedule and book instantly",
            },
            {
              icon: "🎥",
              title: "Start Learning",
              desc: "Join live video sessions and improve your skills in real time",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-3xl p-10 text-center"
            >
              <div className="text-5xl mb-6">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
