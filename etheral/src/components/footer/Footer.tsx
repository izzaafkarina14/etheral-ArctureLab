"use client";

import Link from "next/link";
import { Logo } from "../logo/Logo";

export const Footer = () => {
  return (
    <main className="bg-broken-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center py-8 gap-4 text-center md:text-left px-4">
        <div className="justify-self-center md:justify-self-start">
          <Logo />
        </div>
        <div className="flex flex-col md:flex-row gap-4 opacity-85 justify-self-center">
          <Link href="#">Contact</Link>
          <Link href="#">Social</Link>
          <Link href="#">Privacy</Link>
        </div>
        <p className="opacity-85 justify-self-center md:justify-self-end">
          &copy; 2025 Ethereal. All rights reserved.
        </p>
      </div>
    </main>
  );
};
