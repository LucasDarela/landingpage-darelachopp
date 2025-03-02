"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import lupulo1Image from "@/assets/lupulo3.webp"
import lupulo2Image from "@/assets/lupulo4.webp"

export const Sobre = () => {

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);


  return (
    <section ref={sectionRef} id="sobre" className="py-10 bg-gradient-to-b from-[#FFFFFF] to-[#008200]/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="section-heading">
        <h2 className="section-title section-header">Sobre</h2>
        <p className="section-description">
          A Darela Chopp Express está há mais de 15 anos no mercado trazendo qualidade e inovação para o Sul Catarinense. Com unidades em Criciúma e Tubarão, oferecemos produtos premium e atendimento de excelência, garantindo que cada evento seja inesquecível. Nosso sistema leva e traz facilita a instalação e recolhimento, proporcionando comodidade para nossos clientes.
        </p>
        <p className="section-description mt-4">
          Trabalhamos com rigorosos testes de qualidade para assegurar a satisfação total, e contamos com uma equipe treinada para oferecer o melhor atendimento em todas as situações. Seja para eventos corporativos, festas particulares ou celebrações especiais, a Darela Chopp Express é a escolha certa para quem busca sabor, eficiência e tradição.
        </p>
        
        </div>
        <div className="relative w-full md:w-[850px] lg:w-full sm:hiden">
                <motion.img src={lupulo1Image.src} 
        alt={"lúpulo image"} 
        height={300} 
        width={300} 
        className="hidden md:block absolute -right-36 bottom-10 will-change-transform"
        style={{
          translateY,
        }}
        />
                <motion.img src={lupulo2Image.src} 
        alt={"lúpulo image 2"} 
        height={263} 
        width={263} 
        className="hidden md:block absolute bottom-32 -left-36 will-change-transform"
        style={{
          translateY,
        }}
        />
        </div>

      </div>
      
    </section>
  );
};

export default Sobre;