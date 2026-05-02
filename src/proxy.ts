import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "./hooks/use-auth/useAuth";

export function proxy(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/become-tutor"],
};
