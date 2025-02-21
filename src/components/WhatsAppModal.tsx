"use client";

import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import LogoWhats from '@/assets/logo-whatsapp.svg';

export const WhatsAppModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão para abrir o modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center gap-2 btn-primary text-white px-4 py-2 rounded-lg font-medium tracking-tight transition-all duration-300 transform hover:bg-[#006620] hover:scale-110 whitespace-nowrap"
      >
        <LogoWhats className="w-5 h-5" /> Fale Conosco
      </button>

      {/* Modal */}
      <div
        className={twMerge(
          "fixed inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ease-in-out z-[9999]",
          isOpen ? "opacity-100 visible" : "opacity-0 hidden"
        )}
        onClick={() => setIsOpen(false)}
      >
        <div
          className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center relative"
          onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro do modal
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
              Criciúma <LogoWhats className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5548999177835?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg font-medium bg-[#008200] hover:bg-[#006620] transition"
            >
              Tubarão <LogoWhats className="w-5 h-5" />
            </a>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-5 text-gray-500 hover:text-gray-700 cursor-pointer text-xl"
          >
            &times;
          </button>
        </div>
      </div>
    </>
  );
};

export default WhatsAppModal;