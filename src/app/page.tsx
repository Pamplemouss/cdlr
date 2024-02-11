"use client";

import { motion } from "framer-motion";
import ContactInfo from "./components/ContactInfo";
import Header from "./components/Header";
import Aventures from "./components/Aventures";
import Roles from "./components/Roles";
import Ressources from "./components/Ressources";
import Tresors from "./components/Tresors";
import Collier from "./components/Collier";

export default function Home() {
  function up() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  return (
    <div className="w-full h-full relative">
      <div className="w-screen h-screen fixed z-[-1] grayscale blur-[1px]">
        <img
          src="/background.png"
          className="w-full h-full object-cover"
          alt="bg"
        />
      </div>
      <div className=" w-screen h-screen fixed z-[-1] bg-slate-900 opacity-[95%]"></div>

      <div className="py-8">
        <h1 className="text-white text-center font-old-london text-4xl relative">
          Le Collier de la Reine
        </h1>
      </div>

      <div className="text-xs bg-slate-600 mx-4 mb-10 p-3 rounded-lg shadow shadow-black/50">
        Le Collier de la Reine est un jeu de société d’aventure à rôles cachés.
        Vous incarnez un groupe de mousquetaires ayant pour mission de rapporter
        le collier de la Reine jusqu’à la cour du Roi de France.
        <br />
        <br /> Malheureusement pour vous, des espions envoyés par le Cardinal de
        Richelieu ont infiltré votre groupe ! Ces derniers doivent empêcher
        discrètement les mousquetaires de rentrer à temps, ou réussir à
        subtiliser le collier au bon moment. <br />
        <br />
        Soyez maître de votre histoire, choisissez le gardien du collier après
        chaque aventure, et méfiez vous des apparences ...
      </div>

      <div className="flex flex-col w-full justify-center items-center gap-5">
        <ContactInfo
          color="bg-green-400"
          icon="fa-regular fa-envelope"
          text="jeremyetjohn@gmail.com"
        />
        <ContactInfo
          color="bg-red-400"
          icon="fa-solid fa-mobile-screen-button"
          text="06 67 85 45 25"
        />
        <ContactInfo
          color="bg-yellow-400"
          icon="fa-brands fa-instagram"
          text="Instagram"
          link="https://www.instagram.com/jeremyetjohn/"
        />
      </div>

      <Roles />
      <Aventures />
      <Ressources />
      <Tresors />
      <Collier />

      <div className="flex justify-center w-full mb-10">
        <div onClick={() => up()} className="w-16 aspect-square bg-slate-700 rounded-full cursoir-pointer flex justify-center items-center shadow shadow-black/50">
          <i className="fa-solid fa-chevron-up text-lg"></i>
        </div>
      </div>
    </div>
  );
}
