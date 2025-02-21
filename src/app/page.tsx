import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Sobre } from "@/sections/Sobre";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import ChoppCalculator from "@/sections/ChoppCalculator";
import Footer from "@/sections/Footer";
import Tabs from "@/sections/Tabs";
import { CallToAction } from "@/sections/CallToAction";
import { Regiao } from "@/sections/Region";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Sobre />
      <Tabs />
      <ChoppCalculator/>
      <Regiao />
      <Testimonials /> 
      <Pricing />
      <CallToAction />
      <Footer/>
    </>
  );
}
