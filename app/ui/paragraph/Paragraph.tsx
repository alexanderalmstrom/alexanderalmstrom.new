import { cva, cx, type VariantProps } from "class-variance-authority";

export const paragraph = cva(["leading-relaxed"], {
  variants: {},
});

export type ParagraphVariantProps = VariantProps<typeof paragraph>;

export interface ParagraphProps extends ParagraphVariantProps {
  className?: string;
  children: React.ReactNode;
}

export default function Paragraph({ className, children }: ParagraphProps) {
  return <p className={cx(className, paragraph())}>{children}</p>;
}
