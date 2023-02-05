import { Heading } from "@components/heading";
import { Hero, HeroContent, HeroImage } from "@components/hero";
import { Paragraph } from "@components/paragraph";

export default function Home() {
  return (
    <main>
      <Hero ratio="full">
        {/* <HeroImage src="https://source.unsplash.com/random/2560x1080" alt="" /> */}
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
    </main>
  );
}
