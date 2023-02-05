import { cva, cx, type VariantProps } from "class-variance-authority";

export type HeroVariantProps = VariantProps<typeof hero>;

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

export interface HeroProps extends HeroVariantProps {
  className?: string;
  children: React.ReactNode;
}

export default function Hero({
  className,
  children,
  variant,
  color,
}: HeroProps) {
  return (
    <section className={cx(className, hero({ variant, color }))}>
      {children}
    </section>
  );
}
