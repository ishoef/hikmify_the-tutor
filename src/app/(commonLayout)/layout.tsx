import Footer from "@/components/layout/footer";
import { Navbar1 } from "@/components/layout/navbar1";
import React from "react";

export default function CommonLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="sticky top-0 bg-background z-50">
        <Navbar1 />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
