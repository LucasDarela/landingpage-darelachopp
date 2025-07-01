"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeinekenLogo from "@/assets/tab-heineken.webp";
import AmstelLogo from "@/assets/tab-amstel.webp";
import LohnLogo from "@/assets/tab-lohn.webp";
import SaintLogo from "@/assets/tab-saint.webp";
import DarelaLogo from "@/assets/tab-darela.webp";
import ImigracaoLogo from "@/assets/tab-imigracao.webp";
import RoletaRussaLogo from "@/assets/tab-roletarussa.webp";
import IpaLogo from "@/assets/tab-ipa.webp";
import VinhoLogo from "@/assets/tab-vinho.png";

const brands = [
  {
    id: 1,
    name: "Heineken",
    logo: HeinekenLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>Sabor equilibrado e refrescante, ideal para qualquer ocasião.</p>
        <p>
          <strong>Tipo:</strong> Pilsen Lager
        </p>
        <p>
          <strong>IBU:</strong> 19
        </p>
        <p>
          <strong>Vol:</strong> 5%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Combina bem com carnes
          grelhadas, queijos suaves e petiscos salgados.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    name: "Amstel",
    logo: AmstelLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>Leve e suave, perfeito para momentos descontraídos.</p>
        <p>
          <strong>Tipo:</strong> Pilsen Puro Malte
        </p>
        <p>
          <strong>IBU:</strong> 18
        </p>
        <p>
          <strong>Vol:</strong> 4,6%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Ideal para acompanhar
          frutos do mar, saladas e pratos leves.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    name: "Darela",
    logo: DarelaLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>Clássico e refrescante, perfeito para os melhores momentos.</p>
        <p>
          <strong>Tipo:</strong> Pilsen
        </p>
        <p>
          <strong>IBU:</strong> 9
        </p>
        <p>
          <strong>Vol:</strong> 4,3%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Acompanha bem petiscos,
          churrascos, pratos leves e aperitivos.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    name: "Lohn Bier",
    logo: LohnLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          Chopp artesanal de qualidade, com sabor marcante e aroma equilibrado.
        </p>
        <p>
          <strong>Tipo:</strong> Pilsen
        </p>
        <p>
          <strong>IBU:</strong> 11
        </p>
        <p>
          <strong>Vol:</strong> 4,6%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Harmoniza bem com
          hambúrgueres artesanais, pizzas e carnes assadas.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    name: "Saint Bier",
    logo: SaintLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>Opção diferenciada com notas frutadas e um sabor marcante.</p>
        <p>
          <strong>Tipo:</strong> Pilsen
        </p>
        <p>
          <strong>IBU:</strong> 12
        </p>
        <p>
          <strong>Vol:</strong> 5%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Excelente com pratos
          apimentados, carnes vermelhas e queijos maturados.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    name: "Imigração",
    logo: ImigracaoLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          Chopp refrescante com equilibrio do puro malte, de coloração amarelo
          ouro, produzido com lúpulos selecionados que realçam um suave amargor.
        </p>
        <p>
          <strong>Tipo:</strong> Pilsen Puro Malte
        </p>
        <p>
          <strong>IBU:</strong> 12
        </p>
        <p>
          <strong>Vol:</strong> 4,8%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Acompanha bem carnes
          vermelhas, salame e torresmo.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    name: "Roleta Russa",
    logo: RoletaRussaLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          Cerveja de coloração amarela dourada, brilhante, de espuma branca com
          média formação. Aroma e sabor maltado, leve e refrescante, como uma
          autentica Pilsen puro malte, mas com aquele toque de amargor
          irreverente Roleta Russa.
        </p>
        <p>
          <strong>Tipo:</strong> Pilsen
        </p>
        <p>
          <strong>IBU:</strong> 18
        </p>
        <p>
          <strong>Vol:</strong> 4,7%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Churrasco, comida de
          boteco, frituras, petiscos, salada de maionese e pão de alho.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    name: "Vinho",
    logo: VinhoLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          Elaborado com ingredientes nobres, nosso coquetel composto de cerveja
          pilsen e vinho tinto é uma bebida harmônica e muito agradável.
        </p>
        <p>
          <strong>Tipo:</strong> Pilsen
        </p>
        <p>
          <strong>IBU:</strong> 49
        </p>
        <p>
          <strong>Vol:</strong> 5,6%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Acompanha bem queijos,
          carnes brancas, pratos leves e aperitivos.
        </p>
      </div>
    ),
  },
];

export const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section
      className="py-12 bg-gradient-to-t from-[#FFFFFF] to-[#008200]/50"
      id="chopes"
    >
      <div className="container">
        <div className="section-header section-heading text-center">
          <h2 className="section-title">Nossas Marcas</h2>
          <p className="section-description">
            Trabalhamos com as melhores marcas para garantir qualidade e sabor
            incomparáveis.
          </p>
        </div>

        {/* Tabs organizadas em 3 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
          {brands.map((brand) => (
            <button
              key={brand.id}
              className={`text-sm font-bold uppercase px-5 py-3 rounded-lg transition-all ${
                openTab === brand.id
                  ? "bg-[#008200] text-white"
                  : "bg-white shadow-md text-gray-600"
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
                <Image
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  className="w-32 h-auto mb-4"
                />
                <div className="text-gray-600 text-center max-w-lg">
                  {brand.description}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
