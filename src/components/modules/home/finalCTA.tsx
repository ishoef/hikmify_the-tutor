import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#153151] text-white text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
          Ready to start your learning journey?
        </h2>
        <p className="text-[#a0c4ff] text-lg mb-10">
          Join thousands of students who are already improving their skills with
          expert guidance.
        </p>
        <Link href="/tutors">
          <Button
            size="lg"
            className="bg-white text-[#153151] hover:bg-white/90 px-12 py-7 rounded-2xl text-base font-medium"
          >
            Browse All Tutors
          </Button>
        </Link>
      </div>
    </section>
  );
}
