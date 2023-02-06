"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { cva, cx, type VariantProps } from "class-variance-authority";
import NextImage from "next/image";

export type ImageVariantProps = VariantProps<typeof image>;

export const image = cva(["relative"], {
  variants: {},
});

export interface ImageProps extends ImageVariantProps {
  className?: string;
  src: string;
  alt: string;
}

export default function Image({ className, src, alt }: ImageProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { isIntersecting } = useIntersectionObserver(ref, {
    threshold: 0,
    rootMargin: "0px 0px",
  });

  return (
    <figure ref={ref} className={cx(className, image())}>
      <NextImage
        className={cx(
          "object-cover transition-opacity duration-300",
          `${isIntersecting ? "opacity-1" : "opacity-0"}`
        )}
        src={src}
        alt={alt}
        fill
      />
    </figure>
  );
}
