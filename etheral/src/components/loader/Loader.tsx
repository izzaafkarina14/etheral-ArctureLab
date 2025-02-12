import { motion } from "framer-motion";
import React from "react";

export const Loader: React.FC = () => {
  const loaderVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [1, 0.5, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <motion.div
        className="w-10 h-10 bg-broken-white rounded-full"
        variants={loaderVariants}
        animate="animate"
      />
    </div>
  );
};
