import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import "./produtoSingle.css";

interface ProdutoSingleProps {
  nome: string;
  imagem: StaticImageData;
  url: string;
}

export default function ProdutoSingle({
  nome,
  imagem,
  url,
}: ProdutoSingleProps) {
  return (
    <>
      <li className="text-center">
        <Link href={url} className=" w-full inline-block rounded-[50%] ">
          <Image
            src={imagem}
            alt={nome}
            className="imagem w-full rounded-[50%]"
          />
        </Link>
        <Link href={url} className="">
          <span className="">{nome}</span>
        </Link>
      </li>
    </>
  );
}
