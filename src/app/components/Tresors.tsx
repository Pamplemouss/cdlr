import { motion } from "framer-motion";
import React from "react";
import Header from "./Header";

const Tresors = () => {
  const totalTreasures = 12;
  const timePerTreasure = 3;
  const treasures1: any = [];
  for (let i = 1; i <= totalTreasures; i++) {
    treasures1.push(
      <div className="w-32 mx-2.5 shadow-[0_0_7px_5px] shadow-black/40">
        <img src={"/treasures/" + i + ".jpg"} />
      </div>
    );
  }
  treasures1.sort(() => (Math.random() > 0.5 ? 1 : -1));

  const treasures2: any = treasures1.slice();
  treasures2.sort(() => (Math.random() > 0.5 ? 1 : -1));

  const treasures3: any = treasures1.slice();
  treasures3.sort(() => (Math.random() > 0.5 ? 1 : -1));

  return (
    <div className="overflow-hidden py-8 my-20">
      <Header
        title="Plus de 30 trésors uniques !"
        content="Aidez vous des différents trésors pour surmonter les épreuves"
      />
      <div className="flex w-full my-5">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: timePerTreasure * totalTreasures,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="flex"
          >
            {treasures1}
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
              duration: timePerTreasure * totalTreasures,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: timePerTreasure / 2,
            }}
            className="flex"
          >
            {treasures2}
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
              duration: timePerTreasure * totalTreasures,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="flex"
          >
            {treasures3}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tresors;
