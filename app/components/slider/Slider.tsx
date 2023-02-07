"use client";

import {
  useRef,
  Children,
  useEffect,
  cloneElement,
  isValidElement,
  ReactElement,
} from "react";
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
  const elements = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child;

    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const { isIntersecting } = entry;

          if (isIntersecting) {
            console.log("entry isIntersecting", entry.target);
          }
        });
      });

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        observer.disconnect();
      };
    }, []);

    return cloneElement(child as ReactElement, {
      ref: ref,
      key: index,
    });
  });

  return (
    <section className={cx(className, slider())}>
      <div className="flex overflow-x-auto scroll-smooth snap-mandatory snap-x scrollbar-hide">
        {elements}
      </div>
    </section>
  );
}
