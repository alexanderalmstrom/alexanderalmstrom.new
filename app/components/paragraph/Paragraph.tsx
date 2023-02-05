import { suisseMono } from "@/app/fonts";
import { cx } from "class-variance-authority";

export interface ParagraphProps {
  className?: string;
  children: React.ReactNode;
}

export default function Paragraph({ className, children }: ParagraphProps) {
  return (
    <p
      className={cx(
        className,
        "max-w-3xl leading-relaxed",
        suisseMono.className
      )}
    >
      {children}
    </p>
  );
}
