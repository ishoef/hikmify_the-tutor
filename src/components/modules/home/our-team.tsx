import Image from 'next/image'
import React from 'react'

export default function OurTeam() {
  return (
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold">Meet Our Team</h2>
            <p className="text-muted-foreground mt-3">The people dedicated to your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Tilly Greenwood", role: "Founder & CEO", image: "https://i.pravatar.cc/300?img=5" },
              { name: "Mohamed Hassan", role: "Head of Education", image: "https://i.pravatar.cc/300?img=45" },
              { name: "Layla Nour", role: "Product & Design Lead", image: "https://i.pravatar.cc/300?img=64" },
            ].map((member) => (
              <div key={member.name} className="bg-card border border-border rounded-3xl overflow-hidden group">
                <div className="relative h-80">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-xl">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
