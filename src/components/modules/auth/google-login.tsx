"use client";
import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner"; // or your toast lib

export default function GoogleLoginButton() {
  const handleGoogleLogin = async () => {
    try {
      const { data, error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: env.FRONTEND_URL,
      });

      toast.error("Login Failed ❌", {
        description: error?.message || "Something went wrong",
      });

      toast.success("Login successful 🎉");

      console.log("Google Login successful:", data);
    } catch (err: any) {
      console.error("Google Login error:", err);

      toast.error("Login Failed ❌", {
        description: err.message || "Something went wrong",
      });
    }
  };

  return (
    <Button
      onClick={() => handleGoogleLogin()}
      variant="outline"
      className="w-full rounded-xl"
    >
      Continue with Google
    </Button>
  );
}
