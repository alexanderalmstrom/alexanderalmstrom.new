import { Heading } from "@/app/ui/heading";
import { Hero, HeroContent, HeroImage } from "@components/hero";
import { Slider } from "@components/slider";
import { Image } from "@ui/image";
import { Paragraph } from "@ui/paragraph";

export default function Home() {
  return (
    <main>
      <Hero>
        {/* <HeroImage src="https://source.unsplash.com/random/3000x3001" alt="" /> */}
        <HeroContent>
          <Heading as="h1" size="large">
            Senior Frontend Developer & Designer
          </Heading>
          <Paragraph>
            Hello! My name is Alexander, 32 years old from Stockholm, Sweden. I
            am a designer and front end developer with 10+ years of web
            development and web design experience. My main driving force is to
            create attractive, pixel perfect, accessible, fast and highly
            converting websites with a simple interface for both clients and
            users. I always strive to combine my knowledge in UX, design,
            technology and code to create solutions that is user-friendly, easy
            to administrate, maintain and further develop.
          </Paragraph>
        </HeroContent>
      </Hero>
      <Slider>
        {[...Array(10)].map((_, i) => {
          const index = i + 1;
          const src = `https://source.unsplash.com/random/2560x108${index}`;
          const alt = `Random unsplash image ${index}`;

          return (
            <Image
              className="flex-grow min-w-[calc(50vw-2vw)] aspect-16/9 snap-start"
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
