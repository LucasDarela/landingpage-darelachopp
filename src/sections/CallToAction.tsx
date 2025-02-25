'use client'

import ArrowRight from "@/assets/arrow-right.svg";
import WhatsAppModal from "@/components/WhatsAppModal";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import lupulo1Image from "@/assets/lupulo7.webp";
import lupulo2Image from "@/assets/lupulo8.webp";

export const CallToAction = () => {
  // Função para scroll suave até a seção "regiao"
  const scrollToRegion = () => {
    const regionSection = document.getElementById("regiao");
    if (regionSection) {
      const headerOffset = 80;
      const elementPosition = regionSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Referência para a seção e configuração do efeito parallax
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transições para o efeito Parallax
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#008200] py-24"
    >
      <div className="container">
        <h2 className="section-title mb-4 text-center">Entre em contato</h2>
        <p className="section-description text-center mt-5">Faça seu orçamento</p>
        <div className="flex gap-2 mt-10 justify-center">
          <WhatsAppModal />
          <button 
            onClick={scrollToRegion}
            className="sm:hidden md:flex btn btn-text gap-1 inline-flex whitespace-nowrap hover:text-gray hover:scale-105 transition"
          >
            <span>Região de atendimento</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Imagens com efeito Parallax */}
        <div className="relative w-full max-w-[850px] mx-auto">
          <motion.img 
            src={lupulo1Image.src} 
            alt="Lúpulo imagem 1"
            height={300} 
            width={300} 
            className="hidden md:block absolute -right-28 bottom-16 opacity-70"
            style={{ translateY, }}
          />
          <motion.img 
            src={lupulo2Image.src} 
            alt="Lúpulo imagem 2"
            height={263} 
            width={263} 
            className="hidden md:block absolute bottom-32 -left-28 opacity-70"
            style={{ translateY, }}
          />
        </div>
      </div>
    </section>
  );
};