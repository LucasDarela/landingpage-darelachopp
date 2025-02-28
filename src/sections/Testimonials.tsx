"use client";
import avatar1 from "@/assets/avatar-1.webp";
import avatar2 from "@/assets/avatar-2.webp";
import avatar3 from "@/assets/avatar-3.webp";
import avatar4 from "@/assets/avatar-4.webp";
import avatar5 from "@/assets/avatar-5.webp";
import avatar6 from "@/assets/avatar-6.webp";
import avatar7 from "@/assets/avatar-7.webp";
import avatar8 from "@/assets/avatar-8.webp";
import avatar9 from "@/assets/avatar-9.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Cliente há anos, sempre com atendimento impecável! Recomendo demais! 🍻",
    imageSrc: avatar1.src,
    name: "Márcia Oliveira",
    username: "@marcia_oliveira",
  },
  {
    text: "Entrega super rápida, chopp trincando de gelado! 🔥🍻",
    imageSrc: avatar2.src,
    name: "Roberto Santos",
    username: "@robertosantos",
  },
  {
    text: "No meio da festa o chopp acabou, mas a Darela salvou! Cliente fiel! 👏👏",
    imageSrc: avatar3.src,
    name: "Fabiano Lima",
    username: "@fabiano_lima",
  },
  {
    text: "Chopp de qualidade e atendimento nota 10! Sempre peço pra reunir a galera! 🍻",
    imageSrc: avatar4.src,
    name: "Carlos Mendes",
    username: "@carlosmendes",
  },
  {
    text: "Melhor serviço para eventos! Pedi e em minutos já estava tudo pronto! 👏🍻",
    imageSrc: avatar5.src,
    name: "Akira Santos",
    username: "@akira_oficial",
  },
  {
    text: "Qualidade no atendimento e no chopp! Meus eventos sempre têm Darela! 🍻",
    imageSrc: avatar6.src,
    name: "Renata Castro",
    username: "@renatacastro",
  },
  {
    text: "Nunca mais tive dor de cabeça em eventos! Serviço top e chope gelado sempre! 👏",
    imageSrc: avatar7.src,
    name: "Fernando Martins",
    username: "@fernando_martins",
  },
  {
    text: "Melhor experiência! Entrega rápida, chopp de qualidade e ótimo atendimento! 🍻🔥",
    imageSrc: avatar8.src,
    name: "Gabriela Almeida",
    username: "@gabrielaalmeida",
  },
  {
    text: "Recomendo muito! Atendimento rápido e chopp sempre bem servido! 🍻👏",
    imageSrc: avatar9.src,
    name: "Guilherme Ribeiro",
    username: "@guilhermeribeiro",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, outerIndex) => (
        <React.Fragment key={`outer-${outerIndex}`}>
          {props.testimonials.map(({ text, imageSrc, name, username }, innerIndex) => (
            <div className="card" key={`testimonial-${innerIndex}-${name}`}>
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">{name}</div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white my-16" id="clients">
      <div className="container mx-auto">
        <div className="section-heading section-header">
          <div className="flex justify-center">
            <div className="tag">Testemunhos</div>
          </div>
          <h2 className="section-title mt-5">O que nossos clientes dizem</h2>
          <p className="section-description mt-5">
          Experiências reais de quem já escolheu a qualidade e o sabor do nosso chopp
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;