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
import { toast } from "sonner";
import { useAuth } from "@/hooks/use-auth/use-auth";

export default function ProfileAvatar() {
  //   const router = useRouter();

  const priflePhotoURL =
    "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=500";

  const { user, loading } = useAuth();

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

  const handleLogout = () => {
    toast("Are you sure you want to logout?", {
      description: "You will be signed out of your account.",
      action: {
        label: "Logout",
        onClick: async () => {
          await authClient.signOut();
          window.location.href = "/login";
        },
      },
      cancel: {
        label: "Cancel",
        onClick: () => {},
      },
    });
  };

  // ✅ LOGGED IN
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer rounded-full border focus:outline-none focus:ring-2 focus:ring-ring">
          <Avatar className="h-9 w-9">
            <AvatarImage src={(user as any)?.image || priflePhotoURL} />
            <AvatarFallback>
              {(user as any)?.name?.charAt(0)?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 p-2">
        {/* User Info */}
        <div className="px-2 py-2">
          <p className="text-sm font-medium leading-none">
            {(user as any)?.name}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {(user as any)?.email}
          </p>
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
          onClick={() => handleLogout()}
          className="text-destructive focus:text-destructive"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
