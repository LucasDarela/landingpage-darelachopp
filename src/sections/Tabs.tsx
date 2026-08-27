"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeinekenLogo from "@/assets/image-tabs/heineken.webp";
import BrahmaLogo from "@/assets/image-tabs/brahma.webp";
import LohnLogo from "@/assets/image-tabs/lohn-bier.webp";
import SaintLogo from "@/assets/image-tabs/saint.webp";
import DarelaMalteLogo from "@/assets/image-tabs/darela-malte.webp";
import DarelaTradicionalLogo from "@/assets/image-tabs/darela-tradicional.webp";
import ZimmermannLogo from "@/assets/image-tabs/zimmermann.webp";
import NobreLogo from "@/assets/image-tabs/nobre.webp";
import StellaArtoisLogo from "@/assets/image-tabs/stella-artois.webp";
import PatagoniaLogo from "@/assets/image-tabs/patagonia.webp";
import AmstelLogo from "@/assets/image-tabs/amstel.webp";
import IpaLogo from "@/assets/image-tabs/ipa.webp";
import IpaPatagoniaLogo from "@/assets/image-tabs/ipa-patagonia.webp";
import VinhoLogo from "@/assets/image-tabs/vinho.webp";

const brands = [
  {
    id: 1,
    name: "Heineken",
    logo: HeinekenLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          Cerveja premium com amargor característico, produzida com ingredientes
          100% naturais e levedura exclusiva Heineken A.
        </p>
        <p>
          <strong>Tipo:</strong> Premium Lager Puro Malte
        </p>
        <p>
          <strong>IBU:</strong> 19
        </p>
        <p>
          <strong>Vol:</strong> 5,0%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Carnes vermelhas,
          hambúrguer, petiscos fritos e queijos como gouda ou provolone.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    name: "Brahma",
    logo: BrahmaLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          O autêntico chopp brasileiro, não pasteurizado, mantendo o frescor, a
          leveza e a cremosidade inconfundíveis.
        </p>
        <p>
          <strong>Tipo:</strong> Chopp Claro
        </p>
        <p>
          <strong>IBU:</strong> 10
        </p>
        <p>
          <strong>Vol:</strong> 4,8%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Comida de boteco,
          churrasco, amendoim, queijos leves e frango a passarinho.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    name: "Lohn Bier",
    logo: LohnLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          Um chopp artesanal equilibrado, de altíssima refrescância e notas
          suaves de cereais vindas do puro malte.
        </p>
        <p>
          <strong>Tipo:</strong> Pilsen Puro Malte
        </p>
        <p>
          <strong>IBU:</strong> 11
        </p>
        <p>
          <strong>Vol:</strong> 4,6%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Pizzas, hambúrgueres
          artesanais, saladas e peixes leves.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    name: "Darela Puro Malte",
    logo: DarelaMalteLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          Nossa estrela da casa! Feito apenas com água, malte, lúpulo e
          levedura. Encorpado, refrescante e com um colarinho perfeito.
        </p>
        <p>
          <strong>Tipo:</strong> Pilsen Puro Malte
        </p>
        <p>
          <strong>IBU:</strong> 11
        </p>
        <p>
          <strong>Vol:</strong> 4,8%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Churrascos de fim de
          semana, carnes nobres, petiscos e queijos de média cura.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    name: "Darela Tradicional",
    logo: DarelaTradicionalLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          A versão clássica do nosso chopp. Leve, muito fácil de beber e feito
          para brindar momentos inesquecíveis.
        </p>
        <p>
          <strong>Tipo:</strong> Pilsen
        </p>
        <p>
          <strong>IBU:</strong> 9
        </p>
        <p>
          <strong>Vol:</strong> 4,5%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Frituras, pasteizinhos,
          salames, azeitonas e pratos muito leves.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    name: "Zimmermann",
    logo: ZimmermannLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          Cerveja de tradição alemã, com amargor suave, espuma persistente e
          excelente "drinkability".
        </p>
        <p>
          <strong>Tipo:</strong> Pilsen
        </p>
        <p>
          <strong>IBU:</strong> 10
        </p>
        <p>
          <strong>Vol:</strong> 4,5%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Salsichões alemães, joelho
          de porco (Eisbein), batatas fritas e frutos do mar.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    name: "Nobre",
    logo: NobreLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          Chopp de excelente custo-benefício, sabor refrescante e amargor muito
          discreto. Uma opção certeira para festas grandes.
        </p>
        <p>
          <strong>Tipo:</strong> Pilsen
        </p>
        <p>
          <strong>IBU:</strong> 10
        </p>
        <p>
          <strong>Vol:</strong> 4,5%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Amendoim, castanhas,
          churrasco misto e pão com alho.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    name: "Saint Bier",
    logo: SaintLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          Uma verdadeira Pilsen puro malte artesanal. Aromas florais
          provenientes dos lúpulos alemães e sabor de cereais frescos.
        </p>
        <p>
          <strong>Tipo:</strong> Pilsen Puro Malte
        </p>
        <p>
          <strong>IBU:</strong> 12
        </p>
        <p>
          <strong>Vol:</strong> 5,0%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Frutos do mar, aves
          grelhadas, queijos maturados suaves e massas de molho branco.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    name: "Stella Artois",
    logo: StellaArtoisLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          Com mais de 600 anos de tradição, apresenta sabor refinado, amargor
          marcante e final seco.
        </p>
        <p>
          <strong>Tipo:</strong> Premium Lager
        </p>
        <p>
          <strong>IBU:</strong> 24
        </p>
        <p>
          <strong>Vol:</strong> 5,0%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Frutos do mar (como camarão
          ou lula), peixes brancos e queijos brie ou camembert.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    name: "Patagonia",
    logo: PatagoniaLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          Um chopp Bohemian Pilsener argentino com coloração dourada profunda e
          lúpulos da Patagônia que trazem aromas florais frescos.
        </p>
        <p>
          <strong>Tipo:</strong> Bohemian Pilsener
        </p>
        <p>
          <strong>IBU:</strong> 18
        </p>
        <p>
          <strong>Vol:</strong> 5,2%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Empanadas argentinas,
          carnes assadas (parrilla), linguiças e queijos semiduros.
        </p>
      </div>
    ),
  },
  {
    id: 11,
    name: "Amstel",
    logo: AmstelLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          Produzida com a receita europeia, tem sabor suave, coloração dourada e
          é extremamente refrescante.
        </p>
        <p>
          <strong>Tipo:</strong> Puro Malte Lager
        </p>
        <p>
          <strong>IBU:</strong> 11
        </p>
        <p>
          <strong>Vol:</strong> 4,6%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Churrasco de maminha ou
          picanha, queijo coalho e aperitivos descontraídos.
        </p>
      </div>
    ),
  },
  {
    id: 12,
    name: "Ipa Lohn Bier",
    logo: IpaLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          American IPA clássica. Aromas cítricos intensos de maracujá e pinho,
          com amargor alto e limpo.
        </p>
        <p>
          <strong>Tipo:</strong> American IPA
        </p>
        <p>
          <strong>IBU:</strong> 45
        </p>
        <p>
          <strong>Vol:</strong> 6,0%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Hambúrgueres artesanais com
          queijo cheddar, churrasco gordo (costela) e pratos picantes.
        </p>
      </div>
    ),
  },
  {
    id: 13,
    name: "Ipa Patagonia",
    logo: IpaPatagoniaLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          Conhecida como Patagonia 24.7. Uma Session IPA muito aromática
          (lúpulos patagônicos e americanos), amargor refrescante e corpo leve.
        </p>
        <p>
          <strong>Tipo:</strong> Session IPA
        </p>
        <p>
          <strong>IBU:</strong> 36
        </p>
        <p>
          <strong>Vol:</strong> 4,5%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Pratos apimentados,
          culinária mexicana, frango frito picante e queijo gorgonzola.
        </p>
      </div>
    ),
  },
  {
    id: 14,
    name: "Vinho",
    logo: VinhoLogo,
    description: (
      <div className="text-left mx-auto max-w-[400px] text-lg">
        <p>
          A combinação perfeita entre a leveza e cremosidade do chopp com o
          sabor adocicado e frutado do vinho tinto de mesa.
        </p>
        <p>
          <strong>Tipo:</strong> Chopp de Vinho
        </p>
        <p>
          <strong>IBU:</strong> Baixo
        </p>
        <p>
          <strong>Vol:</strong> 5,6%
        </p>
        <p>
          <strong>Sugestão de harmonização:</strong> Sobremesas (como chocolate
          amargo), salames intensos e queijos como gorgonzola ou parmesão.
        </p>
      </div>
    ),
  },
];

export const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section
      className="py-12 bg-gradient-to-b from-white to-[#008200]/30"
      id="chopes"
    >
      <div className="container">
        <div className="section-header section-heading text-center">
          <h2 className="section-title">Nossos Chopes</h2>
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
                  className="h-48 md:h-52 w-auto object-contain mb-6 drop-shadow-sm"
                />
                <div className="text-gray-600 text-center max-w-lg">
                  {brand.description}
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
