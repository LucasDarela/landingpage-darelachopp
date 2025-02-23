import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darela Chopp | Chopp Gelado em Criciúma",
  description:
    "A melhor distribuidora de chopp de Criciúma e Tubarão! Trabalhamos com Heineken, Amstel, Lohn Bier e muito mais. Barris de chopp de 30L e 50L, aluguel de chopeiras e entrega rápida.",
  keywords: [
    "barril de chopp 50lts",
    "barril de chopp 30lts",
    "barril de chopp",
    "aluguel de chopp",
    "distribuidora de chopp",
    "chopeira elétrica",
    "chopp para festas",
    "chopp artesanal",
    "entrega de chopp",
    "chopp Heineken",
    "chopp Amstel",
    "chopp Lohn Bier",
  ].join(", "),
  openGraph: {
    title: "Darela Chopp | Chopp Gelado em Criciúma",
    description:
      "Distribuidora de chopp em Criciúma e região. Barris de 30L e 50L, aluguel de chopeiras e entrega rápida. Trabalhamos com Heineken, Amstel, Lohn Bier e muito mais.",
    url: "https://www.darelachopp.com.br",
    type: "website",
    images: [
      {
        url: "https://www.darelachopp.com.br/imagem-darela-chopp.jpg", // Substitua por uma imagem real do seu site
        width: 1200,
        height: 630,
        alt: "Darela Chopp - Distribuidora de Chopp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="relative">
      <head>
        <meta name="robots" content="index, follow" />
      </head>
      <body className={clsx(dmSans.className, "antialiased bg-[#0000]")}>
        <main>{children}</main>
      </body>
    </html>
  );
}