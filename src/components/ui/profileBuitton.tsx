"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

type UserProfile = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export default function ProfileButton() {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    async function getUser() {
      try {
        const session = await authClient.getSession();
        setUser(session?.data?.user || null);
      } catch (err) {
        console.log(err);
      }
    }

    getUser();
  }, []);

  // ❌ NOT logged in → show login button
  if (!user) {
    return (
      <Button asChild className="bg-[#153151] hover:bg-[#1f4a7a] text-white">
        <Link href="/login">Login</Link>
      </Button>
    );
  }

  // ✅ Logged in → show avatar dropdown
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.image || ""} />
            <AvatarFallback>
              {user.name?.charAt(0)?.toUpperCase() || <User size={16} />}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        <div className="px-2 py-1 text-sm font-medium">{user.name}</div>

        <div className="px-2 py-1 text-xs text-muted-foreground">
          {user.email}
        </div>

        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={async () => {
            await authClient.signOut();
            window.location.reload();
          }}
          className="text-red-500"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
