"use client";

import { useEffect, useState } from "react";

export default function AgeVerificationModal() {
  const [hasLoaded, setHasLoaded] = useState(false); // bloqueia render até verificar localStorage
  const [showModal, setShowModal] = useState(false); // controla exibição do modal
  const [isVisible, setIsVisible] = useState(false); // controla animação de entrada/saída

  useEffect(() => {
    const isOver18 = localStorage.getItem("isOver18");

    if (isOver18 !== "true") {
      setShowModal(true); // libera o modal
      setIsVisible(true); // ativa animação de entrada
    }

    setHasLoaded(true); // libera renderização
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("isOver18", "true");
    setIsVisible(false); // animação de saída

    // aguarda a animação terminar antes de remover
    setTimeout(() => {
      setShowModal(false);
    }, 300);
  };

  const handleDeny = () => {
    alert("Você precisa ter mais de 18 anos para acessar este site.");
  };

  // não renderiza nada até saber se deve ou não mostrar o modal
  if (!hasLoaded || !showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div
        className={`bg-white rounded-lg p-6 w-full max-w-md text-center shadow-xl transform transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">Você tem mais de 18 anos?</h2>
        <p className="mb-6">Este site é destinado a maiores de idade.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleConfirm}
            className="bg-[#008200] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#006620] transition"
          >
            Sim, sou maior
          </button>
          <button
            onClick={handleDeny}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition"
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
}
