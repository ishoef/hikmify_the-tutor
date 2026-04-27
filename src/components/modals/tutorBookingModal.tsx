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

  const validate = () => {
    if (!selectedDay || !selectedTime) return "Please select a day and time";
    if (duration < 1 || duration > 3)
      return "Duration must be between 1–3 hours";

    const wordCount = notes.trim().split(/\s+/).length;
    if (wordCount < 5) return "Notes must contain at least 5 words";

    return "";
  };

  const handleConfirm = () => {
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    setError("");

    const bookingData = {
      tutorId,
      categoryId,
      bookingDate: selectedDay,
      startTime: selectedTime,
      duration,
      notes: notes.trim(),
      meetingLink: meetingLink || null,
    };

    console.log("BOOKING CONFIRMED:", bookingData);
    setConfirmed(true);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-[#153151] hover:bg-[#1f4a7a] text-white py-6 rounded-2xl text-base font-medium transition-all">
          Book Session
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 w-full max-w-full sm:max-w-lg lg:max-w-4xl h-[100dvh] sm:h-auto rounded-none sm:rounded-3xl flex flex-col overflow-hidden">
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b bg-background sticky top-0 z-10">
          <div>
            <h2 className="font-semibold text-lg">Book a Session</h2>
            <p className="text-sm text-muted-foreground">{tutorName}</p>
          </div>

          <DialogClose asChild>
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <X size={22} />
            </button>
          </DialogClose>
        </div>

        {/* MOBILE VIEW */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 lg:hidden">
          {/* DAY SELECTION */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Calendar size={18} className="text-[#153151]" />
              <p className="text-sm font-medium">Select Day</p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
              {availability.map((day) => (
                <button
                  key={day}
                  onClick={() => {
                    setSelectedDay(day);
                    setSelectedTime(null);
                  }}
                  className={`px-5 py-2.5 rounded-2xl text-sm border whitespace-nowrap transition-all snap-start
                    ${
                      selectedDay === day
                        ? "bg-[#153151] text-white border-[#153151]"
                        : "bg-muted hover:bg-muted/80 border-border"
                    }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* TIME SELECTION */}
          {selectedDay && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock size={18} className="text-[#153151]" />
                <p className="text-sm font-medium">Select Time</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {times.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 rounded-2xl border text-sm font-medium transition-all
                      ${
                        selectedTime === time
                          ? "bg-[#153151] text-white border-[#153151]"
                          : "bg-muted hover:bg-muted/80 border-border"
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
            <div className="flex items-center gap-2 mb-3">
              <Users size={18} className="text-[#153151]" />
              <p className="text-sm font-medium">Duration (hours)</p>
            </div>
            <div className="flex gap-3">
              {[1, 2, 3].map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`flex-1 py-3 rounded-2xl border font-medium transition-all
                    ${
                      duration === d
                        ? "bg-[#153151] text-white border-[#153151]"
                        : "bg-muted hover:bg-muted/80 border-border"
                    }`}
                >
                  {d} Hour{d > 1 && "s"}
                </button>
              ))}
            </div>
          </div>

          {/* NOTES */}
          <div>
            <p className="text-sm font-medium mb-2">
              What do you need help with?
            </p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Describe your goals or topics you'd like to cover..."
              className="w-full border border-border rounded-2xl p-4 text-sm min-h-[110px] resize-y focus:border-[#153151]"
            />
            <p className="text-xs text-muted-foreground mt-1.5">
              Minimum 5 words
            </p>
          </div>

          {/* MEETING LINK */}
          <div>
            <p className="text-sm font-medium mb-2">Meeting Link (Optional)</p>
            <Input
              value={meetingLink}
              onChange={(e) => setMeetingLink(e.target.value)}
              placeholder="https://meet.google.com/..."
              className="rounded-2xl"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm bg-red-50 p-3 rounded-xl">
              {error}
            </p>
          )}
        </div>

        {/* ================= DESKTOP HORIZONTAL VIEW ================= */}
        <div className="hidden lg:flex flex-1">
          {/* Form Section */}
          <div className="flex-1 p-10 space-y-9 overflow-y-auto">
            {/* Day */}
            <div>
              <p className="font-semibold mb-3">Select Day</p>
              <div className="flex flex-wrap gap-3">
                {availability.map((day) => (
                  <button
                    key={day}
                    onClick={() => {
                      setSelectedDay(day);
                      setSelectedTime(null);
                    }}
                    className={`px-6 py-3 rounded-2xl border transition-all
                      ${
                        selectedDay === day
                          ? "bg-[#153151] text-white border-[#153151]"
                          : "border-border hover:bg-muted"
                      }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Time */}
            {selectedDay && (
              <div>
                <p className="font-semibold mb-3">Select Time</p>
                <div className="grid grid-cols-3 gap-3">
                  {times.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3.5 rounded-2xl border text-sm font-medium transition-all
                        ${
                          selectedTime === time
                            ? "bg-[#153151] text-white border-[#153151]"
                            : "border-border hover:bg-muted"
                        }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Duration */}
            <div>
              <p className="font-semibold mb-3">Session Duration</p>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`py-3.5 rounded-2xl border font-medium transition-all
                      ${
                        duration === d
                          ? "bg-[#153151] text-white border-[#153151]"
                          : "border-border hover:bg-muted"
                      }`}
                  >
                    {d} Hour{d > 1 && "s"}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <p className="font-semibold mb-2">Session Notes</p>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="What would you like to focus on during this session?"
                className="w-full border border-border rounded-2xl p-4 min-h-[130px] resize-y focus:border-[#153151]"
              />
            </div>

            {/* Meeting Link */}
            <div>
              <p className="font-semibold mb-2">Meeting Link (Optional)</p>
              <Input
                value={meetingLink}
                onChange={(e) => setMeetingLink(e.target.value)}
                placeholder="https://meet.google.com/..."
                className="rounded-2xl py-3"
              />
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="w-96 bg-muted/50 border-l p-10 flex flex-col">
            <div className="sticky top-10 space-y-8">
              <h3 className="font-semibold text-lg">Booking Summary</h3>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Date</p>
                  <p className="font-medium">{selectedDay || "—"}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Time</p>
                  <p className="font-medium">{selectedTime || "—"}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Duration</p>
                  <p className="font-medium">
                    {duration} hour{duration > 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="bg-card p-6 rounded-2xl border">
                <p className="text-muted-foreground text-sm">Total Amount</p>
                <p className="text-3xl font-bold text-[#153151] mt-1">
                  ${totalPrice}
                </p>
              </div>

              {!confirmed ? (
                <Button
                  onClick={handleConfirm}
                  disabled={!selectedDay || !selectedTime}
                  className="w-full bg-[#153151] hover:bg-[#1f4a7a] py-6 text-base font-medium rounded-2xl"
                >
                  Confirm Booking — ${totalPrice}
                </Button>
              ) : (
                <div className="text-center py-6 text-green-600 font-medium">
                  ✅ Booking Confirmed Successfully
                </div>
              )}

              {error && (
                <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-xl">
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* MOBILE BOTTOM BAR */}
        <div className="lg:hidden border-t p-5 bg-background sticky bottom-0 z-10">
          <Button
            onClick={handleConfirm}
            disabled={!selectedDay || !selectedTime}
            className="w-full bg-[#153151] hover:bg-[#1f4a7a] py-6 rounded-2xl text-base font-medium"
          >
            Confirm Booking — ${totalPrice}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
