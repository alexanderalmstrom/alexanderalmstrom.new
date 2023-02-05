import { Heading } from "@components/heading";
import { Hero, HeroContent, HeroImage } from "@components/hero";

export default function Home() {
  return (
    <main>
      <Hero>
        <HeroImage
          className="col-span-full row-span-full"
          src={`https://source.unsplash.com/random/2560x1080?=${Math.random()}`}
          alt="random unsplash image"
        />
        <HeroContent className="col-span-full row-span-full max-w-6xl p-10 z-10">
          <Heading as="h1">Senior Frontend Developer & Designer</Heading>
        </HeroContent>
      </Hero>
    </main>
  );
}
