import { cva, cx, type VariantProps } from "class-variance-authority";

export type AspectRatioVariantProps = VariantProps<typeof root>;

export const root = cva(["relative"], {
  variants: {
    ratio: {
      fluid: "aspect-9/16 sm:aspect-square md:aspect-4/3 lg:aspect-16/9",
      landscape: "aspect-4/3",
      portrait: "aspect-5/7",
      square: "aspect-square",
      full: "min-h-screen",
    },
  },
});

export interface AspectRatioProps extends AspectRatioVariantProps {
  className?: string;
  children: React.ReactNode;
}

export default function AspectRatio({
  className,
  children,
  ratio,
}: AspectRatioProps) {
  return <div className={cx(className, root({ ratio }))}>{children}</div>;
}
