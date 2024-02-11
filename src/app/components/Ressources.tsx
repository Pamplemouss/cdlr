import { motion } from "framer-motion";
import React from "react";
import Header from "./Header";

const Ressources = () => {
  const totalRessources = 15;
  const timePerRessource = 3;
  const ressources1: any = [];
  for (let i = 1; i <= totalRessources; i++) {
    ressources1.push(
      <div className="w-32 mx-2.5 shadow-[0_0_7px_5px] shadow-black/40">
        <img src={"/ressources/res" + i + ".jpg"} />
      </div>
    );
  }
  ressources1.sort(() => (Math.random() > 0.5 ? 1 : -1));

  const ressources2: any = ressources1.slice();
  ressources2.sort(() => (Math.random() > 0.5 ? 1 : -1));
  return (
    <div className="overflow-hidden py-8 my-10">
      <Header
        title="Piochez des cartes ressources !"
        content="et utilisez les pour surmonter les épreuves qui vous attendent"
      />
      <div className="flex w-full my-5">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: timePerRessource * totalRessources,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="flex"
          >
            {ressources1}
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
              duration: timePerRessource * totalRessources,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: timePerRessource / 2,
            }}
            className="flex"
          >
            {ressources2}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ressources;
