"use client";

import Image from "next/image";
import { Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PlatformSection(){
  return (
    <section className="relative bg-background overflow-hidden py-24">
      <div className="container mx-auto px-6 lg:px-26 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 relative z-10">
          {/* small tag */}
          <p className="text-sm text-[#153151] font-medium">
            Best Online Learning Platform
          </p>

          {/* heading */}
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
            One Platform & Many{" "}
            <span className="text-[#153151] relative inline-block">
              Tutors
              <span className="absolute left-0 bottom-1 w-full h-[6px] bg-[#153151]/20 -z-10 rounded" />
            </span>{" "}
            For You
          </h2>

          {/* description */}
          <p className="text-muted-foreground max-w-md">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>

          {/* features */}
          <div className="space-y-3">
            {[
              "9/10 Average Satisfaction Rate",
              "96% Completion Rate",
              "Friendly Environment & Expert Teacher",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-sm bg-[#153151] flex items-center justify-center text-white">
                  <Check size={14} />
                </div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>

          {/* button */}
          <Button className="bg-[#153151] hover:bg-[#1f4a7a] text-white px-6 py-3 rounded-lg shadow-sm">
            Explore Our Courses
          </Button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center lg:justify-end">
          {/* first image */}
          <div className="relative w-[220px] h-[300px] rounded-xl overflow-hidden shadow-lg z-10">
            <Image
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400"
              alt="student"
              fill
              className="object-cover"
            />
          </div>

          {/* second image */}
          <div className="relative w-[240px] h-[320px] rounded-xl overflow-hidden shadow-lg ml-6 mt-10">
            <Image
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400"
              alt="student"
              fill
              className="object-cover"
            />
          </div>

          {/* floating card */}
          <div className="absolute z-10 left-[20%] bottom-10 bg-white dark:bg-card rounded-xl shadow-md px-5 py-3 flex items-center gap-3 border border-border">
            <div className="w-10 h-10 rounded-full bg-[#153151]/10 flex items-center justify-center text-[#153151]">
              <Play size={18} />
            </div>

            <div>
              <p className="text-sm font-medium text-foreground">Demo Videos</p>
              <p className="text-xs text-muted-foreground">
                How Can You Start?
              </p>
            </div>
          </div>

          {/* decorative shapes */}
          <div className="absolute -top-10 left-10 w-24 h-24 border border-[#153151]/20 rounded-full" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border border-[#153151]/10 rounded-full" />
        </div>
      </div>
    </section>
  );
}
