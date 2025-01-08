import Image from "next/image";

export default function Image2() {
  return (
    <div className="space-y-3">
      <Image
        src="/2.png"
        alt="top"
        width={260.31}
        height={133.6}
      />
      <h1 className="font-manrope md:text-[24px] text-[20px] md:h-[28px] w-[345px] h-[23px] font-semibold text-[#0F113A]">
        Os melhores imóveis, seus.
      </h1>
      <p className="font-roboto md:text-[16px] text-[14px] md:w-[345px] md:h-[96px] w-[315px] h-[84px] font-light text-[#0F113A]">
        Experts do mercado imobiliário estão atentos às oportunidades de compra
        em todo o Brasil e escolhem as melhores administradoras de imóveis para
        cuidar das locações e do bem.
      </p>
    </div>
  );
}
