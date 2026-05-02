"use client";

import { Hammer, Clock, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[#153151]/5 rounded-full blur-3xl" />
        <div className="absolute top-24 left-12 w-44 h-44 border border-[#153151]/15 rounded-full" />
        <div className="absolute bottom-32 right-20 w-60 h-60 border border-[#153151]/10 rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#153151_1px,transparent_1px),linear-gradient(to_bottom,#153151_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="mx-auto mb-10 w-24 h-24 rounded-3xl bg-[#153151]/10 flex items-center justify-center">
          <Hammer className="text-[#153151]" size={48} />
        </div>

        {/* Heading */}
        <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-5">
          Under Construction
        </h1>

        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          We're building something special.
          <br />
          This page will be ready very soon.
        </p>

        {/* Status */}
        <div className="inline-flex items-center gap-3 bg-muted/80 px-8 py-3 rounded-2xl mb-12">
          <Clock className="text-[#153151]" size={22} />
          <span className="font-medium tracking-widest text-sm">
            COMING SOON
          </span>
        </div>

        {/* Prominent Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary Button - More Prominent */}
          <Link href="/">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#153151] hover:bg-[#1f4a7a] text-white py-7 px-12 rounded-2xl text-base font-semibold shadow-lg hover:shadow-xl transition-all active:scale-[0.985] flex items-center justify-center gap-3"
            >
              <Home size={22} />
              Return to Homepage
            </Button>
          </Link>

          {/* Secondary Button - Also Enhanced */}
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto py-7 px-10 rounded-2xl border-2 hover:bg-muted flex items-center justify-center gap-3 text-base font-medium transition-all active:scale-[0.985]"
          >
            <ArrowLeft size={22} />
            Go Back
          </Button>
        </div>

        {/* Subtle Footer Text */}
        <p className="text-xs text-muted-foreground mt-16">
          Thank you for your patience. We're working hard to deliver the best
          experience.
        </p>
      </div>
    </div>
  );
}
