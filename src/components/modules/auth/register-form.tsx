"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GoogleLoginButton from "./google-login";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
      {/* HEADER */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-foreground">
          Create your account
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Start learning with expert tutors
        </p>
      </div>

      {/* FORM */}
      <form className="space-y-5">
        {/* Name */}
        <div className="space-y-2">
          <Label>Full Name</Label>
          <Input type="text" placeholder="John Doe" required />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label>Email</Label>
          <Input type="email" placeholder="you@example.com" required />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label>Password</Label>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label>Confirm Password</Label>

          <div className="relative">
            <Input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm your password"
              required
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <input type="checkbox" className="mt-1" required />
          <p>
            I agree to the{" "}
            <Link href="#" className="text-[#153151] font-medium">
              Terms & Conditions
            </Link>
          </p>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full bg-[#153151] hover:bg-[#1f4a7a] text-white rounded-xl"
        >
          Create Account
        </Button>
      </form>

      {/* Divider */}
      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">OR</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Social */}
      <GoogleLoginButton />

      {/* Footer */}
      <p className="text-sm text-center text-muted-foreground mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-[#153151] font-medium">
          Sign in
        </Link>
      </p>
    </div>
  );
}
