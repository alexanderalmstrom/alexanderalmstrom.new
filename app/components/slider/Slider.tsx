"use client";

import { useRef, useState, Children } from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";

const slider = cva([], {
  variants: {},
});

export type SliderVariantProps = VariantProps<typeof slider>;

export interface SliderProps {
  className?: string;
  children: React.ReactNode;
}

export default function Slider({ className, children }: SliderProps) {
  const childrenArray = Children.toArray(children);

  const ref = useRef<HTMLElement | null>(null);
  const [items, setItems] = useState(new Set());

  return (
    <section className={cx(className, slider())} ref={ref}>
      <div className="flex overflow-x-auto scroll-smooth snap-mandatory snap-x scrollbar-hide">
        {children}
      </div>
    </section>
  );
}
