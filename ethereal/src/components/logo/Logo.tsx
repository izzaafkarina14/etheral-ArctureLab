"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader } from "../loader/Loader";

export const Logo = () => {
  const router = useRouter();
  const [isLoading, setIsloading] = useState<boolean>(false);

  const handleLogoClick = () => {
    setIsloading(true);
    router.push("landing-page");
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <h1
          className="text-primary text-4xl font-bold cursor-pointer"
          onClick={handleLogoClick}
        >
          Ethereal
        </h1>
      )}
    </div>
  );
};
