"use client";

import Image from "next/image";
import { GraduationCap, Award, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#153151]/10 text-[#153151] rounded-full text-sm font-medium">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#153151] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#153151]"></span>
            </span>
            12,000+ active learners worldwide
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
            Master new skills with{" "}
            <span className="text-[#153151]">expert tutors</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-lg">
            Personalized 1-on-1 learning with verified tutors. Flexible
            scheduling, real results, and affordable prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/tutors">
              <Button
                size="lg"
                className="bg-[#153151] hover:bg-[#1f4a7a] text-white px-10 py-7 rounded-2xl text-base font-medium"
              >
                Find Your Tutor
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-7 rounded-2xl text-base font-medium flex items-center gap-2"
            >
              <Play size={20} /> Watch 1-min video
            </Button>
          </div>
        </div>

        <div className="relative hidden lg:block w-130 xl:w-155 h-120 xl:h-120">
          <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/80">
            <Image
              src="https://img.freepik.com/premium-vector/education-technology-online-learning-blue-background-open-book-digital-online-e-learning_252172-636.jpg"
              alt="Learning"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 520px, 620px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
