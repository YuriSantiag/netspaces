import Image from "next/image";

export default function DiscountImage() {
  return (
    <div className="pt-5 w-[315px] h-[270px] md:w-[589px] md:h-[234px] ">
      <Image
        src="/discountImage.png"
        alt="Discount Image"
        layout="responsive"
        width={589}
        height={234}
      />
    </div>
  );
}
