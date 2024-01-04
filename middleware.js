import { NextResponse } from "next/server";
import Passage from "@passageidentity/passage-node";

export async function middleware(request) {
  const authToken = request.cookies.get("psg_auth_token")?.value;
  if (!authToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const passage = new Passage({
    appID: process.env.PASSAGE_APP_ID,
  });

  const userID = await passage.validAuthToken(authToken);
  if (!userID) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/about/:path*", "/blog/:path*"],
};
