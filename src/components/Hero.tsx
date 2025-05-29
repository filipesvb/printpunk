"use client";

import "./test.css";
import HeroImage from "../assets/hero_right_image.png";
import Image from "next/image";
import Separator from "../assets/separator.png";

export default function Hero() {
  return (
    <>
      <section className="w-full mt-30 font-kreon  bg-[#F5F5F5]">
        <div className="max-w-[1300px] flex justify-between mx-auto relative overflow-hidden">
          <div className="w-full flex">
            {/* esquerda */}
            <div className="w-1/2  py-10 flex-col mb-20">
              <div className="mb-7">
                <h2 className="text-5xl font-kreon">
                  <span className="font-extrabold text-3xl ">PRINTPUNK</span>
                  <br />
                  Você cria,
                  <br /> a gente estampa.
                </h2>
              </div>
              <div className="mb-7 text-2xl">
                <h3>
                  Camisetas, canecas e mais - personalizadas
                  <br />
                  <span className="text-[#FF5858]">
                    com o que você imaginar.
                  </span>
                </h3>
              </div>
              <button className="text-2xl bg-[#FF5858] text-white py-3 px-2 rounded-[6px]">
                Ver catálogo de produtos
              </button>
            </div>

            {/* direita */}
            <div className="w-1/2  py-10 pointer-events-none select-none absolute right-0 top-[-80px] z-49">
              <Image src={HeroImage} alt="" />
            </div>

            <div className="bg-red-900 w-[500px] h-[40px] rotate-[-50deg] absolute right-[-120px] bottom-30 z-50 shadow-2xl">
              <div className="faixa  flex items-center relative bg-white h-full w-[200%] justify-start">
                <ul className="float-left w-1/2 flex gap-4">
                  <li>Camisetas</li>
                  <li>Polos</li>
                  <li>Moletons</li>
                  <li>Canecas</li>
                  <li>Almofadas</li>
                  <li>Canecas</li>
                  <li>Capinhas</li>
                </ul>
                <ul className="float-left w-1/2 flex gap-4">
                  <li>Camisetas</li>
                  <li>Polos</li>
                  <li>Moletons</li>
                  <li>Canecas</li>
                  <li>Almofadas</li>
                  <li>Canecas</li>
                  <li>Capinhas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center py-15 pointer-events-none select-none">
        <Image src={Separator} alt="Separator icon" aria-hidden="true" />
      </div>
    </>
  );
}
