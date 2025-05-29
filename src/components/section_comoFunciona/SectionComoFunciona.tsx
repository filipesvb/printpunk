import ComoFuncionaCard from "./ComoFuncionaCard";

import Camiseta from "../../assets/section-como-funciona/camiseta.svg";
import Customize from "../../assets/section-como-funciona/customize.svg";
import Preview from "../../assets/section-como-funciona/preview.svg";
import Shipping from "../../assets/section-como-funciona/shipping.svg";

export default function SectionComoFunciona() {
  return (
    <>
      <section className="bg-[url('/background.png')] bg-blend-exclusion bg-cover font-kreon">
        <div className="w-full max-w-[1300px]  mx-auto pb-20">
          <div className="text-center py-10">
            <h2 className="text-4xl font-extrabold">Como funciona</h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-4 w-full  gap-20 ">
            <ComoFuncionaCard
              title="Escolha o produto"
              number={1}
              image={Camiseta}
              explanation="Selecione o produto
que deseja customizar"
            />

            <ComoFuncionaCard
              title="Personalize do seu jeito"
              number={2}
              image={Customize}
              explanation="Adicione o seu
design ou texto"
            />

            <ComoFuncionaCard
              title="Visualize o resultado"
              number={3}
              image={Preview}
              explanation="Veja uma prévia
antes de comprar"
            />

            <ComoFuncionaCard
              title="Finalize e receba em casa"
              number={4}
              image={Shipping}
              explanation="Complete o pedido
e aguarde a entrega"
            />
          </div>
        </div>
      </section>
    </>
  );
}
