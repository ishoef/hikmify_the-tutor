// components/layout/blog-page.tsx
"use client";

import Image from "next/image";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "How to Prepare for IELTS in 30 Days: A Complete Guide",
    excerpt:
      "Master the IELTS exam with this step-by-step 30-day preparation plan from our top IELTS tutors.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    category: "Exam Preparation",
    date: "April 20, 2026",
    readTime: "8 min",
    author: "Ahmed Hassan",
    slug: "ielts-30-days-guide",
  },
  {
    id: 2,
    title: "Why Students Are Choosing Online Tutoring in 2026",
    excerpt:
      "Discover the biggest advantages of learning online and how it's transforming education worldwide.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    category: "Learning Tips",
    date: "April 18, 2026",
    readTime: "6 min",
    author: "Sarah Chen",
    slug: "why-online-tutoring-2026",
  },
  {
    id: 3,
    title: "10 Proven Ways to Improve Your Math Skills Fast",
    excerpt:
      "Practical techniques and study habits that actually work. Backed by our experienced math tutors.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
    category: "Mathematics",
    date: "April 15, 2026",
    readTime: "12 min",
    author: "Dr. Sarah Chen",
    slug: "improve-math-skills-fast",
  },
  {
    id: 4,
    title:
      "The Science of Effective Learning: What Top Students Do Differently",
    excerpt:
      "Learn the proven study techniques used by high-achieving students around the world.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
    category: "Study Tips",
    date: "April 12, 2026",
    readTime: "10 min",
    author: "Layla Nour",
    slug: "science-of-effective-learning",
  },
];

const categories = [
  "All",
  "Exam Preparation",
  "Learning Tips",
  "Mathematics",
  "Study Tips",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#153151]/10 text-[#153151] rounded-full text-sm font-medium mb-6">
            HikmiFy Blog
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Insights & Learning Tips
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert advice, study strategies, and success stories from our tutors
            and students.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border border-border bg-card focus:outline-none focus:border-[#153151] text-base"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-2xl whitespace-nowrap font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-[#153151] text-white"
                    : "bg-card border border-border hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 px-4 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold leading-tight mb-4 line-clamp-2 group-hover:text-[#153151] transition-colors">
                  {post.title}
                </h2>

                <p className="text-muted-foreground line-clamp-3 mb-6">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>

              {/* Read More */}
              <div className="px-6 pb-6 pt-2 flex items-center gap-2 text-[#153151] font-medium text-sm group-hover:gap-3 transition-all">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-muted-foreground">No articles found.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-6 text-[#153151] hover:underline"
            >
              Clear filters and try again
            </button>
          </div>
        )}

        {/* Newsletter / Subscribe Section */}
        <div className="mt-20 bg-[#153151] rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-[#a0c4ff] mb-8 max-w-md mx-auto">
            Get the latest learning tips, study guides, and success stories
            delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none placeholder:text-white/60"
            />
            <Button className="bg-white text-[#153151] hover:bg-white/90 px-10 rounded-2xl">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
