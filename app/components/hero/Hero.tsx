import { cva, cx, type VariantProps } from "class-variance-authority";

export type HeroVariantProps = VariantProps<typeof hero>;

export const hero = cva(["grid relative overflow-hidden"], {
  variants: {
    variant: {
      full: "h-screen",
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
    variant: "full",
    color: "black",
  },
});

export interface HeroProps extends HeroVariantProps {
  className?: string;
  children: React.ReactNode;
}

export default function Hero({
  className,
  children,
  variant,
  background,
  color,
}: HeroProps) {
  return (
    <section className={cx(className, hero({ variant, background, color }))}>
      {children}
    </section>
  );
}
