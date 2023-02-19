import { cva, cx, type VariantProps } from "class-variance-authority";

export type HeroVariantProps = VariantProps<typeof root>;

export const root = cva(["grid overflow-hidden"], {
  variants: {
    background: {
      black: "bg-black",
    },
    color: {
      white: "text-white",
    },
  },
});

export interface HeroProps extends HeroVariantProps {
  className?: string;
  children: React.ReactNode;
}

export default function Hero({
  className,
  children,
  background,
  color,
}: HeroProps) {
  return (
    <section className={cx(className, root({ background, color }))}>
      {children}
    </section>
  );
}
