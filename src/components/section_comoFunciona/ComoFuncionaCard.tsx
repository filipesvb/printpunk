import Image, { StaticImageData } from "next/image";

interface ComoFuncionaCardProps {
  number: number;
  title: string;
  image: StaticImageData;
  explanation: string;
}

const ComoFuncionaCard = ({
  number,
  title,
  image,
  explanation,
}: ComoFuncionaCardProps) => {
  return (
    <>
      <div className="bg-[#A0A0A010] backdrop-blur-2xl flex-col place-items-center justify-center  py-4">
        <div className="w-10 h-10 bg-[#FF5858] rounded-full flex justify-center items-center text-white font-extrabold mb-4 text-2xl">
          {number}
        </div>
        <p className="text-center text-xl font-bold mb-4 max-w-[140px]">
          {title}
        </p>
        <div className="h-30 mb-5">
          <Image src={image} alt={title} className="w-full h-full max-w-30" />
        </div>
        <p className="text-center text-gray-600 max-w-[150px]">{explanation}</p>
      </div>
    </>
  );
};

export default ComoFuncionaCard;
