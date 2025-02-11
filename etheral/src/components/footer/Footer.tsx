"use client";

import Link from "next/link";
import { Logo } from "../logo/Logo";

export const Footer = () => {
  return (
    <main className="bg-broken-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 items-center py-8">
        <Logo />
        <div className="flex gap-4 opacity-85 justify-self-center">
          <Link href="#">Contact</Link>
          <Link href="#">Social</Link>
          <Link href="#">Privacy</Link>
        </div>
        <p className="opacity-85 justify-self-end">
          &copy; 2025 Ethereal. All rights reserved.
        </p>
      </div>
    </main>
  );
};
