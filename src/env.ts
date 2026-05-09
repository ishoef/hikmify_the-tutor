import { createEnv } from "@t3-oss/env-nextjs";
import * as Z from "zod";

export const env = createEnv({
  server: {
    API_URL: Z.url(),
    AUTH_URL: Z.url(),
  },

  client: {
    NEXT_PUBLIC_BACKEND_URL: Z.url(),
    NEXT_PUBLIC_FRONTEND_URL: Z.url(),
  },

  runtimeEnv: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
    API_URL: process.env.API_URL,
    AUTH_URL: process.env.AUTH_URL,
  },
});
