"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeinekenLogo from "@/assets/logo-heineken.png";
import AmstelLogo from "@/assets/logo-bk.png";
import LohnLogo from "@/assets/logo-bk.png";
import SaintLogo from "@/assets/logo-bk.png";
import DarelaLogo from "@/assets/logo-bk.png";
import DarelaArtLogo from "@/assets/logo-bk.png";

const brands = [
  {
    id: 1,
    name: "Heineken",
    logo: HeinekenLogo,
    description: "O chopp Heineken é conhecido por seu sabor equilibrado e refrescante, com um teor alcoólico de 5% e IBU de 19, proporcionando uma experiência única aos apreciadores.",
  },
  {
    id: 2,
    name: "Amstel",
    logo: AmstelLogo,
    description: "Amstel oferece um chopp leve e suave, com teor alcoólico de 4,6% e IBU de 18, ideal para quem busca uma bebida refrescante e de fácil degustação.",
  },
  {
    id: 3,
    name: "Lohn Bier",
    logo: LohnLogo,
    description: "Lohn Bier apresenta uma variedade de chopps artesanais, destacando-se pelo chopp Pilsen com teor alcoólico de 4,8% e IBU de 12, perfeito para harmonizar com diversos pratos.",
  },
  {
    id: 4,
    name: "Saint Bier",
    logo: SaintLogo,
    description: "Saint Bier traz o chopp de vinho, uma opção diferenciada com teor alcoólico de 6,5% e IBU de 15, combinando notas frutadas e um sabor marcante.",
  },
  {
    id: 5,
    name: "Darela",
    logo: DarelaLogo,
    description: "Darela oferece um chopp Pilsen tradicional, com teor alcoólico de 4,5% e IBU de 10, garantindo leveza e refrescância em cada gole.",
  },
  {
    id: 6,
    name: "Darela Art.",
    logo: DarelaArtLogo,
    description: "Darela Art. apresenta chopps artesanais exclusivos, como o IPA com teor alcoólico de 6,2% e IBU de 50, ideal para os amantes de sabores intensos e amargor pronunciado.",
  },
];

export const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section className="py-12 mb-6 bg-gradient-to-t from-[#FFFFFF] to-[#008200]/50" id="chopes">
      <div className="container">
        <div className="section-header section-heading text-center">
          <h2 className="section-title">Nossas Marcas</h2>
          <p className="section-description">
            Trabalhamos com as melhores marcas para garantir qualidade e sabor incomparáveis.
          </p>
        </div>

        {/* Tabs organizadas em 3 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {brands.map((brand) => (
            <button
              key={brand.id}
              className={`text-sm font-bold uppercase px-5 py-3 rounded-lg transition-all ${
                openTab === brand.id ? "bg-green-700 text-white" : "bg-white shadow-md text-gray-600"
              }`}
              onClick={() => setOpenTab(brand.id)}
            >
              {brand.name}
            </button>
          ))}
        </div>

        {/* Conteúdo das Tabs */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          {brands.map((brand) => (
            <div key={brand.id} className={openTab === brand.id ? "block" : "hidden"}>
              <div className="flex flex-col items-center">
                <Image src={brand.logo} alt={`${brand.name} Logo`} className="w-32 h-auto mb-4" />
                <p className="text-gray-600 text-center max-w-lg">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tabs;