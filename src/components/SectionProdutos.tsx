import ProdutoSingle from "./section_produtos/ProdutoSingle";

import Camisetas from "../assets/section-produtos/camisas.png";
import Polos from "../assets/section-produtos/polos.png";
import Moletons from "../assets/section-produtos/moletons.png";
import Canecas from "../assets/section-produtos/canecas.png";
import Almofadas from "../assets/section-produtos/almofadas.png";
import Bones from "../assets/section-produtos/bones.png";
import Capinhas from "../assets/section-produtos/capinhas.png";

export default function SectionProdutos() {
  return (
    <>
      <section className="max-w-[1300px] mx-auto  font-kreon bg-whites">
        <div className="w-full text-center mb-15">
          <h2 className="font-extrabold text-4xl">
            Transforme sua criatividade em produtos únicos
          </h2>
          <p className="text-gray-700 text-2xl">
            Explore nosso catálogo, escolha o que quiser e personalize com sua
            arte. Fácil, rápido e do seu jeito. 😉
          </p>
        </div>

        <div className="w-full mb-15">
          <ul className="w-full grid grid-cols-7 gap-8">
            <ProdutoSingle
              nome="Camisetas"
              imagem={Camisetas}
              url="camisetas"
            />
            <ProdutoSingle nome="Polos" imagem={Polos} url="polos" />
            <ProdutoSingle nome="Moletons" imagem={Moletons} url="moletons" />
            <ProdutoSingle nome="Canecas" imagem={Canecas} url="canecas" />
            <ProdutoSingle
              nome="Almofadas"
              imagem={Almofadas}
              url="almofadas"
            />
            <ProdutoSingle nome="Bonés" imagem={Bones} url="bones" />
            <ProdutoSingle nome="Capinhas" imagem={Capinhas} url="capinhas" />
          </ul>
        </div>
      </section>
    </>
  );
}
