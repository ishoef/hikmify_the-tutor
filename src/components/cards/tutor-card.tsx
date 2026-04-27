"use client";

import Image from "next/image";
import { Star, Clock, Video, CheckCircle } from "lucide-react";
import BookingModal from "../modals/tutorBookingModal";

interface TutorCardProps {
  name: string;
  avatar: string;
  subject: string;
  rating: number;
  sessions: number;
  pricePerHour: string;
  availability: string;
  isOnline?: boolean;
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
    <div className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Avatar Section */}
      <div className="relative h-64 bg-muted">
        <Image
          src={avatar}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Online Status */}
        {isOnline && (
          <div className="absolute top-4 right-4 bg-white dark:bg-zinc-900 px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-medium shadow">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Online Now
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-xl tracking-tight">{name}</h3>
              <CheckCircle size={18} className="text-[#153151] mt-1" />
            </div>
            <p className="text-muted-foreground text-sm mt-1">{subject}</p>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="text-xs text-muted-foreground">From</p>
            <p className="text-2xl font-bold text-[#153151] tracking-tighter">
              {pricePerHour}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-5">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <span className="font-medium text-foreground">{rating}</span>
          <span className="text-muted-foreground text-sm">
            ({sessions} sessions)
          </span>
        </div>

        {/* Availability */}
        <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
          <Clock size={17} />
          <span>{availability}</span>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-border" />

        {/* Booking Button */}
        <BookingModal
          tutorId="4ec3ee6f-4942-4df2-8c07-92c7d242b8ff"
          categoryId="b0c26c46-11eb-4ef4-8b70-aa7e9815f3b2"
          tutorName={name}
          price={parseInt(pricePerHour.replace(/[^0-9]/g, "")) || 25}
          availability={["Saturday", "Sunday", "Monday"]}
        />
      </div>

      {/* Subtle hover border effect */}
      <div className="absolute inset-0 rounded-3xl border border-[#153151]/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-all" />
    </div>
  );
}
