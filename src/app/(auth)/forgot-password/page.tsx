"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // Simulated API call (replace with real endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-muted/40">
      <div className="w-full max-w-md bg-background border rounded-2xl shadow-lg p-8 space-y-6">

        {/* HEADER */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Forgot Password</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and we’ll send you a reset link
          </p>
        </div>

        {/* SUCCESS STATE */}
        {success ? (
          <div className="text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
              ✓
            </div>

            <p className="text-sm text-muted-foreground">
              If an account exists with{" "}
              <span className="font-medium">{email}</span>, you’ll receive a
              password reset link shortly.
            </p>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setSuccess(false);
                setEmail("");
                setError("");
              }}
            >
              Try another email
            </Button>
          </div>
        ) : (
          /* FORM */
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#153151] hover:bg-[#1f4a7a]"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </Button>
          </form>
        )}

        {/* FOOTER */}
        <p className="text-xs text-center text-muted-foreground">
          Remember your password?{" "}
          <a
            href="/login"
            className="text-[#153151] font-medium hover:underline"
          >
            Back to login
          </a>
        </p>

      </div>
    </div>
  );
}