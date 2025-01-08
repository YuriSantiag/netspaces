import H1About from "../components/h1About";
import H2About from "../components/h2About";
import Image1 from "../components/image1About";
import Image2 from "../components/image2About";
import Image3 from "../components/image3About";

export default function About() {
  return (
    <div className="flex space-y-6 flex-col justify-center w-full md:h-[646] h-[1244px] md:px-44 px-10 items-start">
      <H1About />
      <H2About />
      <div className="flex flex-col items-center gap-16 mt-6 lg:flex-row justify-center ">
        <Image1 />
        <Image2 />
        <Image3 />
      </div>
    </div>
  );
}
