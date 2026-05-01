"use client"

import LoginForm from "@/components/modules/auth/login-form";
import { authClient } from "@/lib/auth-client";


export default function LoginPage() {

  const session = authClient.useSession()
  console.log(session);
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
