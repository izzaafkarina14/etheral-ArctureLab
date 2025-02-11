"use client";

import { useRouter } from "next/navigation";

export const ExploreMarketplace = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-slate-100 to-gray-300 mb-10">
        Join the Ethereal Evolution
      </h1>
      <p className="text-gray-200 text-xl opacity-70 mb-10">
        Unlock the potential of decentralized finance and digital art. Your
        Journey starts here.
      </p>
      <button
        className="px-8 py-3 bg-gradient-to-r from-gray-300 to-gray-100 rounded-full hover:scale-110 hover:font-bold transition-transform text-transparent text-blue-500"
        onClick={() => router.push("/market-catalog")}
      >
        Explore Market
      </button>
    </div>
  );
};
