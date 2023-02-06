import { suisseIntl, suisseMono } from "@/app/assets/fonts";
import { cva, cx, type VariantProps } from "class-variance-authority";

export const paragraph = cva(["max-w-3xl leading-relaxed"], {
  variants: {
    style: {
      sansSerif: [suisseIntl.className],
      mono: [suisseMono.className],
    },
  },
  defaultVariants: {
    style: "mono",
  },
});

export type ParagraphVariantProps = VariantProps<typeof paragraph>;

export interface ParagraphProps extends ParagraphVariantProps {
  className?: string;
  children: React.ReactNode;
}

export default function Paragraph({
  className,
  children,
  style,
}: ParagraphProps) {
  return <p className={cx(className, paragraph({ style }))}>{children}</p>;
}
