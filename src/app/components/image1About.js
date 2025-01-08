import Image from "next/image";

export default function Image1() {
  return (
    <div className="space-y-3">
        <Image
        src="/1.png"
        alt="top"
        width={260.31}
        height={133.6}
      />
      <h1 className="font-manrope md:text-[24px] md:h-[28px] text-[20px] w-[345px] h-[23px] font-semibold text-[#0F113A]">
        Juntos, mais fortes.
      </h1>
      <p className="font-roboto md:text-[16px] text-[14px] md:w-[345px] md:h-[96px] w-[315px] h-[84px] font-light text-[#0F113A]">
        Somando o dinheiro de milhares de assinantes, todos os meses o grupo
        ganha o poder de pagar à vista por novos imóveis, o que permite
        negociar melhor o valor e aproveitar oportunidades.
      </p>
    </div>
  );
}
