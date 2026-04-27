import React from 'react'

export default function States() {
  return (
    <section className="py-20 bg-[#153151] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div>
            <div className="text-5xl font-bold">12K+</div>
            <div className="mt-2 text-[#a0c4ff]">Active Students</div>
          </div>
          <div>
            <div className="text-5xl font-bold">520+</div>
            <div className="mt-2 text-[#a0c4ff]">Expert Tutors</div>
          </div>
          <div>
            <div className="text-5xl font-bold">28K+</div>
            <div className="mt-2 text-[#a0c4ff]">Sessions Completed</div>
          </div>
          <div>
            <div className="text-5xl font-bold">4.98</div>
            <div className="mt-2 text-[#a0c4ff]">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
