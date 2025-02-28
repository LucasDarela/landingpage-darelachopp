"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoWhats from "@/assets/logo-whatsapp.webp";
import { FaArrowUp } from "react-icons/fa";

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Botão Flutuante do WhatsApp */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-[#008200] hover:bg-[#006620] hover:scale-110 whitespace-nowrap text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50"
        aria-label="Abrir modal do WhatsApp"
      >
        <Image src={LogoWhats} alt="WhatsApp" width={30} height={30} />
      </button>

      {/* Botão de Voltar ao Topo */}
      {showScroll && (
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-[85px] right-9 bg-gray-700/70 hover:bg-gray-800 text-white p-2 rounded-full shadow-md flex items-center justify-center transition-all duration-300 z-[40]"
          aria-label="Voltar ao topo"
        >
          <FaArrowUp className="text-sm" />
        </motion.button>
      )}

      {/* Modal de WhatsApp */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center relative"
          >
            <h2 className="text-lg font-semibold mb-4">Entre em Contato</h2>
            <p className="text-gray-600 mb-6">Selecione sua unidade:</p>

            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/5548999900074?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg font-medium bg-[#008200] hover:bg-[#006620] transition"
              >
                Criciúma <Image src={LogoWhats} alt="WhatsApp" width={20} height={20} />
              </a>
              <a
                href="https://wa.me/5548999177835?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg font-medium bg-[#008200] hover:bg-[#006620] transition"
              >
                Tubarão <Image src={LogoWhats} alt="WhatsApp" width={20} height={20} />
              </a>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 cursor-pointer text-3xl"
            >
              &times;
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;