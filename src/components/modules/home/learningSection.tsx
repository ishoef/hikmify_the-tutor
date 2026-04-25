"use client";

import Image from "next/image";
import { Phone, Video, Globe } from "lucide-react";

export default function LearningSection() {
  return (
    <section
      className="relative py-24 overflow-hidden
      bg-linear-to-r 
      from-[#e6eef5] via-[#f2f6fa] to-[#f7f9fc]
      dark:from-[#0f1c2e] dark:via-[#12263f] dark:to-[#0d1a2a]
    "
    >
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE (IMAGES) */}
        <div className="relative flex justify-center lg:justify-start">
          {/* TOP IMAGE */}
          <div className="absolute top-0 left-16 w-[260px] h-[200px] rounded-xl overflow-hidden shadow-lg z-10">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500"
              alt="student"
              fill
              className="object-cover"
            />
          </div>

          {/* BOTTOM IMAGE */}
          <div className="relative w-[320px] h-[240px] rounded-xl overflow-hidden shadow-lg mt-40">
            <Image
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500"
              alt="student"
              fill
              className="object-cover"
            />
          </div>

          {/* AWARD CARD */}
          <div className="absolute top-20 left-0 bg-white dark:bg-card shadow-md rounded-xl px-4 py-3 border border-border">
            <p className="text-xs font-medium text-foreground">
              🏆 50+ Winning Awards
            </p>
          </div>

          {/* TEACHERS CARD */}
          <div className="absolute bottom-10 right-0 bg-white dark:bg-card shadow-md rounded-xl p-4 border border-border w-[180px]">
            <p className="text-sm font-semibold mb-2 text-foreground">
              Trained Teachers
            </p>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#153151]/20" />
              <div className="w-6 h-6 rounded-full bg-[#153151]/30" />
              <div className="w-6 h-6 rounded-full bg-[#153151]/40" />
            </div>
          </div>

          {/* CALL CONTROLS */}
          <div className="absolute top-[140px] left-[120px] bg-white dark:bg-card shadow-md rounded-full px-4 py-2 flex items-center gap-3 border border-border">
            <Phone size={16} className="text-red-500" />
            <Video size={16} className="text-green-500" />
          </div>

          {/* DECORATION */}
          <div className="absolute -top-10 right-10 w-24 h-24 border border-[#153151]/20 rounded-full" />
        </div>

        {/* RIGHT SIDE (CONTENT) */}
        <div className="space-y-6">
          <p className="text-sm text-[#153151] font-medium">About HikmiFy</p>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
            You Can Learn Anything, <br />
            Anytime From{" "}
            <span className="text-[#153151] relative inline-block">
              Anywhere
              <span className="absolute left-0 bottom-1 w-full h-[6px] bg-[#153151]/20 rounded -z-10" />
            </span>
          </h2>

          <p className="text-muted-foreground max-w-md">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered.
          </p>

          {/* FEATURES */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#153151]/10 flex items-center justify-center">
                <Video size={18} className="text-[#153151]" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">
                  All Classes Video Provided
                </h4>
                <p className="text-sm text-muted-foreground">
                  There are many variations of passages available.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#153151]/10 flex items-center justify-center">
                <Globe size={18} className="text-[#153151]" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">
                  Learn Anywhere Globally
                </h4>
                <p className="text-sm text-muted-foreground">
                  Access learning from any location worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
