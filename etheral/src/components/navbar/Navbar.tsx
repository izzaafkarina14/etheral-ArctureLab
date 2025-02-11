"use client";

import { Logo } from "../logo/Logo";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50 bg-opacity-70 backdrop-blur-md py-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <Logo />
        <div className="flex text-primary gap-8 opacity-85">
          <button
            onClick={() =>
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Home
          </button>
          <button
            onClick={() =>
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Features
          </button>
          <button
            onClick={() =>
              document
                .getElementById("explore")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore
          </button>
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};
