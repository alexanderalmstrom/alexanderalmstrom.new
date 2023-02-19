import { randomUnsplashImages } from "@mocks/unsplash";
import { Hero, HeroContent } from "@components/hero";
import { Box } from "@components/box";
import { Slider } from "@components/slider";
import { AspectRatio } from "@components/aspect-ratio";
import { Heading } from "@ui/heading";
import { Image } from "@ui/image";

const images1 = randomUnsplashImages({ total: 25, width: 3000, height: 2000 });
const images2 = randomUnsplashImages({
  total: 25,
  width: 1000,
  height: 1500,
});

export default function Home() {
  return (
    <main>
      <Hero background="black" color="white">
        <HeroContent align="bottomLeft">
          <Slider>
            {images1.map((image, index) => (
              <AspectRatio
                className="flex-grow min-w-[calc(100%)] snap-start"
                ratio="full"
              >
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  sizes="100vw"
                  fill
                />
              </AspectRatio>
            ))}
          </Slider>
          <Box padding={12}>
            <Heading size="large">
              Senior Frontend Developer & UI Designer based in Stockholm,
              Sweden.
            </Heading>
          </Box>
        </HeroContent>
      </Hero>
      <Slider>
        {images2.map((image, index) => (
          <AspectRatio
            className="flex-grow min-w-[calc(50%-2vw)] lg:min-w-[calc(33%-3vw)] snap-start"
            ratio="portrait"
          >
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              sizes="33vw"
              fill
            />
          </AspectRatio>
        ))}
      </Slider>
    </main>
  );
}
