import Image from "next/image";

export default function PropertyImage() {
  return (
    <div className="w-[240px] h-6 mx-auto flex justify-center items-center md:absolute md:w-[405px] md:h-[420px] md:top-[90px] md:left-[174px]">
      <Image
        src="/propertyImage.png"
        alt="Property description"
        layout="intrinsic"
        width={405}
        height={420}
      />
    </div>
  );
}
