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
  const [intersectingChildren, setIntersectingChildren] = useState<Set<number>>(
    new Set()
  );

  const elements = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child;

    const elementRef = useRef<HTMLElement | null>(null);

    function observeElements(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        const { isIntersecting, intersectionRatio } = entry;

        if (isIntersecting && intersectionRatio > 0.5) {
          setIntersectingChildren((prevIntersectingChildren) => {
            const newIntersectingChildren = new Set(prevIntersectingChildren);
            newIntersectingChildren.add(index);
            return newIntersectingChildren;
          });
        } else {
          setIntersectingChildren((prevIntersectingChildren) => {
            const newIntersectingChildren = new Set(prevIntersectingChildren);
            newIntersectingChildren.delete(index);
            return newIntersectingChildren;
          });
        }
      });
    }

    useEffect(() => {
      const observeOptions = {
        root: ref.current,
        threshold: [0, 0.5, 1],
      };

      const observer = new IntersectionObserver(
        observeElements,
        observeOptions
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }, []);

    return cloneElement(child as ReactElement, {
      ref: elementRef,
      key: index,
    });
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
