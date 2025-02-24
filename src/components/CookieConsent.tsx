"use client";

import { useState, useEffect } from "react";

export const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsOpen(false);
    window.location.reload(); // Recarrega a página para ativar GA e Pixel
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-300 p-6 flex flex-col sm:flex-row sm:items-center justify-between z-50">
      {/* Texto */}<div>
      <h3 className=" text-lg font-bold tracking-tighter bg-gradient-to-b from-black to-[#008200] text-transparent bg-clip-text">Política de Cookies</h3>
      <p className="text-gray-700 text-sm sm:text-left sm:max-w-[90%]">
        Usamos cookies para melhorar sua experiência no site. Você pode aceitar ou recusar o uso de cookies a qualquer momento.
      </p>
      </div>
      {/* Botões */}
      <div className="flex gap-3 mt-2 sm:mt-0">
        <button
          onClick={handleAccept}
          className="bg-[#008200] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#006620] transition"
        >
          Aceitar
        </button>
        <button
          onClick={handleDecline}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition"
        >
          Recusar
        </button>
      </div>
    </div>
  );
};