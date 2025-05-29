import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionProdutos from "@/components/SectionProdutos";
import SectionComoFunciona from "@/components/section_comoFunciona/SectionComoFunciona";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SectionProdutos />
      <SectionComoFunciona />
    </>
  );
}
