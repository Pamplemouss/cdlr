import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";

const Aventures = () => {
  const totalAventures = 7;
  const timePerAventure = 7;
  const aventures1: any = [];
  for (let i = 1; i <= totalAventures; i++) {
    aventures1.push(
      <div className="w-screen mx-2.5 shadow-[0_0_7px_5px] shadow-black/40">
        <img src={"/adventures/av1-" + i + ".jpg"} />
      </div>
    );
  }
  aventures1.sort(() => (Math.random() > 0.5 ? 1 : -1));

  const aventures2: any = [];
  for (let i = 1; i <= totalAventures; i++) {
    aventures2.push(
      <div className="w-screen mx-2.5 shadow-[0_0_7px_5px] shadow-black/40">
        <img src={"/adventures/av2-" + i + ".jpg"} />
      </div>
    );
  }
  aventures2.sort(() => (Math.random() > 0.5 ? 1 : -1));
  return (
    <div className="overflow-hidden py-8 my-10">
      <Header
        title="Plus de 50 aventures à découvrir !"
        content="Traversez différentes aventures pour ramener le collier à la Reine"
      />

      <div className="flex w-full my-5">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: timePerAventure * totalAventures,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="flex"
          >
            {aventures1}
          </motion.div>
        ))}
      </div>
      <div className="flex w-full my-5">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: timePerAventure * totalAventures,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: timePerAventure / 2,
            }}
            className="flex"
          >
            {aventures2}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Aventures;
