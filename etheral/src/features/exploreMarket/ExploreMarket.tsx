"use client";

import { Loader } from "@/components";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const ExploreMarketplace = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleExploreClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/market-catalog");
    }, 1000);
  };

  return (
    <div className="flex flex-grow flex-col justify-center items-center max-w-screen-xl mx-auto text-center px-4">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="font-bold text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-slate-100 to-gray-300">
            Join the Ethereal Evolution
          </h1>
          <p className="text-lg md:text-xl mt-8 mb-8 text-gray-200 opacity-70">
            Unlock the potential of decentralized finance and digital art. Your
            Journey starts here.
          </p>
          <button
            className=" px-8 py-3 bg-gradient-to-r from-gray-300 to-gray-100 text-blue-600 rounded-full hover:scale-105 hover:font-bold transition-transform"
            onClick={handleExploreClick}
          >
            Explore Market
          </button>
        </>
      )}
    </div>
  );
};
