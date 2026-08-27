"use client";

import { useState, useEffect } from "react";
import { Lottie } from "lottie-react";
import beerAnimation from "../../public/lotties/beer-animation.json";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const handleLoad = () => {
      // Começa o fade out
      setIsFadingOut(true);
      
      // Remove do DOM após a transição de fade
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "unset";
      }, 600); // tempo do fade out
    };

    if (document.readyState === "complete") {
      setTimeout(handleLoad, 500); // Um pequeno delay para não sumir instantaneamente se já estiver em cache
    } else {
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
        document.body.style.overflow = "unset";
      };
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-100 transition-opacity duration-700 ease-in-out ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-64 h-64 md:w-96 md:h-96">
        <Lottie src={beerAnimation} loop={true} autoplay={true} />
      </div>
    </div>
  );
}
