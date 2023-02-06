import { cva, cx, type VariantProps } from "class-variance-authority";

export type HeadingVariantProps = VariantProps<typeof heading>;

const heading = cva(["mb-4 lg:mb-8 tracking-tight"], {
  variants: {
    size: {
      large: "text-fluid-1",
      medium: "text-fluid-2",
      small: "text-fluid-3",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    HeadingVariantProps {
  className?: string;
  as?: HeadingType;
  children: React.ReactNode;
}

export default function Heading({
  children,
  className,
  size,
  as,
  ...props
}: HeadingProps) {
  const Component = as ?? "h2";

  return (
    <Component className={cx(className, heading({ size }))} {...props}>
      {children}
    </Component>
  );
}
