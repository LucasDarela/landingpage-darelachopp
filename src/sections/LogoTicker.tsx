"use client";

import LohnLogo from "@/assets/logo-lohn.webp";
import SaintLogo from "@/assets/logo-saint.webp";
import HeinekenLogo from "@/assets/logo-heineken.webp";
import AmstelLogo from "@/assets/logo-amstel.webp";
import BrahmaLogo from "@/assets/logo-brahma.webp";
import StellaLogo from "@/assets/stella.webp";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden grayscale [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={LohnLogo}
              alt="Lohn Bier Logo"
              className="logo-ticker-image"
            />
            <Image
              src={SaintLogo}
              alt="Saint Bier Logo"
              className="logo-ticker-image"
            />
            <Image
              src={HeinekenLogo}
              alt="Heineken Logo"
              className="logo-ticker-image"
            />
            <Image
              src={AmstelLogo}
              alt="Amstel Logo"
              className="logo-ticker-image"
            />
            <Image
              src={BrahmaLogo}
              alt="Brahma Logo"
              className="logo-ticker-image"
            />
            <Image
              src={StellaLogo}
              alt="Stella Artois Logo"
              className="logo-ticker-image"
            />

            {/* Second set of logos for animation */}
            <Image
              src={LohnLogo}
              alt="Lohn Bier Logo"
              className="logo-ticker-image"
            />
            <Image
              src={SaintLogo}
              alt="Saint Bier Logo"
              className="logo-ticker-image"
            />
            <Image
              src={HeinekenLogo}
              alt="Heineken Logo"
              className="logo-ticker-image"
            />
            <Image
              src={AmstelLogo}
              alt="Amstel Logo"
              className="logo-ticker-image"
            />
            <Image
              src={BrahmaLogo}
              alt="Brahma Logo"
              className="logo-ticker-image"
            />
            <Image
              src={StellaLogo}
              alt="Stella Artois Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
