"use client";

import Image from "next/image";
import { Users, BookOpen, Globe, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* ================= HERO ================= */}
      <section className="relative py-24 lg:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#153151]/5 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#153151]/10 text-[#153151] rounded-full text-sm mb-6">
            Since 2024
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            About HikmiFy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Connecting passionate learners with expert tutors worldwide to
            create meaningful and personalized learning experiences.
          </p>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-[#153151] text-white text-sm font-medium rounded-full">
              Our Mission
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              Making quality education{" "}
              <span className="text-[#153151]">accessible</span> to everyone.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At HikmiFy, we believe learning should not be limited by location,
              time, or background. We connect students with verified expert
              tutors from around the globe, offering flexible, one-on-one, and
              group sessions tailored to your goals.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
              alt="Students learning with tutors"
              width={1200}
              height={750}
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm opacity-90">Real students • Real results</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 px-6 bg-[#153151]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 text-center text-white">
            <div>
              <div className="text-5xl lg:text-6xl font-bold mb-3">12K+</div>
              <p className="text-[#a0c4ff] text-lg">Active Learners</p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold mb-3">500+</div>
              <p className="text-[#a0c4ff] text-lg">Expert Tutors</p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold mb-3">20K+</div>
              <p className="text-[#a0c4ff] text-lg">Sessions Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-semibold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Community First",
                desc: "We foster meaningful connections between learners and educators built on trust and respect.",
              },
              {
                icon: BookOpen,
                title: "Lifelong Growth",
                desc: "We are committed to helping every student achieve their full potential through continuous learning.",
              },
              {
                icon: Globe,
                title: "Global Access",
                desc: "Quality education should have no borders. We make learning possible for students worldwide.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-3xl hover:border-[#153151]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#153151]/10 flex items-center justify-center mb-6 group-hover:bg-[#153151] transition-colors">
                  <value.icon className="w-7 h-7 text-[#153151] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-20 px-6 bg-muted/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold mb-3">Meet Our Team</h2>
            <p className="text-muted-foreground">
              The passionate people behind HikmiFy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Founder & CEO",
                img: "https://i.pravatar.cc/300?img=32",
              },
              {
                name: "Mohamed Hassan",
                role: "Head of Education",
                img: "https://i.pravatar.cc/300?img=45",
              },
              {
                name: "Layla Nour",
                role: "Product & Design",
                img: "https://i.pravatar.cc/300?img=64",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-card rounded-3xl overflow-hidden border border-border group hover:shadow-lg transition-all"
              >
                <div className="relative h-80">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-6 text-center bg-[#153151]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to join the journey?
          </h2>
          <p className="text-[#a0c4ff] text-lg mb-10">
            Start learning with expert tutors today and unlock your full
            potential.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#153151] hover:bg-white/90 text-base px-10 py-6 rounded-2xl font-medium flex items-center gap-3 mx-auto"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
