import Heading from "@components/heading";
import Hero from "@components/hero";

export default function Home() {
  return (
    <main>
      <Hero align="bottomLeft">
        <Heading as="h1" size={"large"}>
          Senior Frontend Developer & Designer
        </Heading>
      </Hero>
    </main>
  );
}
