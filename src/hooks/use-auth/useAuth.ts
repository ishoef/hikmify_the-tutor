"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    try {
      const session = await authClient.getSession();
      setUser(session?.data?.user || null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
    const interval = setInterval(loadUser, 5000);

    return () => clearInterval(interval);
  }, []);

  return { user, loading, refresh: loadUser };
}
