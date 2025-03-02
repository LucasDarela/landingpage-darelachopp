"use client";

import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.webp';
import lupulo1Image from '@/assets/lupulo1.webp';
import lupulo2Image from '@/assets/lupulo2.webp';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { WhatsAppModal } from '@/components/WhatsAppModal';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Função para scroll suave até a seção "chopes" com offset de 80px
  const scrollToMarcas = () => {
    const regionSection = document.getElementById("chopes");
    if (regionSection) {
      const headerOffset = 40;
      const elementPosition = regionSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative sm:h-[1080px] md:h-[600px] lg:h-[650px] sm:pt-0 md:pt-5 lg:pt-8 overflow-x-clip"
    >
      {/* Gradiente radial no canto superior esquerdo */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          backgroundImage: 'radial-gradient(circle at top left, #008200 0%, transparent 50%)',
          zIndex: -1,
          top: '-85px', // Adicionando o headerOffset de 80px
          left: '-80px', 
        }}
      ></div>

      <div className="container mx-auto">
        <div className="md:flex relative z-40">
          <div>
            <div className="tag">Entrega em Tempo Recorde</div>
            <h1 className="text-6xl font-bold tracking-tighter mt-8 mb-8 bg-gradient-to-b from-black to-[#008200] text-transparent bg-clip-text">
              Disk Chopp Delivery
            </h1>
            <p className="text-xl text-[#C28415] tracking-tight mt-6">
              Leque de produtos de alta qualidade, com chopes premiados e um atendimento sem igual! <br /><br />
              Darela Chopp Express, há 15 anos no mercado trazendo sabor e alegria para o Sul Catarinense.
            </p>
            {/* Botões */}
            <div className="flex gap-1 sm:pt-4 pt-8 items-center mt-[30px] relative z-50">
              <WhatsAppModal />
              <button 
                onClick={scrollToMarcas}
                className="btn btn-text gap-1 inline-flex whitespace-nowrap hover:text-gray hover:scale-105 transition"
              >
                <span className='tracking-tighter'>Saiba Mais</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative w-full md:w-[600px] lg:w-1/2 -translate-y-10 md:-translate-y-20 lg:-translate-y-40">
            <motion.img
              src={cogImage.src}
              alt="Caneco de Chopp Image"
              width={500}
              height={500}
              loading="eager"
              className="absolute sm:static z-30 will-change-transform"
              animate={{ translateY: [-20, 20] }}
              transition={{ repeat: Infinity, repeatType: 'mirror', duration: 3, ease: 'easeInOut' }}
            />
            <motion.img
              src={lupulo1Image.src}
              width={280}
              height={280}
              loading="eager"
              alt="Lúpulo Image"
              className="hidden md:block -top-10 -left-40 md:absolute md:w-[200px] md:h-[200px] lg:w-[280px] lg:h-[280px] opacity-60 z-20 will-change-transform"
              style={{ translateY: translateY }}
            />
            <motion.img
              src={lupulo2Image.src}
              width={500}
              height={500}
              loading="eager"
              alt="Lúpulo Image 2"
              className="hidden md:block absolute top-[400px] left-[300px] rotate-[20deg] opacity-60 z-10 will-change-transform"
              style={{ rotate: 30, translateY: translateY }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;