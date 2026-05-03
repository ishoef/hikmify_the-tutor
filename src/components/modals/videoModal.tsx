"use client";

import { useState } from "react";
import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function VideoModal({
  videoUrl = "",
  buttonText = "Watch Video",
  className = "",
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* TRIGGER */}
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className={`cursor-pointer flex items-center gap-2 rounded-2xl px-10 py-7 ${className}`}
        >
          <Play size={20} />
          {buttonText}
        </Button>
      </DialogTrigger>

      {/* MODAL */}
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src={open ? `${videoUrl}?autoplay=1` : ""}
            title="Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
