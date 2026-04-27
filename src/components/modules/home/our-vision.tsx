import { Heart, Target } from 'lucide-react';
import React from 'react'

export default function OurVision() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card border border-border rounded-3xl p-12">
            <div className="w-16 h-16 rounded-2xl bg-[#153151]/10 flex items-center justify-center mb-8">
              <Target className="text-[#153151]" size={36} />
            </div>
            <h2 className="text-3xl font-semibold mb-5">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To democratize quality education by making expert tutoring
              accessible to every learner, anywhere in the world.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-12">
            <div className="w-16 h-16 rounded-2xl bg-[#153151]/10 flex items-center justify-center mb-8">
              <Heart className="text-[#153151]" size={36} />
            </div>
            <h2 className="text-3xl font-semibold mb-5">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To create meaningful connections between passionate students and
              exceptional tutors, fostering real growth through personalized
              learning experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
