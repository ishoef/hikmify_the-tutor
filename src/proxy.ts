import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { userRoles } from "./constants/roles";

export async function proxy(request: NextRequest) {
  let isAuthenticated = false;
  let isAdmin = false;

  const { data } = await userService.getSession();
  console.log(data?.user);

  if (data) {
    ((isAuthenticated = true), (isAdmin = data.user.role === userRoles.admin));
  }

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  console.log(data);
  return NextResponse.next();
}

export const config = {
  matcher: ["/become-tutor"],
};
