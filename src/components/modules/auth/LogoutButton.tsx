"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    setOpen(false);
    router.push("/login");
    router.refresh();
  };

  return (
    <>
      {/* Trigger */}

      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="cursor-pointer gap-2 border-destructive text-destructive hover:bg-destructive/10"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Button>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="
            sm:max-w-md
            p-8
            rounded-2xl
            text-center
          "
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              Confirm Logout
            </DialogTitle>

            <DialogDescription className="text-base mt-2">
              Are you sure you want to log out of your account?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="px-6"
            >
              Cancel
            </Button>

            <Button
              variant="destructive"
              onClick={handleLogout}
              className="px-6"
            >
              Logout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
