"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Heart,
  Trophy,
  Zap,
  Search,
  ArrowRight,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$75k – $110k",
    desc: "Build delightful, scalable user interfaces using React, Next.js, and Tailwind CSS.",
    experience: "2+ years",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$85k – $125k",
    desc: "Design and scale robust APIs, databases, and backend infrastructure.",
    experience: "3+ years",
    tags: ["Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$70k – $100k",
    desc: "Create beautiful, intuitive, and accessible user experiences.",
    experience: "2+ years",
    tags: ["Figma", "User Research"],
  },
  {
    id: 4,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Part-time",
    salary: "$45k – $65k",
    desc: "Drive growth through creative digital marketing and content strategies.",
    experience: "1+ years",
    tags: ["SEO", "Content"],
  },
];

const benefits = [
  { icon: Zap, title: "Deep Work", desc: "Async-first culture" },
  { icon: Users, title: "Offsites", desc: "Global team gatherings" },
  { icon: Heart, title: "Well-being", desc: "Full health coverage" },
  { icon: Trophy, title: "Growth", desc: "$2k annual stipend" },
];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDept, setFilterDept] = useState("All");
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const departments = ["All", "Engineering", "Design", "Marketing"];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDept = filterDept === "All" || job.department === filterDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="bg-[#fcfcfd] text-[#153151] min-h-screen font-sans">
      {/* NEW HERO SECTION - Modern Split Design */}
      <section className="min-h-[100dvh] flex items-center relative bg-[#153151] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] bg-[length:40px_40px] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 py-20">
          {/* Left Side - Text Content */}
          <div className="space-y-10 text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-[#9fd3ff] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium tracking-wide text-white/90">
                We're hiring globally
              </span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05]">
              Build the <span className="text-[#9fd3ff]">future</span> of
              <br />
              education with us.
            </h1>

            <p className="text-xl text-white/75 max-w-lg leading-relaxed">
              Join a mission-driven team creating beautiful, impactful learning
              experiences that reach millions of students worldwide.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() =>
                  document
                    .getElementById("jobs-grid")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                size="lg"
                className="rounded-2xl h-16 px-10 text-lg font-semibold bg-white text-[#153151] hover:bg-white/90 transition-all"
              >
                See Open Positions
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl h-16 px-8 text-lg border-white/20 text-white hover:bg-white/10"
              >
                Learn About Us
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="pt-6 flex items-center gap-8 text-sm text-white/60">
              <div>🌍 Remote-first</div>
              <div>💼 Equity offered</div>
              <div>🚀 Fast-growing</div>
            </div>
          </div>

          {/* Right Side - Visual / Benefits Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-5">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className={`bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl transition-all hover:bg-white/15 group ${
                    i === 1 || i === 2 ? "lg:mt-12" : ""
                  }`}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                    <b.icon className="w-7 h-7 text-[#9fd3ff]" />
                  </div>

                  <h3 className="text-white font-semibold text-2xl mb-3 tracking-tight">
                    {b.title}
                  </h3>

                  <p className="text-white/70 text-[15px] leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Floating Highlight Card */}
            <div className="absolute -bottom-6 -right-6 bg-white text-[#153151] p-6 rounded-3xl shadow-2xl max-w-[240px] hidden xl:block">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-6 h-6 text-amber-500" />
                <div className="text-sm font-medium">Join our mission</div>
              </div>
              <p className="text-sm leading-snug text-[#153151]/80">
                Help shape how the world learns. Every role here makes a real
                difference.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-widest">SCROLL TO EXPLORE</span>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        </div>
      </section>

      {/* JOB EXPLORER SECTION */}
      <section id="jobs-grid" className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar Filters */}
          <aside className="lg:w-72 lg:sticky lg:top-8 h-fit space-y-10">
            <div>
              <h4 className="font-semibold text-sm tracking-widest text-[#153151]/50 mb-3">
                SEARCH ROLES
              </h4>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#153151]/40" />
                <Input
                  placeholder="Filter roles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 rounded-2xl border-[#153151]/10 focus-visible:ring-[#153151] bg-white"
                />
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm tracking-widest text-[#153151]/50 mb-3">
                DEPARTMENTS
              </h4>
              <div className="flex flex-col gap-1">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setFilterDept(dept)}
                    className={`text-left px-5 py-3.5 rounded-2xl transition-all text-[15px] font-medium ${
                      filterDept === dept
                        ? "bg-[#153151] text-white"
                        : "hover:bg-[#153151]/5 text-[#153151]/70"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Jobs List */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold tracking-tight">
                {filterDept === "All"
                  ? "All Open Roles"
                  : `${filterDept} Roles`}
              </h2>
              <p className="text-sm text-[#153151]/50">
                {filteredJobs.length} position
                {filteredJobs.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="group bg-white border border-[#153151]/8 hover:border-[#153151]/20 p-8 lg:p-10 rounded-3xl transition-all hover:shadow-xl hover:shadow-[#153151]/5 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 bg-[#153151]/5 rounded-full text-[#153151]">
                        {job.department}
                      </span>
                      <span className="text-xs text-[#153151]/50">
                        • {job.type}
                      </span>
                    </div>

                    <h3 className="text-3xl font-semibold mb-4 group-hover:text-[#153151] transition-colors">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#153151]/60 mb-6">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <DollarSign className="w-4 h-4" /> {job.salary}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" /> {job.experience}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-[#153151]/10 text-[#153151]/70 hover:bg-[#153151]/5 px-3 py-1 text-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => setSelectedJob(job)}
                    className="rounded-2xl bg-[#153151] hover:bg-[#153151]/90 px-10 h-14 text-base font-semibold whitespace-nowrap self-start lg:self-center"
                  >
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION MODAL */}
      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="sm:max-w-xl rounded-3xl p-0 overflow-hidden">
          <div className="p-10">
            <DialogHeader className="mb-8 text-left">
              <DialogTitle className="text-4xl font-bold tracking-tight">
                {selectedJob?.title}
              </DialogTitle>
              <DialogDescription className="text-xs font-semibold tracking-[1px] text-[#153151]/50 mt-1">
                APPLICATION FOR
              </DialogDescription>
            </DialogHeader>

            <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-[#153151]/70 block mb-2">
                    Full Name
                  </label>
                  <Input
                    className="h-12 rounded-2xl border-[#153151]/10 focus-visible:ring-[#153151] bg-gray-50"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#153151]/70 block mb-2">
                    Email Address
                  </label>
                  <Input
                    className="h-12 rounded-2xl border-[#153151]/10 focus-visible:ring-[#153151] bg-gray-50"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-[#153151]/70 block mb-2">
                  Why are you a great fit?
                </label>
                <textarea
                  className="w-full h-40 rounded-3xl bg-gray-50 border border-[#153151]/10 p-5 focus:border-[#153151] focus:ring-[#153151] resize-y min-h-[140px]"
                  placeholder="I'm really passionate about education technology because..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-14 rounded-2xl flex-1 border-[#153151]/10 hover:bg-gray-100"
                  >
                    Cancel
                  </Button>
                </DialogClose>

                <Button
                  type="submit"
                  className="h-14 rounded-2xl bg-[#153151] hover:bg-[#153151]/90 flex-1 text-lg font-semibold"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
