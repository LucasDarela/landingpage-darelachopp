'use client'

import LohnLogo from "@/assets/logo-lohn.webp";
import SaintLogo from "@/assets/logo-saint.webp";
import HeinekenLogo from "@/assets/logo-heineken.webp";
import AmstelLogo from "@/assets/logo-amstel.webp";
import DarelaLogo from "@/assets/logo-darela.webp";
import ColoniaLogo from "@/assets/logo-colonia.webp";
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
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={SaintLogo}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={HeinekenLogo}
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={AmstelLogo}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={DarelaLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={ColoniaLogo}
              alt="Apex Logo"
              className="logo-ticker-image"
            />

            {/* Second set of logos for animation */}
            <Image
              src={LohnLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={SaintLogo}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={HeinekenLogo}
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={AmstelLogo}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={DarelaLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={ColoniaLogo}
              alt="Apex Logo"
              className="logo-ticker-image"
            />

          </motion.div>
        </div>
      </div>
    </div>
  );
};
