"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function GoogleLoginButton() {
  const handleGoogleLogin = async () => {
    const data = authClient.signIn.social({
      provider: "google",
      callbackURL: "http://localhost:3000",
    });

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
