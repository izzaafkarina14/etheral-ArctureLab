"use client";

import { Footer, Loader, Logo } from "@/components";
import { Catalog } from "@/utils/catalog";
import { Eye, MoveLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const MarketCatalog = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleBackIconClick = () => {
    setIsLoading(true);
    router.push("/landing-page");
  };

  return (
    <div className="bg-broken-white min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center py-4 px-4">
          {isLoading ? (
            <Loader />
          ) : (
            <MoveLeft
              className="cursor-pointer hover:scale-x-110 transition-transform"
              onClick={handleBackIconClick}
            />
          )}
          <Logo />
        </div>
        <div>
          <h1 className="text-4xl md:text-6xl text-center font-semibold py-20 sm:py-20">
            Unlock the beauty inside.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md pb-10 px-4">
          {Catalog.map((item, index) => (
            <div
              key={index}
              className="group relative cursor-pointer rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="text-white flex justify-between items-center w-full">
                  <span>{item.name}</span>
                  <Eye className="text-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};
