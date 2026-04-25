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
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => [...prev, index]);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#153151]/10 text-[#153151] rounded-full text-sm font-medium mb-4">
            Simple 3-Step Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-md mx-auto">
            Getting started with SkillBoost is quick and effortless
          </p>
        </div>

        <div className="grid lg:grid-cols-12 items-center">
          {/* TIMELINE - LEFT SIDE */}
          <div className="lg:col-span-7">
            <div className="relative pl-10 md:pl-16">
              {/* Thin vertical line */}
              <div className="absolute left-18 top-8 bottom-8 w-px bg-[#153151]/15 hidden md:block" />

              {steps.map((step, index) => {
                const Icon = step.icon;
                const isVisible = visibleSteps.includes(index);

                return (
                  <div
                    key={index}
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    className={`relative mb-16 last:mb-0 transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    {/* Icon Circle */}
                    <div className="absolute -left-3 md:-left-5 w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 border-4 border-[#153151] flex items-center justify-center shadow-md z-10">
                      <Icon
                        className={`w-7 h-7 text-[#153151] transition-all duration-500 ${
                          isVisible ? "scale-100" : "scale-75"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="ml-8 md:ml-12">
                      <div className="text-[#153151] text-sm font-semibold tracking-widest mb-1">
                        STEP 0{index + 1}
                      </div>
                      <h3 className="text-2xl font-semibold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE - VISUAL / ILLUSTRATION AREA */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="sticky top-24">
              <div className="bg-linear-to-br from-[#153151]/5 to-transparent rounded-3xl p-10 h-[520px] flex items-center justify-center border border-[#153151]/10">
                <div className="text-center space-y-8">
                  <div className="mx-auto w-28 h-28 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl flex items-center justify-center">
                    <Video className="w-14 h-14 text-[#153151]" />
                  </div>

                  <div>
                    <p className="text-2xl font-medium text-foreground">
                      Learn live with expert tutors
                    </p>
                    <p className="text-muted-foreground mt-3 max-w-xs mx-auto">
                      Join interactive video sessions from anywhere in the world
                    </p>
                  </div>

                  {/* Decorative floating elements */}
                  <div className="absolute top-12 right-12 w-6 h-6 bg-[#153151]/10 rounded-full animate-pulse" />
                  <div className="absolute bottom-20 left-16 w-4 h-4 bg-amber-400/30 rounded-full animate-pulse delay-300" />
                  <div className="absolute top-1/3 -left-4 w-8 h-8 border border-[#153151]/20 rounded-2xl rotate-12" />
                </div>
              </div>

              {/* Trust badge */}
              <div className="mt-8 flex justify-center">
                <div className="bg-white dark:bg-zinc-900 shadow-md rounded-2xl px-6 py-3 flex items-center gap-3 border">
                  <div className="text-green-500">●</div>
                  <span className="text-sm font-medium">
                    Over 12,000 students learning right now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}