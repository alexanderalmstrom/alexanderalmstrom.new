import { cva, cx, VariantProps } from "class-variance-authority";

const heading = cva([], {
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
    VariantProps<typeof heading> {
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