"use client";
import Link from "next/link";
export default function Nav() {
  return (
    <div>
      <header
        as="nav"
        className="flex w-full bg-navy justify-between text-pink h-fit text-3xl py-3 items-center"
      >
        <div className="px-4">
          <a href="/">
            <img
              src="https://i.imgur.com/UDVSp45.png"
              alt="crochet hook next to craftymedia"
              className="w-52"
            />
          </a>
        </div>
        <div className=" flex gap-14 px-4">
          <a href="#">profile</a>
          <Link href="/api/auth">Sign In</Link>
        </div>
      </header>
    </div>
  );
}
