"use client"

import Image from "next/image"
import { Star, Clock, Video, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TutorCardProps {
  name: string
  avatar: string
  subject: string
  rating: number
  sessions: number
  pricePerHour: string
  availability: string
  isOnline?: boolean
}

export function TutorCard({
  name,
  avatar,
  subject,
  rating,
  sessions,
  pricePerHour,
  availability,
  isOnline = true,
}: TutorCardProps) {
  return (
    <div className="group relative rounded-2xl bg-card border border-border p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* TOP */}
      <div className="flex items-start gap-4">

        {/* Avatar + status */}
        <div className="relative">
          <Image
            src={avatar}
            alt={name}
            width={60}
            height={60}
            className="rounded-xl object-cover border border-border"
          />

          {/* online indicator */}
          {isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
          )}
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg text-foreground">
              {name}
            </h3>

            {/* verified badge */}
            <CheckCircle size={16} className="text-[#153151]" />
          </div>

          <p className="text-sm text-muted-foreground">
            {subject}
          </p>

          {/* rating */}
          <div className="flex items-center gap-1 text-xs mt-1">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground">
              ({sessions} sessions)
            </span>
          </div>
        </div>

        {/* price */}
        <div className="text-right">
          <p className="text-xs text-muted-foreground">
            Starting from
          </p>
          <p className="font-semibold text-[#153151] text-lg">
            {pricePerHour}
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="my-4 h-px bg-border" />

      {/* MIDDLE INFO */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">

        <div className="flex items-center gap-2">
          <Clock size={16} />
          {availability}
        </div>

        <div className="flex items-center gap-2">
          <Video size={16} />
          Online
        </div>
      </div>

      {/* CTA */}
      <div className="mt-5">
        <Button
          className="w-full rounded-xl bg-[#153151] hover:bg-[#1f4a7a] text-white shadow-sm"
        >
          Book Session
        </Button>
      </div>

      {/* HOVER EFFECT */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none border border-[#153151]/20" />
    </div>
  )
}