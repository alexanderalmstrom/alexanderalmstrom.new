import { cva, cx, type VariantProps } from "class-variance-authority";
import HeroContent, { heroContent } from "./HeroContent";
import HeroImage from "./HeroImage";

export const hero = cva(["grid relative overflow-hidden"], {
  variants: {
    variant: {
      full: "h-screen",
    },
    color: {
      white: "text-white",
      black: "text-black",
    },
  },
  defaultVariants: {
    variant: "full",
    color: "white",
  },
});

export type HeroContentProps = VariantProps<typeof heroContent>;

export interface HeroProps extends VariantProps<typeof hero>, HeroContentProps {
  className?: string;
  children: React.ReactNode;
}

export default function Hero({
  className,
  children,
  variant,
  color,
  align,
}: HeroProps) {
  return (
    <section className={cx(className, hero({ variant, color }))}>
      <HeroImage
        className="col-span-full row-span-full"
        src={`https://source.unsplash.com/random/2560x1080?=${Math.random()}`}
        alt="random unsplash image"
      />
      <HeroContent
        className="col-span-full row-span-full max-w-6xl p-10 z-10"
        align={align}
      >
        {children}
      </HeroContent>
    </section>
  );
}
