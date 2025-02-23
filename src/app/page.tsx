import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Sobre } from "@/sections/Sobre";
import { Testimonials } from "@/sections/Testimonials";
import { ChoppCalculator } from "@/sections/ChoppCalculator";
import { Footer } from "@/sections/Footer";
import { Tabs } from "@/sections/Tabs";
import { CallToAction } from "@/sections/CallToAction";
import { Regiao } from "@/sections/Region";
import BotaoFlutuante from "@/components/BotaoFlutuante";
import { Faq } from "@/sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <BotaoFlutuante />
      <Hero />
      <LogoTicker />
      <Sobre />
      <Tabs />
      <Regiao />
      <ChoppCalculator/>
      <Testimonials /> 
      <Faq />
      <CallToAction />
      <Footer/>
    </>
  );
}
