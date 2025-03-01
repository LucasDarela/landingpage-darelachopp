"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeinekenLogo from "@/assets/tab-heineken.webp";
import AmstelLogo from "@/assets/tab-amstel.webp";
import LohnLogo from "@/assets/tab-lohn.webp";
import SaintLogo from "@/assets/tab-saint.webp";
import DarelaLogo from "@/assets/tab-darela.webp";
import DarelaArtLogo from "@/assets/tab-darela.webp";

const brands = [
  {
    id: 1,
    name: "Heineken",
    logo: HeinekenLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>Sabor equilibrado e refrescante, ideal para qualquer ocasião.</p>
        <p><strong>Tipo:</strong> Pilsen Lager</p>
        <p><strong>IBU:</strong> 19</p>
        <p><strong>Vol:</strong> 5%</p>
        <p><strong>Sugestão de harmonização:</strong> Combina bem com carnes grelhadas, queijos suaves e petiscos salgados.</p>
      </div>
    ),
  },
  {
    id: 2,
    name: "Amstel",
    logo: AmstelLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px]">
        <p>Leve e suave, perfeito para momentos descontraídos.</p>
        <p><strong>Tipo:</strong> Pilsen Puro Malte</p>
        <p><strong>IBU:</strong> 18</p>
        <p><strong>Vol:</strong> 4,6%</p>
        <p><strong>Sugestão de harmonização:</strong> Ideal para acompanhar frutos do mar, saladas e pratos leves.</p>
      </div>
    ),
  },
  {
    id: 3,
    name: "Lohn Bier",
    logo: LohnLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px]">
        <p>Chopp artesanal de qualidade, com sabor marcante e aroma equilibrado.</p>
        <p><strong>Tipo:</strong> Pilsen</p>
        <p><strong>IBU:</strong> 11</p>
        <p><strong>Vol:</strong> 4,6%</p>
        <p><strong>Sugestão de harmonização:</strong> Harmoniza bem com hambúrgueres artesanais, pizzas e carnes assadas.</p>
      </div>
    ),
  },
  {
    id: 4,
    name: "Saint Bier",
    logo: SaintLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px]">
        <p>Opção diferenciada com notas frutadas e um sabor marcante.</p>
        <p><strong>Tipo:</strong> Pilsen</p>
        <p><strong>IBU:</strong> 12</p>
        <p><strong>Vol:</strong> 5%</p>
        <p><strong>Sugestão de harmonização:</strong> Excelente com pratos apimentados, carnes vermelhas e queijos maturados.</p>
      </div>
    ),
  },
  {
    id: 5,
    name: "Darela",
    logo: DarelaLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px]">
        <p>Clássico e refrescante, perfeito para os melhores momentos.</p>
        <p><strong>Tipo:</strong> Pilsen</p>
        <p><strong>IBU:</strong> 9</p>
        <p><strong>Vol:</strong> 4,3%</p>
        <p><strong>Sugestão de harmonização:</strong> Acompanha bem petiscos, churrascos, pratos leves e aperitivos.</p>
      </div>
    ),
  },
  {
    id: 6,
    name: "Darela Art.",
    logo: DarelaArtLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px]">
        <p>Refrescante e lupulado, perfeito para qualquer momento.</p>
        <p><strong>Tipo:</strong> Pilsen</p>
        <p><strong>IBU:</strong> 10</p>
        <p><strong>Vol:</strong> 4,7%</p>
        <p><strong>Sugestão de harmonização:</strong> Acompanha bem petiscos, pizzas, pratos leves e aperitivos.</p>
      </div>
    ),
  },
];

export const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section className="py-12 bg-gradient-to-t from-[#FFFFFF] to-[#008200]/50" id="chopes">
      <div className="container">
        <div className="section-header section-heading text-center">
          <h2 className="section-title">Nossas Marcas</h2>
          <p className="section-description">
            Trabalhamos com as melhores marcas para garantir qualidade e sabor incomparáveis.
          </p>
        </div>

        {/* Tabs organizadas em 3 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
          {brands.map((brand) => (
            <button
              key={brand.id}
              className={`text-sm font-bold uppercase px-5 py-3 rounded-lg transition-all ${
                openTab === brand.id ? "bg-[#008200] text-white" : "bg-white shadow-md text-gray-600"
              }`}
              onClick={() => setOpenTab(brand.id)}
            >
              {brand.name}
            </button>
          ))}
        </div>

        {/* Conteúdo das Tabs */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          {brands.map((brand) =>
            openTab === brand.id ? (
              <div key={brand.id} className="flex flex-col items-center">
                <Image src={brand.logo} alt={`${brand.name} Logo`} className="w-32 h-auto mb-4" />
                <div className="text-gray-600 text-center max-w-lg">{brand.description}</div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Tabs;