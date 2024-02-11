import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";

const Collier = () => {
  return (
    <div className="overflow-hidden py-8 mt-20">
      <Header title="... et garder le collier jusqu'au bout pour remporter la partie !" />
      <div className="flex w-full justify-center my-16">
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: -10 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="w-6/12 rounded-xl overflow-hidden shadow-[0_0_50px_10px] shadow-yellow-100 border border-yellow-100">
          <img src="/necklace.jpg" />
        </motion.div>
      </div>
    </div>
  );
};

export default Collier;
