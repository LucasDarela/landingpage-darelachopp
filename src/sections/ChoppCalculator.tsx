"use client";

import React, { useState } from "react";
import pyramidImage from "@/assets/lupulo1.png";
import tubeImage from "@/assets/lupulo1.png";
import { motion, useScroll, useTransform } from "framer-motion";

export const ChoppCalculator = () => {
  const [people, setPeople] = useState<number>(0);
  const [eventType, setEventType] = useState<string>("churrasco");
  const [duration, setDuration] = useState<number>(0);
  const [extras, setExtras] = useState({
    bebidaQuente: false,
    drink: false,
  });
  const [result, setResult] = useState<number | null>(null);

  // Definição das opções de evento com consumo base e duração padrão
  const eventOptions = [
    {
      label: "Churrasco",
      value: "churrasco",
      baseConsumption: 3, // litros por pessoa para 5 horas
      baseDuration: 5,
    },
    {
      label: "Aniversário",
      value: "aniversario",
      baseConsumption: 3,
      baseDuration: 5,
    },
    {
      label: "Formatura",
      value: "formatura",
      baseConsumption: 3,
      baseDuration: 5,
    },
    {
      label: "Casamento",
      value: "casamento",
      baseConsumption: 3,
      baseDuration: 5,
    },
    {
      label: "Confraternização Empresa",
      value: "confraternizacao",
      baseConsumption: 2,
      baseDuration: 5,
    },
    {
      label: "Chá de Bebê/Festa Infantil",
      value: "chadebebe",
      baseConsumption: 1,
      baseDuration: 4,
    },
    {
      label: "Outro",
      value: "outro",
      baseConsumption: 3,
      baseDuration: 5,
    },
  ];

  // Função que calcula o consumo total
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const eventOption = eventOptions.find((opt) => opt.value === eventType);
    if (!eventOption || people <= 0 || duration <= 0) {
      setResult(null);
      return;
    }
    // Consumo base ajustado à duração informada
    let consumptionPerPerson =
      eventOption.baseConsumption * (duration / eventOption.baseDuration);

    // Subtrai extras: 0,5 L para cada item selecionado
    const extraReduction =
      (extras.bebidaQuente ? 0.5 : 0) + (extras.drink ? 0.5 : 0);
    consumptionPerPerson = Math.max(0, consumptionPerPerson - extraReduction);

    const totalConsumption = people * consumptionPerPerson;
    setResult(totalConsumption);
  };

  // Configuração de animação: usar o progresso do scroll
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section className="relative" id="choppcalculator">
      <div className="container mx-auto">
        <div className="section-heading section-header">
          <h2 className="section-title my-12">
            Calculadora de Chopp para Evento
          </h2>
          <p className="section-description">Tenha uma média de quantos litros seus convidados irão consumir</p>
        </div>
        <div className="section-heading">
          <form onSubmit={handleCalculate} className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">
                Quantidade de Pessoas:
              </label>
              <input
                type="number"
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className="w-full border rounded-2xl p-2 focus:outline-none focus:border-[#008200] focus:ring-2 focus:ring-[#008200]/50"
                min="0"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">
                Tipo de Evento:
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full border rounded-2xl p-2 focus:outline-none focus:border-[#008200] focus:ring-2 focus:ring-[#008200]/50 hover:border-[#008200] accent-[#008200]"
              >
                {eventOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">
                Tempo de Evento (horas):
              </label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full border rounded-2xl p-2 focus:outline-none focus:border-[#008200] focus:ring-2 focus:ring-[#008200]/50"
                min="0"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">
                Também vai ter:
              </label>
              <div className="flex items-center space-x-4 p-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={extras.bebidaQuente}
                    onChange={(e) =>
                      setExtras({ ...extras, bebidaQuente: e.target.checked })
                    }
                    className="mr-1 accent-[#008200]"
                  />
                  Bebida Quente
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={extras.drink}
                    onChange={(e) =>
                      setExtras({ ...extras, drink: e.target.checked })
                    }
                    className="mr-1 accent-[#008200]"
                  />
                  Drink
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#008200] text-white py-2 rounded-2xl hover:bg-[#006620] transition"
            >
              Calcular
            </button>
          </form>
          {result !== null && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p className="font-semibold">Consumo Médio de Chopp:</p>
              <p>{result.toFixed(2)} litros</p>
            </div>
          )}
        </div>
        {/* <div className="relative">
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid"
            height={230}
            width={230}
            className="hidden md:block absolute -right-36 -top-36 rotate-[10deg] opacity-75"
            style={{ translateY }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube"
            height={220}
            width={220}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{ translateY }}
          />
        </div> */}
      </div>
    </section>
  );
};

export default ChoppCalculator;