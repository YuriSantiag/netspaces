import About from "./About/page";
import Hero from "./Hero/page";
import Release from "./Release/page";

export default function Home() {
  return (
      <main>
        <Hero/>
        <Release/>
        <About/>
      </main>
  );
}
