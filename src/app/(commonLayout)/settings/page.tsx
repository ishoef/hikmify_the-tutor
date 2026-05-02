"use client";

import { useState } from "react";
import {
  User,
  Shield,
  Bell,
  Palette,
  LogOut,
  Trash2,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import LogoutButton from "@/components/modules/auth/LogoutButton";


const menuItems = [
  { id: "profile", label: "Profile", icon: User },
  { id: "security", label: "Security", icon: Shield },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "appearance", label: "Appearance", icon: Palette },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    marketing: false,
  });

  const primaryColor = "#153151";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto flex gap-8 p-6">
        {/* Sidebar Navigation */}
        <div className="w-72 flex-shrink-0">
          <div className="sticky top-6">
            <div className="mb-10">
              <h1
                className="text-3xl font-bold tracking-tight"
                style={{ color: primaryColor }}
              >
                Settings
              </h1>
              <p className="text-muted-foreground mt-1">Manage your account</p>
            </div>

            <nav className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all ${
                      isActive
                        ? "bg-white dark:bg-zinc-900 shadow-sm border border-gray-200 dark:border-zinc-800 font-medium"
                        : "hover:bg-white/70 dark:hover:bg-zinc-900/70"
                    }`}
                    style={
                      isActive
                        ? { borderLeft: `4px solid ${primaryColor}` }
                        : {}
                    }
                  >
                    <Icon
                      className="h-5 w-5"
                      style={isActive ? { color: primaryColor } : {}}
                    />
                    <span>{item.label}</span>
                    {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                  </button>
                );
              })}
            </nav>

            <div className="mt-12 px-4">
              <LogoutButton />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 max-w-2xl">
          {/* PROFILE */}
          {activeTab === "profile" && (
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-[#153151] to-[#1f4a7a] flex items-center justify-center text-white text-4xl font-semibold">
                    AI
                  </div>
                  <div>
                    <Button variant="outline" className="rounded-xl">
                      Change Photo
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      JPG, PNG • Max 5MB
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input defaultValue="Ahmed Ismail" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input
                      type="email"
                      defaultValue="ahmed@example.com"
                      disabled
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <Button
                  size="lg"
                  className="rounded-xl px-10"
                  style={{ backgroundColor: primaryColor }}
                >
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          )}

          {/* SECURITY */}
          {activeTab === "security" && (
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Security &amp; Authentication</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <Button
                  variant="outline"
                  className="w-full h-14 rounded-2xl justify-start text-base"
                >
                  Change Password
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-14 rounded-2xl justify-start text-base"
                >
                  Enable Two-Factor Authentication (2FA)
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
          )}

          {/* NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Choose what you want to be notified about
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {[
                  {
                    title: "Email Notifications",
                    desc: "Important updates and account activity",
                    key: "email",
                  },
                  {
                    title: "Push Notifications",
                    desc: "Real-time alerts on your device",
                    key: "push",
                  },
                  {
                    title: "Marketing Emails",
                    desc: "News, offers, and product updates",
                    key: "marketing",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between py-2"
                  >
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                    <Switch
                      checked={
                        notifications[item.key as keyof typeof notifications]
                      }
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          [item.key]: checked,
                        })
                      }
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* APPEARANCE */}
          {activeTab === "appearance" && (
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>
                  Customize the look and feel of the application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Theme, language, and display options coming soon.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
