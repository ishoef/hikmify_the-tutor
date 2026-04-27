import { GraduationCap } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function Categories() {
  return (
    <section className="py-20">
      <div className="container  mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold">Popular Subjects</h2>
          <p className="text-muted-foreground mt-3">
            Learn from experts in any field
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "Mathematics",
            "Physics",
            "English",
            "Chemistry",
            "UI/UX Design",
            "Programming",
          ].map((subject) => (
            <Link
              key={subject}
              href={`/tutors?subject=${subject.toLowerCase()}`}
            >
              <div className="bg-card border border-border hover:border-[#153151]/30 rounded-3xl p-8 text-center transition-all hover:shadow-md group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#153151]/10 flex items-center justify-center group-hover:bg-[#153151] transition-colors">
                  <GraduationCap
                    className="text-[#153151] group-hover:text-white"
                    size={28}
                  />
                </div>
                <p className="font-medium">{subject}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
