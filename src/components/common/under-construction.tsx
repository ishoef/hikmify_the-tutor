"use client";

import { Hammer, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 bg-background">
      <div className="text-center max-w-md w-full">
        {/* ICON */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#153151]/10 flex items-center justify-center">
          <Hammer className="text-[#153151]" size={28} />
        </div>

        {/* TITLE */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
          Page Under Construction
        </h1>

        {/* SUBTITLE */}
        <p className="text-muted-foreground mt-3 text-sm sm:text-base leading-relaxed">
          We're currently working on this page. It will be available soon with
          new features and improvements.
        </p>

        {/* INFO */}
        <div className="flex items-center justify-center gap-2 mt-5 text-sm text-muted-foreground">
          <Clock size={16} />
          Coming soon...
        </div>

        {/* ACTIONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button className="w-full sm:w-auto bg-[#153151] hover:bg-[#1f4a7a] text-white">
              Go Home
            </Button>
          </Link>

          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
