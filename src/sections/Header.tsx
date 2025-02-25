"use client";
import ArrowIcon from '../assets/arrow-right.svg';
import Logo from '../assets/logo-bk.png';
import Image from 'next/image';
import LogoWhats from '@/assets/logo-whatsapp.png';
import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);

  // Função para rolagem suave com offset para o cabeçalho fixo
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 40;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false); // Fecha o menu ao clicar em um link
    }
  };

  const openWhatsAppModal = () => setWhatsAppModalOpen(true);
  const closeWhatsAppModal = () => setWhatsAppModalOpen(false);

  return (
    <>
      <header className={twMerge(
        "sticky top-0 backdrop-blur-sm z-50 w-full transition-all duration-300",
        isOpen ? "bg-white shadow-md" : "bg-transparent"
      )}>
        {/* Barra superior */}
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">  
          <p className='text-white/60 hidden md:block'>Venha saborear essa experiência.</p>
          <div className='inline-flex gap-1 items-center'> 
            <p>As melhores marcas pelos menores preços!</p>  
            <ArrowIcon className="w-4 h-4 inline-flex justify-center items-center" />   
          </div>  
        </div>

        {/* Navbar principal */}
        <div className='py-5 container'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <Link href="/">
              <Image src={Logo} alt="Darela Logo" className="cursor-pointer w-20 h-auto" />
            </Link>

            {/* Navbar Desktop */}
            <nav className='hidden lg:flex gap-6 text-black/60 items-center font-medium'>
              <button onClick={() => scrollToSection('sobre')} className="cursor-pointer">Sobre</button>
              <button onClick={() => scrollToSection('chopes')} className="cursor-pointer">Marcas</button>
              <button onClick={() => scrollToSection('clients')} className="cursor-pointer">Clientes</button>
              <button onClick={() => scrollToSection('regiao')} className="cursor-pointer">Região</button>
              <button onClick={() => scrollToSection('choppcalculator')} className="cursor-pointer">Calculadora</button>
              <button onClick={() => scrollToSection('faq')} className="cursor-pointer">Ajuda</button>
              <button
                onClick={openWhatsAppModal}
                className="btn-primary text-white px-4 py-2 rounded-lg font-medium tracking-tight flex items-center gap-2 transition-all duration-300 transform hover:bg-[#006620] hover:scale-110 whitespace-nowrap"
              >
                Entre em Contato <Image src={LogoWhats} alt="WhatsApp" width={20} height={20} />
              </button>
            </nav>

            {/* Ícone do Menu Mobile */}
            <div className="lg:hidden">
              <button aria-label="Abrir menu" onClick={() => setIsOpen(!isOpen)} className="transition-all duration-300">
                {isOpen ? (
                  <span className="text-2xl">&times;</span> // Ícone de fechar (X)
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Navbar Mobile */}
          <nav className={twMerge(
            "lg:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 p-6 transition-all duration-300",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
          )}>
            <button onClick={() => scrollToSection('sobre')} className="cursor-pointer">Sobre</button>
            <button onClick={() => scrollToSection('chopes')} className="cursor-pointer">Marcas</button>
            <button onClick={() => scrollToSection('clients')} className="cursor-pointer">Clientes</button>
            <button onClick={() => scrollToSection('regiao')} className="cursor-pointer">Região</button>
            <button onClick={() => scrollToSection('choppcalculator')} className="cursor-pointer">Calculadora</button>
            <button onClick={() => scrollToSection('faq')} className="cursor-pointer">Ajuda</button>
            <button
              onClick={openWhatsAppModal}
              className="btn-primary text-white px-4 py-2 rounded-lg font-medium tracking-tight flex items-center gap-2"
            >
              Entre em Contato <Image src={LogoWhats} alt="WhatsApp" width={20} height={20} />
            </button>
          </nav>
        </div>
      </header>

      {/* Modal de WhatsApp */}
      {whatsAppModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] transition-opacity duration-300 ease-in-out"
          onClick={closeWhatsAppModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">Entre em Contato</h2>
            <p className="text-gray-600 mb-6">Selecione sua unidade:</p>
            <div className="flex flex-col gap-4">
              <a href="https://wa.me/5548999900074" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg font-medium bg-[#008200] hover:bg-[#006620] transition">
                Criciúma <Image src={LogoWhats} alt="WhatsApp" width={20} height={20} />
              </a>
              <a href="https://wa.me/5548999177835" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg font-medium bg-[#008200] hover:bg-[#006620] transition">
                Tubarão <Image src={LogoWhats} alt="WhatsApp" width={20} height={20} />
              </a>
            </div>
            <button onClick={closeWhatsAppModal} className="absolute top-2 right-5 text-gray-500 hover:text-gray-700 cursor-pointer text-3xl">
              &times;
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Header;