"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfileAvatar() {
  const [user, setUser] = useState<{
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null>(null);
  const [loading, setLoading] = useState(true);
//   const router = useRouter();

  useEffect(() => {
    let mounted = true;

    authClient.getSession().then((session) => {
      if (!mounted) return;
      setUser(session?.data?.user || null);
      setLoading(false);
    });

    return () => {
      mounted = false;
    };
  }, []);

  // ⚡ Skeleton (lighter + faster)
  if (loading) {
    return <div className="h-9 w-9 rounded-full bg-muted animate-pulse" />;
  }

  // ❌ NOT LOGGED IN
  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Button
          asChild
          variant="ghost"
          className="text-muted-foreground hover:text-primary"
        >
          <Link href="/login">Login</Link>
        </Button>

        <Button
          asChild
          className="bg-primary text-primary-foreground hover:opacity-90 rounded-xl px-5"
        >
          <Link href="/register">Sign up</Link>
        </Button>
      </div>
    );
  }

  // ✅ LOGGED IN
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer rounded-full border focus:outline-none focus:ring-2 focus:ring-ring">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src={
                user.image ||
                "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMxfHxkZW1vJTIwYXZhdGFyfGVufDB8fDB8fHww"
              }
            />
            <AvatarFallback>
              {user.name?.charAt(0)?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 p-2">
        {/* User Info */}
        <div className="px-2 py-2">
          <p className="text-sm font-medium leading-none">{user.name}</p>
          <p className="text-xs text-muted-foreground mt-1">{user.email}</p>
        </div>

        <DropdownMenuSeparator />

        {/* Links */}
        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Logout */}
        <DropdownMenuItem
          onClick={async () => {
            await authClient.signOut();
            window.location.reload(); // ✅ no full reload
          }}
          className="text-destructive focus:text-destructive"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
