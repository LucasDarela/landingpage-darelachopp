"use client";

import Image from "next/image";
import React from "react";
import lupulo1Image from "@/assets/lupulo1.png"
import lupulo2Image from "@/assets/lupulo1.png"

export const Sobre = () => {
  return (
    <section id="sobre" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="section-heading">
        <h2 className="section-title mb-4">Sobre</h2>

  
        <p className="section-description">
          A Darela Chopp Express está há mais de 15 anos no mercado trazendo qualidade e inovação para o Sul Catarinense. Com unidades em Criciúma e Tubarão, oferecemos produtos premium e atendimento de excelência, garantindo que cada evento seja inesquecível. Nosso sistema leva e traz facilita a instalação e recolhimento, proporcionando comodidade para nossos clientes.
        </p>
        <p className="section-description mt-4">
          Trabalhamos com rigorosos testes de qualidade para assegurar a satisfação total, e contamos com uma equipe treinada para oferecer o melhor atendimento em todas as situações. Seja para eventos corporativos, festas particulares ou celebrações especiais, a Darela Chopp Express é a escolha certa para quem busca sabor, eficiência e tradição.
        </p>
        
        </div>
                <Image src={lupulo1Image} 
        alt={"lúpulo image"} 
        height={263} 
        width={262} 
        className="absolute -right-36 top-32"
        />
                <Image src={lupulo2Image} 
        alt={"lúpulo image 2"} 
        height={263} 
        width={262} 
        className="absolute bottom-24 -left-36"
        />

      </div>
      
    </section>
  );
};

export default Sobre;