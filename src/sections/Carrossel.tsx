"use client";

import Image from "next/image";
import img1 from "@/assets/chopeira.png";
import img2 from "@/assets/barril30.png";
import img3 from "@/assets/barril50.png";

const images = [
  { src: img1, alt: "Chopeira", desc: "Chopeira elétrica para manter seu chopp sempre gelado." },
  { src: img2, alt: "Barril 30L", desc: "Barril de chopp de 30 litros, ideal para pequenas reuniões." },
  { src: img3, alt: "Barril 50L", desc: "Barril de chopp de 50 litros, perfeito para grandes eventos." },
];

// Classe CSS para estilização da descrição abaixo das imagens
const descClassName = "mt-4 text-center text-[#C28415] text-sm md:text-base font-medium tracking-tight";

const ImageSection = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title mb-6"></h2>
          <p></p>
        </div>

        {/* Layout responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center w-full max-w-[400px] mx-auto">
              <div className="w-full">
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  width={400} 
                  height={300} 
                  className="rounded-lg shadow-lg w-full h-auto object-contain"
                />
              </div>
              <p className={descClassName}>{image.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSection;