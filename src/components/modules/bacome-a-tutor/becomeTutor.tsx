"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  phone: string;
  bio: string;
  subjects: string[];
  experience: string;
  qualification: string;
  hourlyRate: number;
  availability: string[];
  categoryName: string;
};

export default function BecomeTutorForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "Ismail Ahmed",
    email: "ismail@example.com",
    phone: "+20 123 456 7890",
    bio: "",
    subjects: [],
    experience: "",
    qualification: "",
    hourlyRate: 0,
    availability: [],
    categoryName: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggle = (key: "subjects" | "availability", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.bio || formData.bio.length < 20)
      newErrors.bio = "Bio must be at least 20 characters";

    if (formData.subjects.length === 0)
      newErrors.subjects = "Select at least one subject";

    if (!formData.qualification)
      newErrors.qualification = "Qualification is required";

    if (!formData.experience) newErrors.experience = "Experience is required";

    if (!formData.hourlyRate || formData.hourlyRate <= 0)
      newErrors.hourlyRate = "Enter valid hourly rate";

    if (formData.availability.length === 0)
      newErrors.availability = "Select availability";

    if (!formData.categoryName) newErrors.categoryName = "Category is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Submitted:", formData);

      toast.success("Application submitted successfully 🎉", {
        description: "Our team will review your profile soon",
      });

      setIsSubmitting(false);
    }, 1200);
  };

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const subjects = [
    "Math",
    "Physics",
    "UI/UX",
    "Programming",
    "Cyber Security",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-[1.6fr_1fr] gap-12">
      {/* ================= LEFT ================= */}
      <div className="space-y-5">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight">Become a Tutor</h1>
          <p className="text-muted-foreground mt-3 text-lg">
            Build your profile and start teaching students globally
          </p>
        </div>

        {/* USER INFO */}
        <div className="bg-card border border-border rounded-3xl p-8 grid md:grid-cols-3 gap-6">
          <div>
            <Label className="text-sm text-muted-foreground">Full Name</Label>
            <Input value={formData.name} disabled className="bg-muted mt-1" />
          </div>
          <div>
            <Label className="text-sm text-muted-foreground">
              Email Address
            </Label>
            <Input value={formData.email} disabled className="bg-muted mt-1" />
          </div>
          <div>
            <Label className="text-sm text-muted-foreground">
              Phone Number
            </Label>
            <Input value={formData.phone} disabled className="bg-muted mt-1" />
          </div>
        </div>

        {/* BIO */}
        <div className="bg-card border border-border rounded-3xl p-8 space-y-3">
          <Label className="text-base font-medium">Professional Bio</Label>
          <Textarea
            className="min-h-35"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          />
          {errors.bio && <p className="text-red-500 text-xs">{errors.bio}</p>}
        </div>

        {/* SUBJECTS */}
        <div className="bg-card border border-border rounded-3xl p-8 space-y-4">
          <Label className="text-base font-medium">Subjects You Teach</Label>
          <div className="flex flex-wrap gap-3">
            {subjects.map((s) => (
              <button
                key={s}
                onClick={() => toggle("subjects", s)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-medium border ${
                  formData.subjects.includes(s)
                    ? "bg-[#153151] text-white border-[#153151]"
                    : "border-border hover:bg-muted"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          {errors.subjects && (
            <p className="text-red-500 text-xs">{errors.subjects}</p>
          )}
        </div>

        {/* QUALIFICATION */}
        <div className="bg-card border border-border rounded-3xl p-8 grid md:grid-cols-2 gap-8">
          <div>
            <Label className="text-base font-medium pb-3">
              Highest Qualification
            </Label>
            <Input
              value={formData.qualification}
              onChange={(e) =>
                setFormData({ ...formData, qualification: e.target.value })
              }
            />
            {errors.qualification && (
              <p className="text-red-500 text-xs pt-3">{errors.qualification}</p>
            )}
          </div>

          <div>
            <Label className="text-base font-medium pb-3">Experience</Label>
            <Input
              value={formData.experience}
              onChange={(e) =>
                setFormData({ ...formData, experience: e.target.value })
              }
            />
            {errors.experience && (
              <p className="text-red-500 text-xs pt-3">{errors.experience}</p>
            )}
          </div>
        </div>

        {/* RATE */}
        <div className="bg-card border border-border rounded-3xl p-8 space-y-3">
          <Label className="text-base font-medium">Hourly Rate</Label>
          <Input
            type="number"
            value={formData.hourlyRate || ""}
            onChange={(e) =>
              setFormData({ ...formData, hourlyRate: Number(e.target.value) })
            }
          />
          {errors.hourlyRate && (
            <p className="text-red-500 text-xs">{errors.hourlyRate}</p>
          )}
        </div>

        {/* AVAILABILITY */}
        <div className="bg-card border border-border rounded-3xl p-8 space-y-4">
          <Label className="text-base font-medium">Availability</Label>
          <div className="flex flex-wrap gap-3">
            {days.map((d) => (
              <button
                key={d}
                onClick={() => toggle("availability", d)}
                className={`px-5 py-3 rounded-2xl text-sm border ${
                  formData.availability.includes(d)
                    ? "bg-[#153151] text-white"
                    : "border-border"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
          {errors.availability && (
            <p className="text-red-500 text-xs">{errors.availability}</p>
          )}
        </div>

        {/* CATEGORY */}
        <div className="bg-card border border-border rounded-3xl p-8 space-y-3">
          <Label className="text-base font-medium">Category</Label>
          <Input
            value={formData.categoryName}
            onChange={(e) =>
              setFormData({ ...formData, categoryName: e.target.value })
            }
          />
          {errors.categoryName && (
            <p className="text-red-500 text-xs">{errors.categoryName}</p>
          )}
        </div>

        {/* SUBMIT */}
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-[#153151] hover:bg-[#1f4a7a] py-7 text-lg font-semibold rounded-2xl shadow-lg"
        >
          {isSubmitting ? "Submitting..." : "Submit Tutor Application"}
        </Button>
      </div>

      {/* RIGHT PREVIEW (UNCHANGED) */}
      <div className="sticky top-24 h-fit">
        <div className="bg-card border border-border rounded-3xl shadow-xl overflow-hidden">
          {/* Profile Header */}
          <div className="p-8 border-b border-border bg-gradient-to-br from-[#153151]/5 to-transparent">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-[#153151] text-white flex items-center justify-center text-3xl font-bold shadow-inner">
                {formData.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-2xl tracking-tight">
                  {formData.name}
                </p>
                <p className="text-muted-foreground">
                  {formData.categoryName || "Tutor"}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Bio Preview */}
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                About
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                {formData.bio ||
                  "Your professional bio will appear here once you write it."}
              </p>
            </div>

            {/* Qualification & Experience */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-muted/50 rounded-2xl p-4">
                <p className="text-xs text-muted-foreground">Qualification</p>
                <p className="font-medium mt-1 text-sm">
                  {formData.qualification || "—"}
                </p>
              </div>
              <div className="bg-muted/50 rounded-2xl p-4">
                <p className="text-xs text-muted-foreground">Experience</p>
                <p className="font-medium mt-1 text-sm">
                  {formData.experience || "—"}
                </p>
              </div>
            </div>

            {/* Subjects */}
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Subjects
              </p>
              <div className="flex flex-wrap gap-2">
                {formData.subjects.length > 0 ? (
                  formData.subjects.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-4 py-1.5 bg-[#153151]/10 text-[#153151] rounded-full font-medium"
                    >
                      {s}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground italic">
                    No subjects selected yet
                  </p>
                )}
              </div>
            </div>

            {/* Hourly Rate */}
            <div className="bg-[#153151]/5 border border-[#153151]/10 rounded-2xl p-6">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-muted-foreground">Hourly Rate</p>
                  <p className="text-4xl font-bold text-[#153151] tracking-tighter">
                    ${formData.hourlyRate || 0}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">/ hour</span>
              </div>
            </div>

            {/* Availability */}
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Availability
              </p>
              <div className="flex flex-wrap gap-2">
                {formData.availability.length > 0 ? (
                  formData.availability.map((d) => (
                    <span
                      key={d}
                      className="text-xs px-4 py-1.5 bg-muted rounded-full font-medium capitalize"
                    >
                      {d}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground italic">
                    No days selected yet
                  </p>
                )}
              </div>
            </div>

            {/* Preview Booking Button */}
            <Button className="w-full bg-[#153151] hover:bg-[#1f4a7a] py-6 rounded-2xl text-base font-medium">
              Preview Booking Flow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
