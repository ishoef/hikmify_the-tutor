// components/layout/contact-page.tsx

"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can connect to your backend or email service later
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-background min-h-screen py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#153151]/10 text-[#153151] rounded-full text-sm font-medium mb-6">
            Get In Touch
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Want to become a tutor? Or just want to say hello?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact Form - Left Side */}
          <div className="lg:col-span-7">
            <div className="bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-[#153151] transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-[#153151] transition"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-[#153151] transition"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    className="w-full px-5 py-4 rounded-3xl border border-border bg-background focus:outline-none focus:border-[#153151] transition resize-y"
                    placeholder="Write your message here..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#153151] hover:bg-[#1f4a7a] text-white py-7 rounded-2xl text-base font-medium"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information - Right Side */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Get in touch
              </h3>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#153151]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#153151]" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email Us</p>
                    <a
                      href="mailto:support@hikmify.com"
                      className="text-[#153151] hover:underline"
                    >
                      support@hikmify.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#153151]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#153151]" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Call Us</p>
                    <a
                      href="tel:+20123456789"
                      className="text-[#153151] hover:underline"
                    >
                      +20 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#153151]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#153151]" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Our Office</p>
                    <p className="text-muted-foreground">
                      Cairo, Egypt
                      <br />
                      (Available for virtual meetings worldwide)
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#153151]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#153151]" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Business Hours
                    </p>
                    <p className="text-muted-foreground">
                      Sunday - Thursday: 9:00 AM - 6:00 PM (EET)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links / FAQ Teaser */}
            <div className="bg-muted/50 rounded-3xl p-8">
              <h4 className="font-semibold mb-4">Frequently Asked Questions</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Looking for quick answers? Check our FAQ section or browse
                through common questions.
              </p>
              <Button variant="outline" className="rounded-2xl">
                Visit FAQ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
