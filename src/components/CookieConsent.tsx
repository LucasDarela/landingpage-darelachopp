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
        "fixed bottom-0 left-0 w-full z-50 transform transition-transform duration-500 ease-in-out",
        isOpen ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="bg-white shadow-md border-t border-gray-300 p-6 sm:p-8 flex flex-col sm:flex sm:items-center sm:justify-between gap-4">
        {/* Texto */}
        <div className="flex-1">
          <h3 className="text-lg font-bold tracking-tighter bg-gradient-to-b from-black to-[#008200] text-transparent bg-clip-text">
            Política de Cookies
          </h3>
          <p className="text-gray-700 text-sm">
            Usamos cookies para melhorar sua experiência no site. Você pode
            aceitar ou recusar o uso de cookies a qualquer momento.
          </p>
        </div>

        {/* Botões */}
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <button
            onClick={handleAccept}
            className="w-full md:w-auto bg-[#008200] text-white px-20 py-2 rounded-lg font-medium hover:bg-[#006620] transition"
          >
            Aceitar
          </button>
          <button
            onClick={handleDecline}
            className="w-full md:w-auto bg-gray-500 text-white px-20 py-2 rounded-lg font-medium hover:bg-gray-600 transition"
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
};
