"use client";

import { useState } from "react";
import { Logo } from "../logo/Logo";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-opacity-70 backdrop-blur-md py-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4">
        <Logo />
        <div className="hidden md:flex text-primary gap-8 opacity-85">
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
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white text-primary w-full px-4 py-4 absolute top-full left-0 shadow-lg">
          <button
            className="block w-full text-left py-2"
            onClick={() => {
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
              setIsMenuOpen(false);
            }}
          >
            Home
          </button>
          <button
            className="block w-full text-left py-2"
            onClick={() => {
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" });
              setIsMenuOpen(false);
            }}
          >
            Features
          </button>
          <button
            className="block w-full text-left py-2"
            onClick={() => {
              document
                .getElementById("explore")
                ?.scrollIntoView({ behavior: "smooth" });
              setIsMenuOpen(false);
            }}
          >
            Explore
          </button>
        </div>
      )}
    </div>
  );
};
