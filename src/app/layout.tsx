import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

const dmSans = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darela Chopp | Chopp Gelado em Criciúma",
  description:
    "A melhor distribuidora de chopp de Criciúma e Tubarão! Trabalhamos com Heineken, Amstel, Lohn Bier e muito mais. Barris de 30lts e 50lts. Entrega rápida e gelada!",
  // Você pode adicionar outras metatags aqui se necessário.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#0000]")}>
        <main>{children}</main>
      </body>
    </html>
  );
}