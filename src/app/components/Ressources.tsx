import { motion } from "framer-motion";
import React from "react";
import Header from "./Header";

const Ressources = () => {
  return (
    <div className="overflow-hidden py-8 my-10">
      <div>
        <Header content="Jouez des cartes ressources cachées ..." />
        <div className="flex justify-center gap-5">
          <motion.img src="/ressources/or.png" className="w-1/2" />
          <motion.img src="/ressources/vivre.png" className="w-1/2" />
        </div>
      </div>

      <div>
        <Header content="... et enquêtez sur l'origine des sabotages !" />
      </div>
    </div>
  );
};

export default Ressources;
