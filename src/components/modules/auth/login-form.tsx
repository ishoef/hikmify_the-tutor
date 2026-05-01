"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
      {/* HEADER */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-foreground">Welcome back</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Login to continue learning
        </p>
      </div>

      {/* FORM */}
      <form className="space-y-5">
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
              placeholder="Enter your password"
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

        {/* Forgot */}
        <div className="flex justify-end text-sm">
          <Link href="/forgot-password" className="text-muted-foreground hover:text-[#153151]">
            Forgot password?
          </Link>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full bg-[#153151] hover:bg-[#1f4a7a] text-white rounded-xl"
        >
          Sign In
        </Button>
      </form>

      {/* Divider */}
      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">OR</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Social */}
      <Button variant="outline" className="w-full rounded-xl">
        Continue with Google
      </Button>

      {/* Footer */}
      <p className="text-sm text-center text-muted-foreground mt-6">
        Don’t have an account?{" "}
        <Link href="/register" className="text-[#153151] font-medium">
          Sign up
        </Link>
      </p>
    </div>
  );
}
