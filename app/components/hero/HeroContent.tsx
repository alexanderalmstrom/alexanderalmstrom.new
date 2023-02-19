import { cva, cx, type VariantProps } from "class-variance-authority";

export type HeroContentVariantProps = VariantProps<typeof heroContent>;

export const heroContent = cva(
  ["col-span-full row-span-full relative overflow-auto z-10"],
  {
    variants: {
      align: {
        center: "place-self-center text-center",
        bottomLeft: "self-end",
      },
    },
  }
);

export interface HeroContentProps extends HeroContentVariantProps {
  className?: string;
  children: React.ReactNode;
}

export default function HeroContent({
  className,
  children,
  align,
}: HeroContentProps) {
  return (
    <div className={cx(className, heroContent({ align }))}>{children}</div>
  );
}
