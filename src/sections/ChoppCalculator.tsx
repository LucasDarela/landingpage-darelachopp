"use client";

import React, { useRef, useState } from "react";
import lupulo1Image from "@/assets/lupulo5.webp";
import lupulo2Image from "@/assets/lupulo6.webp";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { IconType } from "react-icons";
import {
  GiBeerStein,
  GiWaterBottle,
  GiSodaCan,
  GiIceCube,
  GiCoffeeCup,
  GiSteak,
  GiBreadSlice,
  GiCampfire,
  GiSandwich,
  GiCookie,
  GiCakeSlice,
  GiHotMeal,
  GiCheeseWedge,
} from "react-icons/gi";

// ---------------------------------------------------------------------------
// Modelo de dados: cada tipo de evento tem seu próprio perfil de consumo.
// Os valores são baseados em referências usuais do setor de eventos/buffet
// para o público brasileiro e servem como estimativa, não como regra exata.
// ---------------------------------------------------------------------------

type FoodUnit = "kg" | "un" | "porções";

type FoodItem = {
  label: string;
  perPerson: number; // quantidade de referência por pessoa
  unit: FoodUnit;
  icon: IconType;
};

type EventProfile = {
  label: string;
  value: string;
  baseDuration: number; // duração (h) de referência usada para calibrar o consumo de chopp
  choppPerPerson: number; // litros de chopp por pessoa na duração de referência
  alcoholRate: number; // % estimado de convidados que consomem bebida alcoólica
  waterPerPersonHour: number; // litros de água por pessoa, por hora
  sodaPerPersonHour: number; // litros de refrigerante/suco por pessoa, por hora
  icePerPerson: number; // kg de gelo por pessoa (referência)
  cupsPerPersonHour: number; // copos descartáveis por pessoa, por hora
  food: FoodItem[];
  tip: string;
};

const eventOptions: EventProfile[] = [
  {
    label: "Churrasco",
    value: "churrasco",
    baseDuration: 5,
    choppPerPerson: 3,
    alcoholRate: 0.75,
    waterPerPersonHour: 0.12,
    sodaPerPersonHour: 0.1,
    icePerPerson: 1,
    cupsPerPersonHour: 0.6,
    food: [
      { label: "Carne", perPerson: 0.4, unit: "kg", icon: GiSteak },
      { label: "Pão de Alho", perPerson: 1, unit: "un", icon: GiBreadSlice },
      { label: "Carvão", perPerson: 0.15, unit: "kg", icon: GiCampfire },
    ],
    tip: "Considere acompanhamentos como farofa e vinagrete para completar o cardápio.",
  },
  {
    label: "Aniversário",
    value: "aniversario",
    baseDuration: 5,
    choppPerPerson: 3,
    alcoholRate: 0.6,
    waterPerPersonHour: 0.12,
    sodaPerPersonHour: 0.14,
    icePerPerson: 0.8,
    cupsPerPersonHour: 0.6,
    food: [
      { label: "Salgadinhos", perPerson: 8, unit: "un", icon: GiSandwich },
      { label: "Docinhos", perPerson: 4, unit: "un", icon: GiCookie },
      { label: "Bolo", perPerson: 0.1, unit: "kg", icon: GiCakeSlice },
    ],
    tip: "Se houver crianças, reforce a proporção de refrigerante e docinhos.",
  },
  {
    label: "Formatura",
    value: "formatura",
    baseDuration: 5,
    choppPerPerson: 3,
    alcoholRate: 0.8,
    waterPerPersonHour: 0.12,
    sodaPerPersonHour: 0.1,
    icePerPerson: 0.9,
    cupsPerPersonHour: 0.7,
    food: [
      { label: "Salgadinhos", perPerson: 8, unit: "un", icon: GiSandwich },
      { label: "Docinhos", perPerson: 4, unit: "un", icon: GiCookie },
      { label: "Bolo", perPerson: 0.08, unit: "kg", icon: GiCakeSlice },
    ],
    tip: "Formaturas costumam ter alta rotatividade de bebida — capriche na quantidade de gelo.",
  },
  {
    label: "Casamento",
    value: "casamento",
    baseDuration: 6,
    choppPerPerson: 2.5,
    alcoholRate: 0.65,
    waterPerPersonHour: 0.12,
    sodaPerPersonHour: 0.12,
    icePerPerson: 0.9,
    cupsPerPersonHour: 0.6,
    food: [
      { label: "Buffet (prato principal)", perPerson: 1, unit: "porções", icon: GiHotMeal },
      { label: "Salgados Finos", perPerson: 6, unit: "un", icon: GiSandwich },
      { label: "Bolo", perPerson: 0.12, unit: "kg", icon: GiCakeSlice },
    ],
    tip: "Alinhe o volume de chopp com o open bar já contratado junto ao buffet.",
  },
  {
    label: "Confraternização Empresa",
    value: "confraternizacao",
    baseDuration: 4,
    choppPerPerson: 2,
    alcoholRate: 0.55,
    waterPerPersonHour: 0.15,
    sodaPerPersonHour: 0.15,
    icePerPerson: 0.7,
    cupsPerPersonHour: 0.6,
    food: [
      { label: "Salgadinhos", perPerson: 6, unit: "un", icon: GiSandwich },
      { label: "Tábua de Frios", perPerson: 0.15, unit: "kg", icon: GiCheeseWedge },
    ],
    tip: "Eventos corporativos têm consumo mais moderado — vale ter opções sem álcool.",
  },
  {
    label: "Chá de Bebê / Festa Infantil",
    value: "chadebebe",
    baseDuration: 4,
    choppPerPerson: 1,
    alcoholRate: 0.3,
    waterPerPersonHour: 0.15,
    sodaPerPersonHour: 0.25,
    icePerPerson: 0.6,
    cupsPerPersonHour: 0.8,
    food: [
      { label: "Salgadinhos", perPerson: 6, unit: "un", icon: GiSandwich },
      { label: "Docinhos", perPerson: 6, unit: "un", icon: GiCookie },
      { label: "Bolo", perPerson: 0.12, unit: "kg", icon: GiCakeSlice },
    ],
    tip: "Priorize suco e refrigerante — o consumo de chopp tende a ser baixo nesse tipo de evento.",
  },
  {
    label: "Outro",
    value: "outro",
    baseDuration: 5,
    choppPerPerson: 3,
    alcoholRate: 0.65,
    waterPerPersonHour: 0.12,
    sodaPerPersonHour: 0.12,
    icePerPerson: 0.8,
    cupsPerPersonHour: 0.6,
    food: [
      { label: "Salgadinhos", perPerson: 6, unit: "un", icon: GiSandwich },
      { label: "Bolo", perPerson: 0.1, unit: "kg", icon: GiCakeSlice },
    ],
    tip: "Personalize as quantidades de acordo com o perfil dos seus convidados.",
  },
];

