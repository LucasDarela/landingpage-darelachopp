"use client";

import React from "react";
import logoWh from '@/assets/logo-wh.png';
import Image from "next/image";
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';

export const Footer = () => {
  // Função para fazer a rolagem suave até a seção correspondente
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
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
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center z-10">
      <div className="container mx-auto">
        <div className="inline-flex relative">
          <Image
            src={logoWh}
            alt="Darela Chopp Logomarca"
            height={40}
            className="relative"
          />
        </div>

        {/* Links de navegação com rolagem suave */}
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
        <a
            href="#sobre"
            className="hover:text-[#008200]"
            onClick={(e) => handleScroll(e, "#")}
          >
            Início
          </a>
          <a
            href="#sobre"
            className="hover:text-[#008200]"
            onClick={(e) => handleScroll(e, "#sobre")}
          >
            Sobre
          </a>
          <a
            href="#chopes"
            className="hover:text-[#008200]"
            onClick={(e) => handleScroll(e, "#chopes")}
          >
            Marcas
          </a>
          <a
            href="#clients"
            className="hover:text-[#008200]"
            onClick={(e) => handleScroll(e, "#clients")}
          >
            Clientes
          </a>
          <a
            href="#regiao"
            className="hover:text-[#008200]"
            onClick={(e) => handleScroll(e, "#regiao")}
          >
            Região
          </a>
          <a
            href="#choppcalculator"
            className="hover:text-[#008200]"
            onClick={(e) => handleScroll(e, "#choppcalculator")}
          >
            Calculadora
          </a>
          <a
            href="#faq"
            className="hover:text-[#008200]"
            onClick={(e) => handleScroll(e, "#faq")}
          >
            Ajuda
          </a>
        </nav>

        <div className="flex flex-col items-center gap-6 mt-6">
          <div className="flex gap-6">
            <a
              href="#"
              aria-label="X/Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#008200]"
            >
              <SocialX className="hover:text-[#008200]" />
            </a>
            <a
              href="https://www.instagram.com/darela.chopp"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#008200]"
            >
              <SocialInsta className="hover:text-[#008200]" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#008200]"
            >
              <SocialLinkedIn className="hover:text-[#008200]" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#008200]"
            >
              <SocialYoutube className="hover:text-[#008200]" />
            </a>
          </div>

          <p className="mt-6">
            © 2025 Darela Chopp. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;