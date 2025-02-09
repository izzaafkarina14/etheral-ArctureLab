import { Navbar } from "@/components";

export const LandingPage = () => {
  return (
    <main className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-bold text-6xl text-center my-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mx-28">
          Discover the Future of Decentralized Art & Finance
        </h1>
        <p className="text-center text-xl mb-8 text-gray-700 mx-32">
          Etheral bridges the gap bet ween cutting-edge blockchain technology
          and creative digital experiences. Seamlessly explore, trade, and
          interact with next-generation digital assets
        </p>
        <div className="flex justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:scale-105 transition transform">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};
