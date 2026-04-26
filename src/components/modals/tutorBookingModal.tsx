"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Users, X } from "lucide-react";

type Props = {
  tutorId: string;
  categoryId: string;
  tutorName: string;
  price: number;
  availability: string[];
};

export default function BookingModal({
  tutorId,
  categoryId,
  tutorName,
  price,
  availability,
}: Props) {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [duration, setDuration] = useState(1);
  const [notes, setNotes] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const times = [
    "09:00 AM",
    "10:30 AM",
    "12:00 PM",
    "02:00 PM",
    "04:00 PM",
    "06:00 PM",
  ];

  const totalPrice = price * duration;

  /* ================= VALIDATION ================= */
  const validate = () => {
    if (!selectedDay || !selectedTime) return "Select day & time";
    if (duration < 1 || duration > 3) return "Duration must be 1–3 hours";

    const wordCount = notes.trim().split(/\s+/).length;
    if (wordCount < 5) return "Notes must be at least 5 words";

    return "";
  };

  const handleConfirm = () => {
    const err = validate();
    if (err) return setError(err);

    setError("");

    const bookingData = {
      tutorId,
      categoryId,
      bookingDate: selectedDay,
      startTime: selectedTime,
      duration,
      notes,
      meetingLink: meetingLink || null,
    };

    console.log("BOOKING:", bookingData);

    setConfirmed(true);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-[#153151] text-white py-6 rounded-2xl">
          Book Session
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 w-full max-w-full sm:max-w-lg lg:max-w-4xl h-[100dvh] sm:h-auto rounded-none sm:rounded-3xl flex flex-col">
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b bg-background sticky top-0 z-10">
          <div>
            <h2 className="font-semibold">Book Session</h2>
            <p className="text-xs text-muted-foreground">{tutorName}</p>
          </div>

          <DialogClose asChild>
            <button>
              <X size={20} />
            </button>
          </DialogClose>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6 lg:hidden">
          {/* DAY */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={18} className="text-[#153151]" />
              <p className="text-sm font-medium">Day</p>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {availability.map((day) => (
                <button
                  key={day}
                  onClick={() => {
                    setSelectedDay(day);
                    setSelectedTime(null);
                  }}
                  className={`px-4 py-2 rounded-full text-sm border whitespace-nowrap
                    ${
                      selectedDay === day
                        ? "bg-[#153151] text-white"
                        : "bg-muted"
                    }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* TIME */}
          {selectedDay && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock size={18} className="text-[#153151]" />
                <p className="text-sm font-medium">Time</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {times.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 rounded-xl text-sm border
                      ${
                        selectedTime === time
                          ? "bg-[#153151] text-white"
                          : "bg-muted"
                      }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* DURATION */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Users size={18} className="text-[#153151]" />
              <p className="text-sm font-medium">Duration</p>
            </div>

            <div className="flex gap-2">
              {[1, 2, 3].map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`flex-1 py-2 rounded-xl border
                    ${duration === d ? "bg-[#153151] text-white" : "bg-muted"}`}
                >
                  {d}h
                </button>
              ))}
            </div>
          </div>

          {/* NOTES */}
          <div>
            <p className="text-sm font-medium mb-2">Notes</p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border rounded-xl p-3 text-sm bg-background min-h-[100px]"
            />
          </div>

          {/* LINK */}
          <div>
            <p className="text-sm font-medium mb-2">Meeting Link</p>
            <Input
              value={meetingLink}
              onChange={(e) => setMeetingLink(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden lg:flex flex-1">
          {/* LEFT */}
          <div className="flex-1 p-10 space-y-8">
            {/* DAY */}
            <div>
              <p className="font-semibold mb-3">Select Day</p>
              <div className="flex flex-wrap gap-2">
                {availability.map((day) => (
                  <button
                    key={day}
                    onClick={() => {
                      setSelectedDay(day);
                      setSelectedTime(null);
                    }}
                    className={`px-4 py-2 rounded-xl border
                      ${
                        selectedDay === day
                          ? "bg-[#153151] text-white"
                          : "hover:bg-muted"
                      }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* TIME */}
            {selectedDay && (
              <div>
                <p className="font-semibold mb-3">Select Time</p>
                <div className="grid grid-cols-3 gap-3">
                  {times.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 rounded-xl border
                        ${
                          selectedTime === time
                            ? "bg-[#153151] text-white"
                            : "hover:bg-muted"
                        }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* DURATION */}
            <div>
              <p className="font-semibold mb-3">Duration</p>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`py-3 rounded-xl border
                      ${
                        duration === d
                          ? "bg-[#153151] text-white"
                          : "hover:bg-muted"
                      }`}
                  >
                    {d} Hour
                  </button>
                ))}
              </div>
            </div>

            {/* NOTES */}
            <div>
              <p className="font-semibold mb-2">Notes</p>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border rounded-xl p-4"
                rows={4}
              />
            </div>

            {/* LINK */}
            <div>
              <p className="font-semibold mb-2">Meeting Link</p>
              <Input
                value={meetingLink}
                onChange={(e) => setMeetingLink(e.target.value)}
              />
            </div>
          </div>

          {/* RIGHT SUMMARY */}
          <div className="w-[360px] bg-muted/40 p-8 border-l">
            <div className="sticky top-10 space-y-6">
              <h3 className="font-semibold">Summary</h3>

              <div className="text-sm space-y-2">
                <p>Day: {selectedDay || "-"}</p>
                <p>Time: {selectedTime || "-"}</p>
                <p>Duration: {duration}h</p>
              </div>

              <div className="bg-card p-5 rounded-xl border">
                <p>Total</p>
                <p className="text-xl font-bold text-[#153151]">
                  ${totalPrice}
                </p>
              </div>

              {!confirmed ? (
                <Button
                  onClick={handleConfirm}
                  className="w-full bg-[#153151] text-white py-5"
                >
                  Confirm Booking
                </Button>
              ) : (
                <p className="text-green-600 text-center">
                  ✅ Booking Confirmed
                </p>
              )}

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
            </div>
          </div>
        </div>

        {/* MOBILE CTA */}
        <div className="lg:hidden border-t p-4">
          <Button
            onClick={handleConfirm}
            className="w-full bg-[#153151] text-white py-5"
          >
            Confirm • ${totalPrice}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
