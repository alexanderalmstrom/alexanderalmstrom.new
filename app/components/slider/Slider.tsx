"use client";

import { useRef, useEffect } from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { useIntersectingChildren } from "@hooks/useIntersectingChildren";

export const root = cva(["max-w-screen-xl mx-auto"], {
  variants: {},
});

export type SliderVariantProps = VariantProps<typeof root>;

export interface SliderProps extends SliderVariantProps {
  className?: string;
  children: React.ReactNode;
}

export default function Slider({ className, children }: SliderProps) {
  const ref = useRef<HTMLElement | null>(null);

  const { intersectingChildren, elements } = useIntersectingChildren(
    ref,
    children,
    {
      threshold: [0, 0.5, 1],
    }
  );

  useEffect(() => {
    console.log("intersectingChildren updated", intersectingChildren);
  }, [intersectingChildren]);

  return (
    <section ref={ref} className={cx(className, root())}>
      <div className="flex overflow-x-auto scroll-smooth snap-mandatory snap-x scrollbar-hide">
        {elements}
      </div>
    </section>
  );
}
