import { cva, cx, type VariantProps } from "class-variance-authority";

export const heroContent = cva([], {
  variants: {
    align: {
      center: "place-self-center",
      bottomLeft: "self-end",
    },
  },
  defaultVariants: {
    align: "center",
  },
});

export interface HeroContentProps extends VariantProps<typeof heroContent> {
  className?: string;
  children: React.ReactNode;
}

export default function HeroContent({
  children,
  className,
  align,
}: HeroContentProps) {
  return (
    <div className={cx(className, heroContent({ align }))}>{children}</div>
  );
}
