"use client";

import Image from "next/image";
import {
  Star,
  Globe,
  Clock,
  Award,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/modals/tutorBookingModal";

type TutorProfileProps = {
  name?: string;
  title?: string;
  image?: string;
  rating?: number;
  reviews?: number;
  languages?: string[];
  responseTime?: string;
  price?: number;
  availability?: string[];
  skills?: string[];
  bio?: string;
};

export default function TutorProfilePro({
  name = "Tilly Greenwood",
  title = "UI/UX Design Specialist",
  image = "https://i.pravatar.cc/300?img=5",
  rating = 4.9,
  reviews = 1240,
  languages = ["English", "Spanish"],
  responseTime = "Replies within 1 hour",
  price = 45,
  availability = ["Saturday", "Sunday", "Monday", "Wednesday"],
  skills = [
    "Figma",
    "UX Research",
    "Wireframing",
    "Prototyping",
    "User Testing",
  ],
  bio = "I'm a passionate UI/UX designer with over 5 years of experience helping students and professionals master modern design tools and methodologies. My sessions are hands-on, practical, and focused on real-world application.",
}: TutorProfileProps) {
  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="container mx-auto max-w-7xl px-6 pt-12 lg:pt-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* ================= MAIN CONTENT (Left + Center) ================= */}
          <div className="lg:col-span-8 space-y-12">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative flex-shrink-0">
                <Image
                  src={image}
                  alt={name}
                  width={180}
                  height={180}
                  className="rounded-3xl object-cover shadow-xl ring-1 ring-border"
                  priority
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-[3px] border-background" />
              </div>

              <div className="flex-1 pt-3">
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl font-bold tracking-tight">{name}</h1>
                  <CheckCircle className="text-[#153151] mt-1" size={28} />
                </div>

                <p className="text-2xl text-muted-foreground mt-1">{title}</p>

                {/* Rating */}
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1">
                    <Star className="text-amber-500 fill-amber-500" size={26} />
                    <span className="text-3xl font-semibold">{rating}</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {reviews.toLocaleString()}
                      </span>{" "}
                      reviews
                    </p>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Globe size={18} className="text-[#153151]" />
                    <span>{languages.join(" • ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-[#153151]" />
                    <span>{responseTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-[#153151]" />
                    <span>Verified Tutor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-5">About Me</h2>
              <div className="prose prose-neutral dark:prose-invert text-[17px] leading-relaxed">
                <p>{bio}</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-2xl font-semibold mb-5">
                Expertise & Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-5 py-2.5 bg-[#153151]/5 hover:bg-[#153151]/10 border border-[#153151]/10 rounded-2xl text-sm font-medium text-[#153151] transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Student Reviews</h2>
                <span className="text-sm text-muted-foreground">
                  Showing 2 of {reviews}
                </span>
              </div>

              <div className="space-y-8">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-3xl p-7"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={`https://i.pravatar.cc/48?img=${i + 10}`}
                        alt="Student"
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold">Alex Rivera</p>
                        <div className="flex text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="mt-5 text-muted-foreground leading-relaxed">
                      Tilly is an exceptional tutor. She explained complex UX
                      concepts with clarity and patience. Her feedback on my
                      portfolio completely transformed how I approach design
                      projects.
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                      March 2026
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= SIDEBAR (Right) ================= */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Pricing Card */}
              <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                <div className="text-center mb-8">
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <div className="mt-2">
                    <span className="text-5xl font-bold text-[#153151]">
                      ${price}
                    </span>
                    <span className="text-xl text-muted-foreground">/hour</span>
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-8">
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    Available on
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {availability.map((day) => (
                      <span
                        key={day}
                        className="px-4 py-1.5 bg-[#153151]/10 text-[#153151] text-sm rounded-full font-medium"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="text-green-500" size={20} />
                    <span>Instant booking available</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="text-green-500" size={20} />
                    <span>Free 15-min intro call</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="text-green-500" size={20} />
                    <span>Recorded sessions included</span>
                  </div>
                </div>

                {/* Booking Button */}
                <BookingModal
                  tutorId="4ec3ee6f-4942-4df2-8c07-92c7d242b8ff"
                  categoryId="b0c26c46-11eb-4ef4-8b70-aa7e9815f3b2"
                  tutorName={name}
                  price={price}
                  availability={availability}
                />

                <Button
                  variant="outline"
                  className="w-full mt-3 py-6 rounded-2xl flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  Message Tutor
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="text-center text-xs text-muted-foreground space-y-1">
                <p>✓ Secure payments</p>
                <p>✓ 100% Satisfaction guarantee</p>
                <p>✓ Cancel anytime before session starts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
