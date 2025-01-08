  import Button from "../components/button";
import H1HeroContent from "../components/h1HeroContent";
import HeroImage from "../components/heroImage";
import NetspacesImage from "../components/netspacesImage";
import PHeroContent from "../components/pHeroContent";

  export default function Hero() {
    return (
      <div className="relative md:w-full md:h-[646px] h-[640] mx-auto flex items-center">
        <div className="flex flex-col md:space-y-3 space-y-8 w-[50%] md:pl-16 pl-9">
          <NetspacesImage />
          <H1HeroContent />
          <PHeroContent />
          <Button />
        </div>
        <div className="relative w-[50%] md:h-full flex justify-end">
          <HeroImage/>
        </div>
      </div>
    );
  }
