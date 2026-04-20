import { Navbar1 } from "@/components/layout/navbar1";
import React from "react";

export default function CommonLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="max-w-7xl mx-auto ">
        <Navbar1 />
      </div>
      <div>{children}</div>
    </div>
  );
}
