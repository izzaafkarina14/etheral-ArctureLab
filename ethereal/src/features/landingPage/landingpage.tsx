"use client";

import { Footer, Navbar } from "@/components";
import { Globe, Wallet, Zap } from "lucide-react";
import { ExploreMarketplace } from "../exploreMarket/ExploreMarket";

export const LandingPage = () => {
  return (
    <main>
      <section
        id="hero"
        className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"
      >
        <Navbar />
        <div className="flex flex-grow flex-col justify-center items-center max-w-screen-xl mx-auto text-center px-4">
          <h1 className="font-bold text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Discover the Future of Decentralized Art & Finance
          </h1>
          <p className="text-lg md:text-xl mt-8 mb-8 text-gray-700 opacity-35">
            Ethereal bridges the gap bet ween cutting-edge blockchain technology
            and creative digital experiences. Seamlessly explore, trade, and
            interact with next-generation digital assets
          </p>
          <button
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:scale-105 transition transform"
            onClick={() =>
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Started
          </button>
        </div>
      </section>

      <section
        id="features"
        className="min-h-screen bg-broken-white flex flex-col justify-center items-center"
      >
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 
            bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Our Key Features
        </h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:cursor-pointer hover:shadow-xl transition-transform hover:-translate-y-2 flex flex-col justify-center items-center text-center">
            <Globe className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold mb-3">
              Decentralized Ecosystem
            </h3>
            <p className="text-gray opacity-35">
              Seamless integration with multiple blockchain networks
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:cursor-pointer hover:shadow-xl transition-transform hover:-translate-y-2 flex flex-col justify-center items-center text-center">
            <Zap className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold mb-3">
              Lightning Fast Transactions
            </h3>
            <p className="text-gray opacity-35">
              Instant asset transfer with minimal gas fees
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:cursor-pointer hover:shadow-xl transition-transform hover:-translate-y-2 flex flex-col justify-center items-center text-center">
            <Wallet className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-semibold mb-3">
              Decentralized Ecosystem
            </h3>
            <p className="text-gray opacity-35">
              Seamless integration with multiple blockchain networks
            </p>
          </div>
        </div>
      </section>

      <section
        id="explore"
        className="bg-gradient-to-br from-blue-600 to-purple-400 min-h-screen flex flex-col "
      >
        <ExploreMarketplace />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
};
