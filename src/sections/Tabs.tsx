'use client'

import React from "react";
import Image from "next/image";
import ColoniaLogo from '@/assets/logo-bk.png'
import HardenLogo from '@/assets/logo-bk.png'
import LohnLogo from '@/assets/logo-bk.png'
import Autentico from '@/assets/logo-bk.png'


const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (

<section className="py-2" id='chopes'>
<div className="container">
            <div className="space-y-10 py-16">
                <h1 className="section-title">
                    Nossas Marcas
                </h1>
            </div>


      <div className="flex flex-wrap px-14">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {/* Colônia */}
            <li className="-mb-px mr-2 mt-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "selected-tab"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Colônia
              </a>
            </li>
            {/* Harden */}
            <li className="-mb-px mr-2 mt-2  last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "selected-tab"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Harden
              </a>
            </li>
            {/* Lohn */}
            <li className="-mb-px mr-2 mt-2  last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "selected-tab"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Lohn Bier
              </a>
            </li>
            {/* Autêntico */}
            <li className="-mb-px mr-2 mt-2  last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "selected-tab"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Autêntico
              </a>
            </li>

          </ul>

          {/* Conteúdo */}

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
               
                {/* Colônia */}
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <Image src={ColoniaLogo} className="marcas-tab" alt="colonia" />
                  <p>
                    Chopp Pilsen Suave, comercial de colarinho cremoso e dourado,
                    aroma e paladar destacam o malte, grande versatilidade para harmonização de pratos.
                    <br />
                    <br />  Teor alcoólico 4,2% e IBU 5,1.
                  </p>
                  <br /><button className="pointer"> <a href="/chopp-colonia">Saiba Mais</a> </button>
                </div>

                {/* Harden */}
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex-auto text-center">
                      <Image src={HardenLogo} className="marcas-tab" alt="harden" />
                  </div>
                  <p>
                  Chopp Pilsen Suave, comercial de colarinho cremoso e dourado,
                    aroma e paladar destacam o malte, grande versatilidade para harmonização de pratos.
                    <br />
                    <br />Teor alcoólico 4,2% e IBU 5,1.
                  </p>
                </div>

                {/* Lohn */}
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <Image src={LohnLogo} className="marcas-tab" alt="lohn" />
                  <p>
                    Um Chopp refrescante e dourado, leve e com lúpulos e carbonatação ideais para preservar o sabor do puro malte Pilsen.
                    <br /> 4,6% Vol 11IBU 2-6ºC
                    <br /> Combina com pratos diversos, de petiscos e salgadinhos a preparados com temperos, como churrasco, feijoada, carreteiro e paella.
                  </p>
                </div>

                {/* Autêntio  */}
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <div className="flex-auto text-center">
                      <Image src={Autentico} className="marcas-tab " alt="autentico" />
                  </div>
                  <p>
                    Chopp de vinho
                    <br /> 4,6% Vol 11IBU 2-6ºC
                    <br /> Combina com pratos diversos, de petiscos e salgadinhos a preparados com temperos, como churrasco, feijoada, carreteiro e paella.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
  );
};

export default Tabs;