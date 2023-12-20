"use client";
import Link from "next/link";
export default function Nav() {
  return (
    <div>
      <header
        as="nav"
        className="flex w-full gap-14 justify-center bg-navy text-pink h-fit text-3xl py-3"
      >
        <a href="#">home</a>
        <a href="#">feed</a>
        <a href="#">profile</a>
        <Link href="/api/auth">Sign In</Link>
      </header>
    </div>
  );
}
