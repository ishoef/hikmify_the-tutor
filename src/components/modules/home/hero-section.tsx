"use client";

import Image from "next/image";
import { GraduationCap, Award, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-background overflow-hidden py-20 lg:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#153151]/5 via-transparent to-[#153151]/5" />

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT: IMAGE */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-[#153151]/10 blur-2xl rounded-[3rem]" />

            {/* Main Image */}
            <div
              className="relative w-80 h-80 sm:w-90 sm:h-90 lg:w-105 lg:h-105 xl:w-145 xl:h-115 
                            rounded-[3rem] overflow-hidden shadow-2xl border border-white/80 dark:border-gray-800"
            >
              <Image
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
                alt="Tilly Greenwood - Online Instructor"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/20" />

              {/* Graduation Icon */}
              <div
                className="absolute top-5 left-5 
                              bg-[#153151] text-white p-3 rounded-2xl shadow-xl
                              backdrop-blur-md hover:scale-110 transition"
              >
                <GraduationCap size={22} />
              </div>

              {/* Instructor Badge */}
              <div
                className="absolute top-5 right-5 
                              bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md
                              px-4 py-3 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <p className="font-semibold text-[#153151] text-sm">
                  Tilly Greenwood
                </p>
                <p className="text-muted-foreground text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Online Instructor
                </p>
              </div>

              {/* Rating Badge */}
              <div
                className="absolute bottom-5 right-5 
                              bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md
                              p-3 rounded-2xl shadow-lg flex items-center gap-3 
                              border border-gray-200 dark:border-gray-800"
              >
                <div className="bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 p-2 rounded-xl">
                  <Award size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Top Rated</p>
                  <p className="font-semibold text-sm">4.98 • 12k</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-muted rounded-full text-sm text-muted-foreground">
            <span className="text-[#153151]">✦</span>
            Welcome to SkillBoost
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Master new skills.
            <br />
            Unlock your <span className="text-[#153151]">potential</span>.
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
            Learn from world-class instructors like Tilly Greenwood.
            High-quality courses designed for real career growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group bg-[#153151] hover:bg-[#1f4a7a] text-white px-8 py-4 rounded-2xl font-medium flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl active:scale-[0.97]">
              Explore Courses
              <Play
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>

            <button className="border border-gray-300 dark:border-gray-700 hover:bg-muted px-8 py-4 rounded-2xl font-medium transition-all hover:shadow-md">
              Watch Intro Video
            </button>
          </div>

          {/* Trust */}
          <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 text-sm text-muted-foreground">
            <div>Trusted by 45,000+ learners</div>
            <div className="flex items-center gap-1">
              ★★★★☆ <span className="font-medium text-foreground">4.9/5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-linear-to-r from-transparent via-[#153151]/30 to-transparent" />
    </section>
  );
}
