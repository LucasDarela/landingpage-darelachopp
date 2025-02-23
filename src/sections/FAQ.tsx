"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaTimes } from "react-icons/fa";

const faqData = [
  {
    question: "Como funciona o aluguel de chopeira?",
    answer: "O aluguel inclui a chopeira, cilindro de CO2 e suporte técnico. Basta escolher o barril e retirar na loja ou agendar a entrega.",
  },
  {
    question: "Quais são as opções de barris disponíveis?",
    answer: "Trabalhamos com barris de 30L e 50L das melhores marcas, como Heineken, Amstel, Lohn Bier, entre outros.",
  },
  {
    question: "A entrega do chopp é gratuita?",
    answer: "Depende da sua localização! Oferecemos entrega gratuita em Criciúma e Tubarão para pedidos acima de determinado valor.",
  },
  {
    question: "Preciso devolver o barril depois do evento?",
    answer: "Sim! O barril deve ser devolvido em até 48 horas após o evento, salvo exceções combinadas previamente.",
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 mb-6">
      <div className="container">
        <div className="section-heading">
        <div className="section-header text-center">
          <h2 className="section-title mb-6">Perguntas Frequentes</h2>
          <p className="section-description">Tire suas dúvidas sobre nossos serviços e aproveite sua experiência com o melhor chopp</p>
        </div>
        </div>
        <div className="space-y-4 max-w-2xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 cursor-pointer transition-all duration-300"
              onClick={() => toggleFaq(index)}
            >
              {/* Pergunta */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{item.question}</h3>
                {openIndex === index ? (
                  <FaTimes className="text-gray-600 text-sm transition-transform duration-300" />
                ) : (
                  <FaChevronDown className="text-gray-600 text-sm transition-transform duration-300" />
                )}
              </div>

              {/* Resposta */}
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-gray-600"
                >
                  {item.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Faq;