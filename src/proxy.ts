import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./lib/userActions";

export async function proxy(req: NextRequest) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/product/:path*"],
};
