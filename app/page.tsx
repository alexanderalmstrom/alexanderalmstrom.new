import { Heading } from "@/app/ui/heading";
import { Hero, HeroContent, HeroImage } from "@components/hero";
import { Slider } from "@components/slider";
import { Image } from "@ui/image";
import { Paragraph } from "@ui/paragraph";

export default function Home() {
  return (
    <main>
      <Hero ratio="full" background="black" color="white">
        <HeroContent align="bottomLeft">
          <Heading as="h1" size="large" className="max-w-[80vw]">
            Senior Frontend Developer & Designer
          </Heading>
        </HeroContent>
      </Hero>
      <Slider>
        {[...Array(50)].map((_, i) => {
          const index = i + 1;
          const src = `https://source.unsplash.com/random/2000x300${index}`;
          const alt = `Random unsplash image ${index}`;

          return (
            <Image
              className="flex-grow min-w-[calc(50vw-2vw)] aspect-5/7 snap-start"
              src={src}
              alt={alt}
              sizes="50vw"
              fill
            />
          );
        })}
      </Slider>
    </main>
  );
}
