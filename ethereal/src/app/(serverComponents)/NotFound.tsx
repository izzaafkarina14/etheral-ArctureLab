"use client";

import { Footer, Loader, Logo } from "@/components";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const NotFound = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTransitionStart = () => {
    setIsLoading(true);
  };

  const buttonVariants = {
    initial: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    },
    animate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0px 0px 0px rgba(0,0,0,0)",
        "0px 4px 8px rgba(0,0,0,0.2)",
        "0px 0px 0px rgba(0,0,0,0)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
      boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
    },
  };

  return (
    <main className="bg-broken-white min-h-screen">
      <div className="flex flex-col min-h-screen justify-between">
        <div className="flex justify-center py-4">
          <Logo />
        </div>
        <div className="flex justify-center">
          <p className="font-semibold text-lg">
            Sorry, we couldn&apos;t find what you&apos;re looking for.
          </p>
        </div>
        {isLoading ? (
          <motion.div
            className="flex justify-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Loader />
          </motion.div>
        ) : (
          <Link href="/landing-page" onClick={handleTransitionStart}>
            <motion.div
              className="flex justify-center mt-4 cursor-pointer bg-white text-black px-6 py-3 rounded-lg font-medium"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
            >
              Back to Landing Page
            </motion.div>
          </Link>
        )}
        <Footer />
      </div>
    </main>
  );
};

export default dynamic(() => Promise.resolve(NotFound), { ssr: false });