type CalcResult = {
  chopp: number;
  barris30: number;
  agua: number;
  refrigerante: number;
  gelo: number;
  copos: number;
  food: { label: string; qty: number; unit: FoodUnit; icon: IconType }[];
  tip: string;
  alcoholRate: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const formatBR = (value: number, decimals = 1) =>
  value.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

export const ChoppCalculator = () => {
  const [people, setPeople] = useState<string>("");
  const [eventType, setEventType] = useState<string>("churrasco");
  const [duration, setDuration] = useState<string>("");
  const [extras, setExtras] = useState({
    bebidaQuente: false,
    drink: false,
  });
  const [result, setResult] = useState<CalcResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedProfile = eventOptions.find((opt) => opt.value === eventType);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    const eventOption = eventOptions.find((opt) => opt.value === eventType);
    const numPeople = Math.floor(Number(people));
    const numDuration = Number(duration);

    if (!eventOption) {
      setError("Selecione o tipo de evento.");
      setResult(null);
      return;
    }
    if (!people || Number.isNaN(numPeople) || numPeople < 1) {
      setError("Informe a quantidade de convidados (mínimo 1).");
      setResult(null);
      return;
    }
    if (!duration || Number.isNaN(numDuration) || numDuration <= 0) {
      setError("Informe a duração do evento em horas.");
      setResult(null);
      return;
    }

    setError(null);

    // Proporção entre a duração informada e a duração de referência do evento.
    const durationRatio = numDuration / eventOption.baseDuration;

    // O chopp é calibrado a partir da duração de referência, mas o efeito de
    // eventos muito curtos ou muito longos é amortecido para não gerar
    // extrapolações irreais (ex: 20h de evento não significa 4x mais chopp).
    const choppDurationFactor = clamp(durationRatio, 0.5, 2.2);

    // Comida e gelo variam pouco com o tempo depois de um certo ponto —
    // por isso o fator fica entre 0.7x e 1.6x, nunca linear com a duração.
    const foodFactor = clamp(0.6 + 0.4 * durationRatio, 0.7, 1.6);
    const iceFactor = clamp(0.7 + 0.3 * durationRatio, 0.7, 1.6);

    // Bebida quente e drinks desviam parte do consumo que iria para o chopp.
    // A redução é percentual (não fixa em litros) para continuar coerente
    // em eventos pequenos e grandes.
    const extrasReduction = Math.max(
      0.55,
      1 - (extras.bebidaQuente ? 0.15 : 0) - (extras.drink ? 0.15 : 0)
    );

    const chopp = numPeople * eventOption.choppPerPerson * choppDurationFactor * extrasReduction;

    // Água, refrigerante e copos são consumidos de forma contínua ao longo
    // do evento, então usam a duração real (horas), não a razão com a base.
    const agua = numPeople * eventOption.waterPerPersonHour * numDuration;
    const refrigerante = numPeople * eventOption.sodaPerPersonHour * numDuration;
    const gelo = numPeople * eventOption.icePerPerson * iceFactor;
    const copos = Math.ceil(numPeople * eventOption.cupsPerPersonHour * numDuration);

    const food = eventOption.food.map((item) => {
      const rawQty = numPeople * item.perPerson * foodFactor;
      return {
        label: item.label,
        unit: item.unit,
        icon: item.icon,
        qty: item.unit === "un" ? Math.ceil(rawQty) : Number(rawQty.toFixed(1)),
      };
    });

    setResult({
      chopp,
      barris30: Math.ceil(chopp / 30),
      agua,
      refrigerante,
      gelo,
      copos,
      food,
      tip: eventOption.tip,
      alcoholRate: eventOption.alcoholRate,
    });
    setIsModalOpen(true);
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
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-[#008200]/30 to-white" id="choppcalculator">
      <div className="container mx-auto">
        <div className="section-heading section-header">
          <h2 className="section-title my-12">Calculadora de Chopp para Evento</h2>
          <p className="section-description">
            Tenha uma estimativa completa de chopp, bebidas e comida para o seu evento
          </p>
        </div>

        <div className="section-heading max-w-xl mx-auto pb-16">
          {/* Formulário */}
          <form onSubmit={handleCalculate} className="space-y-4 text-left bg-white/60 rounded-2xl p-6 shadow-md">
            {/* Quantidade de Pessoas */}
            <div>
              <label htmlFor="people" className="block font-semibold mb-1">
                Quantidade de Convidados:
              </label>
              <input
                id="people"
                type="number"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                placeholder="Ex: 50"
                className="w-full border rounded-2xl p-2 focus:outline-none focus:border-[#008200] focus:ring-2 focus:ring-[#008200]/50"
                min="1"
              />
            </div>

            {/* Tipo de Evento */}
            <div>
              <label htmlFor="eventType" className="block font-semibold mb-1">
                Tipo de Evento:
              </label>
              <select
                id="eventType"
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
              {selectedProfile && (
                <p className="text-sm text-gray-600 mt-1">
                  Cerca de {Math.round(selectedProfile.alcoholRate * 100)}% dos convidados costumam consumir bebida alcoólica neste tipo de evento.
                </p>
              )}
            </div>

            {/* Tempo de Evento */}
            <div>
              <label htmlFor="duration" className="block font-semibold mb-1">
                Duração do Evento (horas):
              </label>
              <input
                id="duration"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Ex: 5"
                step="0.5"
                className="w-full border rounded-2xl p-2 focus:outline-none focus:border-[#008200] focus:ring-2 focus:ring-[#008200]/50"
                min="0.5"
              />
            </div>

            {/* Opções Extras */}
            <div>
              <span className="block font-semibold mb-1">Também vai ter:</span>
              <div className="flex items-center space-x-4 p-2">
                <label htmlFor="bebidaQuente" className="flex items-center">
                  <input
                    id="bebidaQuente"
                    type="checkbox"
                    checked={extras.bebidaQuente}
                    onChange={(e) => setExtras({ ...extras, bebidaQuente: e.target.checked })}
                    className="mr-1 accent-[#008200]"
                  />
                  Bebida Quente
                </label>
                <label htmlFor="drink" className="flex items-center">
                  <input
                    id="drink"
                    type="checkbox"
                    checked={extras.drink}
                    onChange={(e) => setExtras({ ...extras, drink: e.target.checked })}
                    className="mr-1 accent-[#008200]"
                  />
                  Drink
                </label>
              </div>
              <p className="text-sm text-gray-600">
                Cada opção reduz a estimativa de chopp em 15%, já que parte dos convidados vai preferir essas bebidas.
              </p>
            </div>

            {error && (
              <p className="text-red-600 font-medium bg-red-50 border border-red-200 rounded-xl p-2 text-sm">
                {error}
              </p>
            )}

            {/* Botão de Calcular */}
            <button
              type="submit"
              className="w-full bg-[#008200] text-white py-2 rounded-2xl hover:bg-[#006620] transition font-semibold"
            >
              Calcular
            </button>
          </form>
        </div>

        {/* Modal de Resultado */}
        <AnimatePresence>
          {isModalOpen && result && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 text-left"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.4, bounce: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Fechar"
                  className="absolute top-4 right-4 text-gray-400 hover:text-[#008200] hover:bg-[#008200]/10 rounded-full w-9 h-9 flex items-center justify-center text-xl leading-none transition"
                >
                  ×
                </button>

                <h3 className="text-2xl font-bold text-[#008200] mb-1">Sua Estimativa</h3>
                <p className="text-sm text-gray-500 mb-6">
                  {people} convidado(s) · {selectedProfile?.label} · {duration}h de evento
                </p>

                <div className="space-y-6">
                  {/* Bebidas */}
                  <div>
                    <h4 className="font-bold text-lg mb-3">Bebidas</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <ResultCard
                        icon={GiBeerStein}
                        label="Chopp"
                        value={`${formatBR(result.chopp)} L`}
                        subtitle={`≈ ${result.barris30} barril(is) de 30L`}
                      />
                      <ResultCard icon={GiWaterBottle} label="Água" value={`${formatBR(result.agua)} L`} />
                      <ResultCard
                        icon={GiSodaCan}
                        label="Refrigerante/Suco"
                        value={`${formatBR(result.refrigerante)} L`}
                      />
                      <ResultCard icon={GiIceCube} label="Gelo" value={`${formatBR(result.gelo)} kg`} />
                      <ResultCard
                        icon={GiCoffeeCup}
                        label="Copos Descartáveis"
                        value={`${formatBR(result.copos, 0)} un`}
                      />
                    </div>
                  </div>

                  {/* Comida */}
                  <div>
                    <h4 className="font-bold text-lg mb-3">Comida</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {result.food.map((item) => (
                        <ResultCard
                          key={item.label}
                          icon={item.icon}
                          label={item.label}
                          value={`${formatBR(item.qty, item.unit === "un" ? 0 : 1)} ${item.unit}`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 bg-[#008200]/10 rounded-2xl p-3">
                    💡 {result.tip} Os valores são uma estimativa e podem variar conforme o perfil dos convidados.
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="w-full bg-[#008200] text-white py-2 rounded-2xl hover:bg-[#006620] transition font-semibold"
                  >
                    Fechar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* **Efeito Parallax nas Imagens** */}
        <div className="relative w-full md:w-[850px] lg:w-full sm:hiden ">
          <motion.img
            src={lupulo1Image.src}
            alt="Lúpulo Image"
            height={380}
            width={380}
            className="hidden md:block absolute -right-36 bottom-10 will-change-transform"
            style={{ y: translateY1 }} // Correção do efeito parallax
          />
          <motion.img
            src={lupulo2Image.src}
            alt="Lúpulo Image 2"
            height={263}
            width={263}
            className="hidden md:block absolute bottom-32 -left-36 will-change-transform"
            style={{ y: translateY2 }} // Correção do efeito parallax
          />
        </div>
      </div>
    </section>
  );
};

const ResultCard = ({
  icon: Icon,
  label,
  value,
  subtitle,
}: {
  icon: IconType;
  label: string;
  value: string;
  subtitle?: string;
}) => (
  <div className="bg-white rounded-2xl shadow-md p-3 flex flex-col items-center text-center gap-1">
    <div className="bg-[#008200]/10 text-[#008200] rounded-full p-2">
      <Icon size={22} />
    </div>
    <span className="text-xs font-medium text-gray-600">{label}</span>
    <span className="font-bold">{value}</span>
    {subtitle && <span className="text-[11px] text-gray-500">{subtitle}</span>}
  </div>
);

export default ChoppCalculator;
