"use client";

import {
  useRef,
  Children,
  useEffect,
  cloneElement,
  isValidElement,
  ReactElement,
  useState,
} from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { useVisibleElements } from "@hooks/useVisibleElements";

const slider = cva([], {
  variants: {},
});

export type SliderVariantProps = VariantProps<typeof slider>;

export interface SliderProps {
  className?: string;
  children: React.ReactNode;
}

export default function Slider({ className, children }: SliderProps) {
  const ref = useRef<HTMLElement | null>(null);

  const { intersectingChildren, elements } = useVisibleElements(ref, children, {
    root: ref.current,
    threshold: [0, 0.5, 1],
  });

  useEffect(() => {
    console.log("intersectingChildren updated", intersectingChildren);
  }, [intersectingChildren]);

  return (
    <section ref={ref} className={cx(className, slider())}>
      <div className="flex overflow-x-auto scroll-smooth snap-mandatory snap-x scrollbar-hide">
        {elements}
      </div>
    </section>
  );
}
