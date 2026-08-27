"use client";

import React from "react";
import logoBk from "@/assets/logo-bk.webp";
import Image from "next/image";
import SocialInsta from "@/assets/social-insta.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  // Função para fazer a rolagem suave até a seção correspondente
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: (targetElement as HTMLElement).offsetTop - 80, // Ajuste de deslocamento
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-white text-black text-sm py-8 text-center z-10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-4">
          <Image
            src={logoBk}
            alt="Darela Chopp Logomarca"
            height={32}
            className="opacity-90 hover:opacity-100 transition-opacity drop-shadow-md"
          />
        </div>

        {/* Redes Sociais */}
        <div className="flex gap-4 mb-6">
          <a
            href="https://www.instagram.com/darela.chopp"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[gray] hover:text-[#008200] transition-all hover:scale-110 transform"
          >
            <SocialInsta />
          </a>
          <a
            href="https://www.youtube.com/@darelachopp"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[gray] hover:text-[#008200] transition-all hover:scale-110 transform"
          >
            <SocialYoutube />
          </a>
        </div>

        {/* Links de navegação com rolagem suave */}
        <nav className="hidden md:flex md:flex-wrap justify-center md:gap-x-5 md:gap-y-3 mb-5 text-[13px] font-medium tracking-wide w-full md:max-w-none mx-auto">
          <a
            href="#chopes"
            className="text-black hover:text-[#008200] transition-colors"
            onClick={(e) => handleScroll(e, "#chopes")}
          >
            Nossos Chopes
          </a>
          <a
            href="#choppcalculator"
            className="text-black hover:text-[#008200] transition-colors"
            onClick={(e) => handleScroll(e, "#choppcalculator")}
          >
            Calculadora
          </a>
          <a
            href="#regiao"
            className="text-black hover:text-[#008200] transition-colors"
            onClick={(e) => handleScroll(e, "#regiao")}
          >
            Onde Entregamos
          </a>
          <a
            href="#sobre"
            className="text-black hover:text-[#008200] transition-colors"
            onClick={(e) => handleScroll(e, "#sobre")}
          >
            Quem Somos
          </a>
          <a
            href="#clients"
            className="text-black hover:text-[#008200] transition-colors"
            onClick={(e) => handleScroll(e, "#clients")}
          >
            Depoimentos
          </a>
          <a
            href="#faq"
            className="text-black hover:text-[#008200] transition-colors"
            onClick={(e) => handleScroll(e, "#faq")}
          >
            Dúvidas
          </a>
        </nav>

        <div className="w-16 h-[1px] bg-black/20 mb-4"></div>

        <p className="text-xs text-black/80 mb-1">
          © {new Date().getFullYear()} Darela Chopp Express. Todos os direitos
          reservados.
        </p>
        <p className="text-[11px] text-black/70 mt-2">
          Desenvolvido por{" "}
          <a
            href="https://loadingtechnology.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-[#008200] transition-colors font-medium"
          >
            Loading Technology
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
