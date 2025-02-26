import React from "react";
import Header from "./Header";
import Image from "next/image";
import { motion } from "framer-motion";

const Roles = () => {
    return (
        <div className="overflow-hidden py-8 my-10">
            <Header
                title="Découvrez votre rôle !"
                content="Soyez mousquetaire et ramenez le collier à la Reine, ou soyez espion et sabotez la mission sans vous faire repérer !"
            />
            <div className="my-10 flex w-full gap-5 relative">
                <div className="w-1/2 flex justify-end">
                    <div className="w-[calc(100%-75px)] relative -rotate-6">
                        <motion.img
                            src="/roles/musk1.jpg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ y: [0, -5, 0] }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="w-full z-30 relative"
                        />

                        <motion.img
                            src="/roles/musk2.jpg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ y: [0, -5, 0], rotate: [-6, -6, -6] }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.4 } }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                            className="w-full absolute top-0 -left-4 z-20"
                        />
                        <motion.img
                            src="/roles/musk3.jpg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ y: [0, -5, 0], rotate: [-12, -12, -12] }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.6 } }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2,
                            }}
                            className="w-full absolute top-0 -left-8 z-10"
                        />
                    </div>
                </div>
                <div className="w-1/2 flex justify-begin">
                    <div className="w-[calc(100%-75px)] relative rotate-6">
                        <motion.img
                            src="/roles/spy1.jpg"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ y: [0, -5, 0] }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="w-full z-30 relative"
                        />
                        <motion.img
                            src="/roles/spy2.jpg"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ y: [0, -5, 0], rotate: [6, 6, 6] }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.4 } }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                            className="w-full absolute top-0 left-4 rotate-6 z-20"
                        />
                    </div>
                </div>
                <motion.img
                initial={{ scale: 2.5, opacity: 0, x: "-50%", y: "-50%" }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1 }}
                    src="/roles/VS.png"
                    width={80}
                    height={80}
                    alt="VS"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
                />
            </div>
        </div>
    );
};

export default Roles;
