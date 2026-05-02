import { env } from "@/env";
import { cookies } from "next/headers";

const AUTH_URL = env.AUTH_URL;

export const userService = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();
      console.log(cookieStore.toString());

      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      const session = await res.json();
      return { data: session, error: null };
    } catch (err: any) {
      console.log("error from user.service", err.message);
      return {
        data: null,
        error: { message: "Somthing went wrong, getSession Faiiled" },
      };
    }
  },
};
