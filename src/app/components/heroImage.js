import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative w-[249.32px] h-[249.32px] md:w-[1005px] md:h-[1022px]">
    <Image
      src="/heroImage.png"
      alt="Hero Image"
      width={1005}
      height={1022}
      className="hidden md:block"
    />

    {/* Mobile */}
    <Image
      src="/mobileHeroImage.png"
      alt="Hero Image Mobile"
      width={249.32}
      height={249.32}
      className="block md:hidden"
    />
  </div>
  );
}
