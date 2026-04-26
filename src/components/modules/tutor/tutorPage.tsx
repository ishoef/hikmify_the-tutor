// components/layout/tutors-page.tsx
"use client";

import Image from "next/image";
import { Star, Clock, Users, Award, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
import Link from "next/link";
import BookingModal from "@/components/modals/tutorBookingModal";

const allTutors = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Mathematics & Physics Expert",
    image: "https://i.pravatar.cc/300?img=32",
    rating: 4.98,
    reviews: 1243,
    students: 2450,
    experience: 8,
    price: 45,
    subjects: ["Mathematics", "Physics", "Algebra"],
    bio: "PhD in Applied Mathematics. Making complex concepts simple and enjoyable.",
    availability: "Today",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    title: "English & IELTS Specialist",
    image: "https://i.pravatar.cc/300?img=45",
    rating: 4.95,
    reviews: 892,
    students: 1870,
    experience: 6,
    price: 35,
    subjects: ["English", "IELTS", "Business English"],
    bio: "Certified IELTS examiner helping students achieve their dream scores.",
    availability: "Tomorrow",
  },
  {
    id: 3,
    name: "Layla Nour",
    title: "Chemistry & Biology Tutor",
    image: "https://i.pravatar.cc/300?img=64",
    rating: 4.97,
    reviews: 673,
    students: 1320,
    experience: 7,
    price: 40,
    subjects: ["Chemistry", "Biology", "Organic Chemistry"],
    bio: "MSc in Biochemistry. Passionate about making science fun and understandable.",
    availability: "Today",
  },
  {
    id: 4,
    name: "Omar Khaled",
    title: "Computer Science & Programming",
    image: "https://i.pravatar.cc/300?img=67",
    rating: 4.89,
    reviews: 542,
    students: 980,
    experience: 5,
    price: 38,
    subjects: ["Programming", "Python", "Data Structures"],
    bio: "Software engineer with 5+ years teaching coding to beginners and advanced students.",
    availability: "This Week",
  },
];

export default function TutorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [sortBy, setSortBy] = useState<
    "rating" | "price-low" | "price-high" | "experience"
  >("rating");

  // Filter and Sort Logic
  const filteredAndSortedTutors = useMemo(() => {
    let result = [...allTutors];

    // Search Filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (tutor) =>
          tutor.name.toLowerCase().includes(term) ||
          tutor.bio.toLowerCase().includes(term) ||
          tutor.subjects.some((subject) =>
            subject.toLowerCase().includes(term),
          ),
      );
    }

    // Subject Filter
    if (selectedSubject !== "All") {
      result = result.filter((tutor) =>
        tutor.subjects.includes(selectedSubject),
      );
    }

    // Sorting
    switch (sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "experience":
        result.sort((a, b) => b.experience - a.experience);
        break;
    }

    return result;
  }, [searchTerm, selectedSubject, sortBy]);

  const subjects = [
    "All",
    "Mathematics",
    "Physics",
    "English",
    "Chemistry",
    "Biology",
    "Programming",
  ];

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Find Your Perfect Tutor
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our verified expert tutors and book a session that fits your
            goals
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div className="bg-card border border-border rounded-3xl p-6 mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by name, subject, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3.5 rounded-2xl border border-border bg-background focus:outline-none focus:border-[#153151] text-base"
              />
            </div>

            {/* Subject Filter */}
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-5 py-3.5 rounded-2xl border border-border bg-background focus:outline-none focus:border-[#153151]"
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as
                    | "rating"
                    | "price-low"
                    | "price-high"
                    | "experience",
                )
              }
              className="px-5 py-3.5 rounded-2xl border border-border bg-background focus:outline-none focus:border-[#153151]"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="experience">Most Experienced</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filteredAndSortedTutors.length}
            </span>{" "}
            tutors
          </p>
          <p className="text-sm text-muted-foreground">
            Real tutors • Verified profiles
          </p>
        </div>

        {/* Tutors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedTutors.map((tutor) => (
            <div
              key={tutor.id}
              className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Section */}
              <div className="relative h-72">
                <Image
                  src={tutor.image}
                  alt={tutor.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-zinc-900 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow">
                  <span className="text-green-500">●</span> {tutor.availability}
                </div>
              </div>

              {/* Tutor Info */}
              <div className="p-6">
                <div className="flex justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold">{tutor.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {tutor.title}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="font-bold text-lg">{tutor.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      ({tutor.reviews})
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-5">
                  {tutor.bio}
                </p>

                {/* Subjects */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tutor.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1 text-xs bg-[#153151]/10 text-[#153151] rounded-full font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center mb-6 text-sm">
                  <div>
                    <div className="font-semibold">{tutor.experience} yrs</div>
                    <div className="text-xs text-muted-foreground">Exp.</div>
                  </div>
                  <div>
                    <div className="font-semibold">
                      {tutor.students.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Students
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">${tutor.price}</div>
                    <div className="text-xs text-muted-foreground">/hour</div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  {/* Booking Button */}
                  <BookingModal
                    tutorId="4ec3ee6f-4942-4df2-8c07-92c7d242b8ff"
                    categoryId="b0c26c46-11eb-4ef4-8b70-aa7e9815f3b2"
                    tutorName={"ismail"}
                    price={24}
                    availability={["sunday", "monday", "thuesday"]}
                  />
                  <Button
                    variant="outline"
                    className="flex-1 rounded-2xl py-2 text-base"
                  >
                    <Link href={`/tutors/${tutor.id}`}>View Profile</Link>{" "}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAndSortedTutors.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-muted-foreground">
              No tutors found matching your criteria.
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => {
                setSearchTerm("");
                setSelectedSubject("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
