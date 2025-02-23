"use client";

import React, { useState } from "react";
import Image from "next/image";
import CriciumaRegiao from '@/assets/regiao-criciuma.png';
import TubaraoRegiao from '@/assets/regiao-tubarao.png';
import LogoWhats from '@/assets/logo-whatsapp.svg';

export const Regiao = () => {
  const [openTab, setOpenTab] = useState(1);
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section id="regiao">
      <div className="container mx-auto mb-6">
        <div className="section-header section-heading text-center">
          <h2 className="section-title">Região de atendimento</h2>
          <p className="section-description">Selecione a unidade mais próxima de você</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center">
          <ul className="flex mb-6 list-none flex-wrap gap-4" role="tablist">
            <li className="cursor-pointer">
              <a
                className={`w-40 md:w-60 text-sm font-bold uppercase px-6 py-3 rounded-lg text-center transition-all ${
                  openTab === 1 ? "bg-green-700 text-white" : "bg-white shadow-lg text-gray-600"
                }`}
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
              >
                Criciúma
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                className={`w-40 md:w-60 text-sm font-bold uppercase px-6 py-3 rounded-lg text-center transition-all ${
                  openTab === 2 ? "bg-green-700 text-white" : "bg-white shadow-lg text-gray-600"
                }`}
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
              >
                Tubarão
              </a>
            </li>
          </ul>
        </div>

        {/* Conteúdo das tabs */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* Criciúma */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${openTab === 1 ? "block" : "hidden"}`}>
            {/* Imagem */}
            <div className="cursor-pointer w-full max-w-[300px] sm:max-w-full mx-auto md:mx-0" onClick={() => setModalImage(CriciumaRegiao.src)}>
              <Image src={CriciumaRegiao} alt="Criciúma Região" className="rounded-lg shadow-lg" />
            </div>

            {/* Descrição */}
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold mb-2">Criciúma e região</h3>
              <p className="text-gray-600">
                Atendemos Criciúma e cidades próximas com chopp gelado, entrega rápida e suporte para eventos.
                Escolha a melhor opção para sua festa ou bar.
              </p>
              <button className="mt-4">
                <a
                  href="https://wa.me/5548999900074?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg font-medium bg-[#008200] hover:bg-[#006620] transition"
                >
                  Fale Conosco <LogoWhats className="w-5 h-5" />
                </a>
              </button>
            </div>
          </div>

          {/* Tubarão */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${openTab === 2 ? "block" : "hidden"}`}>
            {/* Imagem */}
            <div className="cursor-pointer w-full max-w-[300px] sm:max-w-full mx-auto md:mx-0" onClick={() => setModalImage(TubaraoRegiao.src)}>
              <Image src={TubaraoRegiao} alt="Tubarão Região" className="rounded-lg shadow-lg" />
            </div>

            {/* Descrição */}
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold mb-2">Tubarão e região</h3>
              <p className="text-gray-600">
                Levamos chopp gelado para Tubarão e cidades vizinhas. Atendimento para bares, festas e eventos especiais.
              </p>
              <button className="mt-4">
                <a
                  href="https://wa.me/5548999177835?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg font-medium bg-[#008200] hover:bg-[#006620] transition"
                >
                  Fale Conosco <LogoWhats className="w-5 h-5" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para exibir imagem em tamanho reduzido */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <div className="relative p-4 bg-white rounded-lg shadow-lg">
            <Image src={modalImage} alt="Mapa da região" width={500} height={400} className="rounded-lg shadow-lg" />
            <button
              className="absolute top-2 right-4 text-gray-700 text-3xl font-bold cursor-pointer"
              onClick={() => setModalImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};