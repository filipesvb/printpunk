"use client";

import Logotype from "../assets/printpunk.svg";
import Headphone from "../assets/headphone.svg";
import Cart from "../assets/cart.svg";
import Profile from "../assets/profile.svg";
import Link from "next/link";
import Image from "next/image";
import Arrow from "../assets/arrow.svg";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 h-30 font-kreon bg-white">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center py-4">
          {/* Logotipo */}
          <div className="logotipo-container">
            <Link href="/" className="logotipo">
              <Image
                src={Logotype}
                alt="logotipo da loja Printpunk"
                width={300}
                height={300}
              />
            </Link>
          </div>

          {/* Carrinho e perfil */}
          <div className="carrinhoPerfil-container flex gap-7">
            <Link
              className="flex gap-4 p-2 border-2 justify-between rounded-xl hover:bg-[#FF5858]"
              href="/atendimento"
            >
              <Image
                className="flex items-center h-[30px] max-w-[30px]"
                src={Headphone}
                alt="Botão da central de atendimento"
                width={300}
                height={300}
              />
              <span className="items-center flex text-xl">
                Central de atendimento
              </span>
            </Link>

            <div className="flex justify-betweenpx-4 items-center gap-7">
              <div className="carrinho-btn">
                <Image
                  src={Cart}
                  alt="Carrinho de compras"
                  className="w-[30px]"
                />
              </div>
              <div className="perfil-btn">
                <Image
                  src={Profile}
                  alt="Perfil do usuário"
                  className="w-[30px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="max-w-[1300px] mx-auto flex justify-between items-center">
          <nav>
            <ul className="flex gap-12 ">
              <li className="flex gap-4 items-center justify-between min-w-[100px]">
                <a href="#" className="flex gap-5">
                  <span>Todos os produtos</span>
                  <Image src={Arrow} alt="" className="max-w-[10px]" />
                </a>
              </li>
              <li className="flex gap-4 items-center justify-between min-w-[100px]">
                <a href="#" className="flex gap-5">
                  <span>Personalização</span>
                  <Image src={Arrow} alt="" className="max-w-[10px]" />
                </a>
              </li>
              <li className="flex gap-4 items-center justify-between min-w-[100px]">
                <a href="#" className="flex gap-5">
                  <span>Lançamentos</span>
                  <Image src={Arrow} alt="" className="max-w-[10px]" />
                </a>
              </li>
              <li className="flex gap-4 items-center justify-between min-w-[100px]">
                <a href="#" className="flex gap-5">
                  <span>Camisetas</span>
                  <Image src={Arrow} alt="" className="max-w-[10px]" />
                </a>
              </li>
              <li className="flex gap-4 items-center justify-between min-w-[100px]">
                <a href="#" className="flex gap-5">
                  <span>Canecas</span>
                  <Image src={Arrow} alt="" className="max-w-[10px]" />
                </a>
              </li>
              <li className="flex gap-4 items-center justify-between min-w-[100px]">
                <a href="#" className="flex gap-5">
                  <span>Acessórios</span>
                  <Image src={Arrow} alt="" className="max-w-[10px]" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
