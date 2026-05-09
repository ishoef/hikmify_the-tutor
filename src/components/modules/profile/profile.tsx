"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Camera,
  LogOut,
  Save,
  User,
  Mail,
  Calendar,
  Trash2,
} from "lucide-react";
import LogoutButton from "@/components/modules/auth/LogoutButton";
import Link from "next/link";

export default function ProfilePageContent() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [name, setName] = useState("");
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    async function loadUser() {
      try {
        const session = await authClient.getSession();
        if (!session?.data?.user) {
          toast.error("Please log in to view your profile");
          return;
        }

        const u = session.data.user;
        setUser(u);
        setName(u.name || "");
        setImage(u.image || "");
      } catch (err) {
        toast.error("Failed to load profile");
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      // Add your update logic here (e.g. authClient.updateUser)
      await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate API call

      toast.success("Profile updated successfully", {
        description: "Your changes have been saved.",
      });
    } catch (err: any) {
      toast.error("Failed to update profile", {
        description: err.message,
      });
    } finally {
      setSaving(false);
    }
  };

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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In real app: upload to cloud storage and get URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      toast.info("Profile picture updated (preview)");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        {/* Icon */}
        <div className="mb-4 rounded-full bg-red-100 p-4">
          <svg
            className="h-8 w-8 text-red-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Unable to load profile
        </h2>

        {/* Description */}
        <p className="text-sm text-muted-foreground max-w-md mb-6">
          Something went wrong while fetching your account information. Please
          try again or log in again.
        </p>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 rounded-md bg-primary text-white hover:opacity-90 transition"
          >
            Retry
          </button>

          <a
            href="/login"
            className="px-4 py-2 rounded-md border hover:bg-muted transition"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Profile</h1>
          <p className="text-muted-foreground mt-2">
            Manage your account settings
          </p>
        </div>

        <LogoutButton />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar - Profile Picture & Info */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-8 flex flex-col items-center text-center">
            <div className="relative group">
              <Avatar className="h-32 w-32 ring-8 ring-background shadow-xl">
                <AvatarImage src={image} alt={name} />
                <AvatarFallback className="text-5xl">
                  {name?.charAt(0)?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>

              <label className="absolute bottom-2 right-2 cursor-pointer rounded-full bg-background p-3 shadow-lg hover:bg-primary hover:text-primary-foreground transition-all">
                <Camera className="h-5 w-5" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            <h2 className="mt-6 text-2xl font-semibold">{user.name}</h2>
            <p className="text-muted-foreground">{user.email}</p>

            <Badge variant="secondary">
              Verified Account
            </Badge>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardContent className="">
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-muted-foreground">Member since</p>
                  <p className="font-medium">March 2025</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Last active</p>
                  <p className="font-medium">Today</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-2">
            <Link href={"/settings"}>
              <Button className="cursor-pointer w-full"> Settings </Button>
            </Link>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" /> Personal Information
              </CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  value={user.email}
                  disabled
                  className="rounded-xl bg-muted/50"
                />
              </div>

              <Separator />

              <Button
                onClick={handleSave}
                disabled={saving}
                className="w-full rounded-xl h-12 text-base"
              >
                {saving ? (
                  <>Saving changes...</>
                ) : (
                  <>
                    <Save className="mr-2 h-5 w-5" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Account Security */}
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start rounded-xl h-12"
              >
                Change Password
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start rounded-xl h-12"
              >
                Enable Two-Factor Authentication
              </Button>

              <Separator />
              <div className="pt-4">
                <p className="text-sm font-medium text-destructive mb-3">
                  Danger Zone
                </p>
                <div className="border border-destructive/30 rounded-3xl p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Delete my account</p>
                      <p className="text-sm text-muted-foreground">
                        This action is permanent and cannot be undone.
                      </p>
                    </div>
                    <Button variant="destructive" className="rounded-xl">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
