import Image from "next/image";

export default function Image3() {
  return (
    <div className="space-y-3">
      <Image
        src="/3.png"
        alt="top"
        width={260.31}
        height={133.6}
      />
      <h1 className="font-manrope md:text-[24px] text-[20px] md:h-[28px] w-[345px] h-[23px] font-semibold text-[#0F113A]">
        Hiper diluição de risco.
      </h1>
      <p className="font-roboto md:text-[16px] text-[14px] md:w-[345px] md:h-[96px] w-[315px] h-[84px] font-light text-[#0F113A]">
        Os riscos de vacância ou inadimplência, típicos de imóveis, são
        diluídos, pois você será dono de apenas uma fração de cada imóvel e o
        aluguel dos seus outros imóveis pode cobrir os custos.
      </p>
    </div>
  );
}
