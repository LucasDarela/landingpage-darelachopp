"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaTimes } from "react-icons/fa";

const faqData = [
    {
        "question": "Como funciona o aluguel da chopeira?",
        "answer": "O aluguel inclui a chopeira, cilindro de CO₂ e suporte técnico. Você escolhe o barril e pode retirar na loja ou agendar a entrega."
      },
      {
        "question": "Terei suporte caso aconteça algum problema?",
        "answer": "Sim! Oferecemos suporte via WhatsApp para ajudá-lo com qualquer dúvida ou problema. Se não for possível resolver remotamente, um técnico irá até o local."
      },
      {
        "question": "O que acontece se faltar chope no meio da festa?",
        "answer": "No momento do pedido, sempre avaliamos a quantidade de convidados, o tipo e a duração do evento para evitar que falte chope. Caso exista essa possibilidade, costumamos deixar um barril em consignação. Se, ainda assim, o chope acabar, basta entrar em contato com o vendedor para verificar a disponibilidade de entrega imediata."
      },
      {
        "question": "Posso deixar um barril em consignação?",
        "answer": "Sim! Trabalhamos com consignação de barris. Consulte a disponibilidade da marca e da quantidade desejada com o vendedor no momento do agendamento."
      },
      {
        "question": "Quais são as opções de barris disponíveis?",
        "answer": "Oferecemos barris de 30L e 50L das melhores marcas, como Heineken, Amstel, Lohn Bier e outras."
      },
      {
        "question": "A entrega do chope é gratuita?",
        "answer": "Depende da sua localização! Oferecemos entrega gratuita em Criciúma e Tubarão para pedidos acima de um valor mínimo. Consulte as condições com o vendedor."
      },
      {
        "question": "Preciso devolver os equipamentos depois do evento?",
        "answer": "Sim! Realizamos a coleta nas segundas e terças-feiras. Nossa equipe vai até o local para recolher os equipamentos. Se você retirou a chopeira em nosso depósito, o barril, a chopeira e o cilindro devem ser devolvidos em até 48 horas após o evento, salvo exceções combinadas previamente."
      },
      {
        "question": "Se sobrar chope no meu evento, posso levar para casa?",
        "answer": "Sim! Mas é necessário avisar pelo WhatsApp ao final do evento e informar a localização onde a chopeira ficará."
      },
      {
        "question": "Quais são as formas de pagamento?",
        "answer": "Aceitamos dinheiro, PIX e cartão. O pagamento no cartão está sujeito à taxa da operadora e pode ser parcelado em até 3 vezes, com parcela mínima de R$ 300,00."
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