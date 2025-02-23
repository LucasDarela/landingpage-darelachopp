'use client'

import ArrowRight from "@/assets/arrow-right.svg";
import WhatsAppModal from "@/components/WhatsAppModal";


export const CallToAction = () => {

  // Função para scroll suave até a seção "regiao" com offset de 80px
  const scrollToRegion = () => {
    const regionSection = document.getElementById("regiao");
    if (regionSection) {
      const headerOffset = 80;
      const elementPosition = regionSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <section className="bg-gradient-to-b from-white to-[#008200] py-24">
      <div className="container">
        <h2 className="section-title mb-4">
        Entre em contato
        </h2>
        <p className="section-description mt-5">
        Faça seu orçamento
        </p>
        <div className="flex gap-2 mt-10 justify-center">
          <WhatsAppModal />
          <button 
                onClick={scrollToRegion}
                className="sm:hidden md:flex btn btn-text gap-1 inline-flex whitespace-nowrap hover:text-gray hover:scale-105 transition"
              >
                <span>Região de atendimento</span>
                <ArrowRight className="h-5 w-5" />
              </button>
        </div>
      </div>
    </section>
  );
};
