"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { authClient } from "@/lib/auth-client";

export default function LogoutButton() {
  const [open, setOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      await authClient.signOut();
      setOpen(false);

      // Smooth transition
      setTimeout(() => {
        router.push("/login");
        router.refresh();
      }, 250);
    } catch (error) {
      console.error("Logout failed:", error);
      // You can add toast notification here if needed
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <>
      {/* Premium Trigger Button */}
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="gap-2 border-red-200 dark:border-red-900/50 
                   text-red-600 dark:text-red-500 
                   hover:bg-red-50 hover:text-red-700 
                   dark:hover:bg-red-950/50 dark:hover:text-red-400 
                   transition-all duration-200 rounded-xl px-5 py-5"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Button>

      {/* Premium Logout Confirmation Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-3xl border shadow-2xl">
          {/* Accent Bar */}
          <div className="h-1.5 bg-linear-to-r from-red-500 via-rose-500 to-red-600" />

          <div className="p-10 text-center">
            {/* Warning Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-950">
              <AlertTriangle className="h-9 w-9 text-red-600 dark:text-red-500" />
            </div>

            <DialogHeader className="mt-8 space-y-3">
              <DialogTitle className="text-3xl  text-primary font-bold mt-4 tracking-tight">
                Log out?
              </DialogTitle>
              <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                You will be signed out of your account on this device.
                <br />
                Are you sure you want to continue?
              </DialogDescription>
            </DialogHeader>
          </div>

          {/* Footer Actions */}
          <DialogFooter className="bg-muted/60 px-8 py-6 border-t flex flex-col-reverse sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="rounded-xl py-6 text-base font-medium flex-1"
              disabled={isLoggingOut}
            >
              Cancel
            </Button>

            <Button
              variant="destructive"
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="rounded-xl py-6 text-base font-medium flex-1 gap-2 hover:bg-red-600"
            >
              {isLoggingOut ? (
                "Logging out..."
              ) : (
                <>
                  <LogOut className="h-5 w-5" />
                  Yes, Log Out
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
