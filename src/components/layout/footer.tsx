"use client";

import Link from "next/link";
import {Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* TOP */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#153151] rounded-xl flex items-center justify-center text-white font-bold">
                H
              </div>
              <span className="text-lg font-semibold text-foreground">
                HikmiFy
              </span>
            </div>

            <p className="text-sm text-muted-foreground max-w-xs">
              Book sessions with expert tutors and level up your skills with
              personalized learning.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-3 pt-2">
              <Link href="#">
                <div className="p-2 rounded-lg border border-border hover:bg-muted transition">
                  <FaFacebook size={16} />
                </div>
              </Link>
              <Link href="#">
                <div className="p-2 rounded-lg border border-border hover:bg-muted transition">
                  <BsTwitter size={16} />
                </div>
              </Link>
              <Link href="#">
                <div className="p-2 rounded-lg border border-border hover:bg-muted transition">
                  <BsLinkedin size={16} />
                </div>
              </Link>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Platform</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-[#153151] transition">
                Find Tutors
              </Link>
              <Link href="#" className="hover:text-[#153151] transition">
                Become a Tutor
              </Link>
              <Link href="#" className="hover:text-[#153151] transition">
                Pricing
              </Link>
              <Link href="#" className="hover:text-[#153151] transition">
                Blog
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-[#153151] transition">
                About Us
              </Link>
              <Link href="#" className="hover:text-[#153151] transition">
                Careers
              </Link>
              <Link href="/contact" className="hover:text-[#153151] transition">
                Contact
              </Link>
              <Link href="/privacy-policy" className="hover:text-[#153151] transition">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Stay Updated</h4>

            <p className="text-sm text-muted-foreground mb-4">
              Get updates on new tutors and features.
            </p>

            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 h-10 px-3 rounded-lg border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-[#153151]"
              />

              <Button className="bg-[#153151] hover:bg-[#1f4a7a] text-white px-4">
                <Mail size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-border" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HikmiFy. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-[#153151] transition">
              Terms
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#153151] transition">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="hover:text-[#153151] transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
