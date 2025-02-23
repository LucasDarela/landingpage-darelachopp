"use client";

import React, { useRef, useState } from "react";
import lupulo1Image from "@/assets/lupulo5.png";
import lupulo2Image from "@/assets/lupulo6.png";
import { motion, useScroll, useTransform } from "framer-motion";

export const ChoppCalculator = () => {
  const [people, setPeople] = useState<string>("0");
  const [eventType, setEventType] = useState<string>("churrasco");
  const [duration, setDuration] = useState<string>("0");
  const [extras, setExtras] = useState({
    bebidaQuente: false,
    drink: false,
  });
  const [result, setResult] = useState<number | null>(null);

  const eventOptions = [
    { label: "Churrasco", value: "churrasco", baseConsumption: 3, baseDuration: 5 },
    { label: "Aniversário", value: "aniversario", baseConsumption: 3, baseDuration: 5 },
    { label: "Formatura", value: "formatura", baseConsumption: 3, baseDuration: 5 },
    { label: "Casamento", value: "casamento", baseConsumption: 3, baseDuration: 5 },
    { label: "Confraternização Empresa", value: "confraternizacao", baseConsumption: 2, baseDuration: 5 },
    { label: "Chá de Bebê/Festa Infantil", value: "chadebebe", baseConsumption: 1, baseDuration: 4 },
    { label: "Outro", value: "outro", baseConsumption: 3, baseDuration: 5 },
  ];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const eventOption = eventOptions.find((opt) => opt.value === eventType);
    const numPeople = Number(people);
    const numDuration = Number(duration);

    if (!eventOption || numPeople <= 0 || numDuration <= 0) {
      setResult(null);
      return;
    }

    let consumptionPerPerson = eventOption.baseConsumption * (numDuration / eventOption.baseDuration);
    const extraReduction = (extras.bebidaQuente ? 0.5 : 0) + (extras.drink ? 0.5 : 0);
    consumptionPerPerson = Math.max(0, consumptionPerPerson - extraReduction);

    const totalConsumption = numPeople * consumptionPerPerson;
    setResult(totalConsumption);
  };

  // **Configuração do efeito parallax**
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY1 = useTransform(scrollYProgress, [0, 1], [100, -100]); // Ajuste para a primeira imagem
  const translateY2 = useTransform(scrollYProgress, [0, 1], [150, -150]); // Ajuste para a segunda imagem

  return (
    <section ref={sectionRef} className="relative overflow-hidden" id="choppcalculator">
      <div className="container mx-auto">
        <div className="section-heading section-header">
          <h2 className="section-title my-12">Calculadora de Chopp para Evento</h2>
          <p className="section-description">Tenha uma média de quantos litros seus convidados irão consumir</p>
        </div>
        <div className="section-heading">
          <form onSubmit={handleCalculate} className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Quantidade de Pessoas:</label>
              <input
                type="number"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className="w-full border rounded-2xl p-2 focus:outline-none focus:border-[#008200] focus:ring-2 focus:ring-[#008200]/50"
                min="0"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Tipo de Evento:</label>
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
              <label className="block font-semibold mb-1">Tempo de Evento (horas):</label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full border rounded-2xl p-2 focus:outline-none focus:border-[#008200] focus:ring-2 focus:ring-[#008200]/50"
                min="0"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Também vai ter:</label>
              <div className="flex items-center space-x-4 p-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={extras.bebidaQuente}
                    onChange={(e) => setExtras({ ...extras, bebidaQuente: e.target.checked })}
                    className="mr-1 accent-[#008200]"
                  />
                  Bebida Quente
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={extras.drink}
                    onChange={(e) => setExtras({ ...extras, drink: e.target.checked })}
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

        {/* **Efeito Parallax nas Imagens** */}
        <div className="relative w-full md:w-[850px] lg:w-full sm:hiden ">
          <motion.img
            src={lupulo1Image.src}
            alt="Lúpulo Image"
            height={380}
            width={380}
            className="hidden md:block absolute -right-36 bottom-10"
            style={{ y: translateY1 }} // Correção do efeito parallax
          />
          <motion.img
            src={lupulo2Image.src}
            alt="Lúpulo Image 2"
            height={263}
            width={263}
            className="hidden md:block absolute bottom-32 -left-36"
            style={{ y: translateY2 }} // Correção do efeito parallax
          />
        </div>
      </div>
    </section>
  );
};

export default ChoppCalculator;