"use client";

import { TutorCard } from "@/components/cards/tutor-card";

export default function TutorSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12 space-y-10">
        <div>
          <h2 className="text-3xl font-bold text-foreground">
            Find Your Tutor
          </h2>
          <p className="text-muted-foreground">
            Book sessions with expert instructors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TutorCard
            name="Tilly Greenwood"
            avatar="https://i.pravatar.cc/150?img=5"
            subject="UI/UX Design"
            rating={4.9}
            sessions={120}
            pricePerHour="$25/hr"
            availability="Available Today"
          />

          <TutorCard
            name="John Carter"
            avatar="https://i.pravatar.cc/150?img=8"
            subject="Web Development"
            rating={4.8}
            sessions={200}
            pricePerHour="$30/hr"
            availability="Available Tomorrow"
          />

          <TutorCard
            name="Sarah Lee"
            avatar="https://i.pravatar.cc/150?img=12"
            subject="Data Science"
            rating={4.7}
            sessions={95}
            pricePerHour="$28/hr"
            availability="Available Now"
          />
        </div>
      </div>
    </section>
  );
}
