import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./lib/userActions";

export async function proxy(req: NextRequest) {
  const user = await getCurrentUser();

  if (!user) {
    const url = new URL("/signin", req.url);
    url.searchParams.set("error", "auth_required");
    url.searchParams.set(
      "callbackUrl",
      req.nextUrl.pathname + req.nextUrl.search,
    );
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/product/:path*"],
};
