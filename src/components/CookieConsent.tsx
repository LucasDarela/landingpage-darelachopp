"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setTimeout(() => setIsOpen(true), 300);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsOpen(false);

    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cookie_consent_accepted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsOpen(false);
  };

  return (
    <div
      className={clsx(
        "fixed bottom-0 left-0 w-full z-50 transform transition-transform duration-500 ease-in-out p-4",
        isOpen ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gray-100 p-4 sm:p-5 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-3 max-w-5xl mx-auto">
        {/* Texto */}
        <div className="flex-1">
          <h3 className="text-base font-bold tracking-tighter bg-gradient-to-b from-black to-[#008200] text-transparent bg-clip-text">
            Política de Cookies
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
            Usamos cookies para melhorar sua experiência no site. Você pode
            aceitar ou recusar a qualquer momento.
          </p>
        </div>

        {/* Botões */}
        <div className="flex flex-row gap-2 w-full md:w-auto mt-1 md:mt-0">
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none bg-[#008200] text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-[#006620] transition"
          >
            Aceitar
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 md:flex-none bg-gray-100 text-gray-600 px-5 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition"
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
};
