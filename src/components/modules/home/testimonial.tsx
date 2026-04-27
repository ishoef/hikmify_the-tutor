import { Star } from 'lucide-react';
import React from 'react'

export default function Testimonial() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold">What Our Students Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              role: "Computer Science Student",
              text: "Thanks to my tutor, I went from failing calculus to getting an A in just 6 weeks.",
            },
            {
              name: "Mohamed Ali",
              role: "IELTS Student",
              text: "I improved my IELTS score from 5.5 to 7.5 in one month. Best investment I've made.",
            },
            {
              name: "Layla Nour",
              role: "Aspiring Designer",
              text: "Tilly helped me build a portfolio that got me my first design job. Highly recommend!",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-3xl p-8"
            >
              <div className="flex text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="mt-6">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
