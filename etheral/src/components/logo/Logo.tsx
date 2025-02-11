"use client";

import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();

  return (
    <h1
      className="text-primary text-4xl font-bold cursor-pointer"
      onClick={() => router.push("/landing-page")}
    >
      Etheral
    </h1>
  );
};
