"use client";
// import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <header
        as="nav"
        className="flex w-full gap-14 justify-center bg-navy text-pink h-fit"
      >
        <a href="#">home</a>
        <a href="#">feed</a>
        <a href="#">profile</a>
      </header>
    </div>
  );
}
