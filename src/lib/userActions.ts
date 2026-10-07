import { headers } from "next/headers";
import { auth } from "@/lib/auth";

async function getCurrentUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user ?? null;
}

export { getCurrentUser };
