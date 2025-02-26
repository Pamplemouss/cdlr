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

            <div className="text-xs bg-slate-600 mx-4 mb-10 p-3 rounded-lg shadow shadow-black/50 text-white">
                Le Collier de la Reine est un jeu à rôles cachés où
                mousquetaires et espions se livrent une bataille d’influence.
                Les mousquetaires tentent d’assurer leur mission en rassemblant
                des ressources, tandis que les espions sabotent discrètement
                tout en semant la discorde.
                <br />
                <br />
                Chacun doit bluffer, accuser et convaincre pour survivre. Les
                alliances se font et se défont au fil des tours, rendant chaque
                décision cruciale.
                <br />
                <br />À la fin du voyage, l’heure des révélations sonne : les
                joueurs votent pour éliminer les suspects un par un, jusqu’à ce
                qu’un camp l’emporte. Serez-vous un fin stratège ou une victime
                des complots ?
            </div>

            <div className="flex flex-col w-full justify-center items-center gap-5">
                <ContactInfo
                    color="bg-sky-400"
                    icon="fa-regular fa-envelope"
                    text="jeremyetjohn@gmail.com"
                />
                <ContactInfo
                    color="bg-sky-400"
                    icon="fa-brands fa-instagram"
                    text="Instagram"
                    link="https://www.instagram.com/jeremyetjohn/"
                />
            </div>

            <Roles />
            {/**<Aventures />**/}
            {/**<Ressources />**/}
            {/**<Tresors />**/}
            {/**<Collier />**/}

            <div className="flex justify-center w-full mb-10">
                <div
                    onClick={() => up()}
                    className="w-16 aspect-square bg-slate-700 rounded-full cursoir-pointer flex justify-center items-center shadow shadow-black/50"
                >
                    <i className="fa-solid fa-chevron-up text-lg text-white"></i>
                </div>
            </div>
        </div>
    );
}
