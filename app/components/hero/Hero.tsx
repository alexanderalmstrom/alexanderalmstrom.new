import { cva, cx, type VariantProps } from "class-variance-authority";

export type HeroVariantProps = VariantProps<typeof root>;

export const root = cva(["grid overflow-hidden"], {
  variants: {
    ratio: {
      fluid: "aspect-9/16 sm:aspect-square md:aspect-4/3 lg:aspect-16/9",
      landscape: "aspect-4/3",
      portrait: "aspect-5/7",
      square: "aspect-square",
      full: "min-h-screen",
    },
    background: {
      black: "bg-black",
      white: "bg-white",
    },
    color: {
      black: "text-black",
      white: "text-white",
    },
  },
  defaultVariants: {
    background: "black",
    color: "white",
  },
});

export interface HeroProps extends HeroVariantProps {
  className?: string;
  children: React.ReactNode;
}

export default function Hero({
  className,
  children,
  ratio,
  background,
  color,
}: HeroProps) {
  return (
    <section className={cx(className, root({ ratio, background, color }))}>
      {children}
    </section>
  );
}
