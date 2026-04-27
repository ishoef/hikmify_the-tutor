"use client";

import { TutorCard } from "@/components/cards/tutor-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TutorSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/40">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Meet Our Expert Tutors
            </h2>
            {/* <p className="text-muted-foreground mt-3 text-lg max-w-md">
              Learn from verified professionals who are passionate about
              teaching
            </p> */}
          </div>

          <Link href="/tutors">
            <Button
              variant="outline"
              className="rounded-2xl px-8 py-6 group flex items-center gap-2"
            >
              View All Tutors
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Tutors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TutorCard
            name="Tilly Greenwood"
            avatar="https://i.pravatar.cc/300?img=5"
            subject="UI/UX Design"
            rating={4.98}
            sessions={1240}
            pricePerHour="$45/hr"
            availability="Available Today"
          />

          <TutorCard
            name="Dr. Ahmed Hassan"
            avatar="https://i.pravatar.cc/300?img=45"
            subject="Mathematics & Physics"
            rating={4.95}
            sessions={890}
            pricePerHour="$38/hr"
            availability="Available Tomorrow"
          />

          <TutorCard
            name="Layla Nour"
            avatar="https://i.pravatar.cc/300?img=64"
            subject="Chemistry & Biology"
            rating={4.97}
            sessions={670}
            pricePerHour="$42/hr"
            availability="Available Now"
          />
        </div>

        {/* Optional Bottom Teaser */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Over <span className="font-medium text-foreground">520+</span>{" "}
            expert tutors available across 40+ subjects
          </p>
        </div>
      </div>
    </section>
  );
}
