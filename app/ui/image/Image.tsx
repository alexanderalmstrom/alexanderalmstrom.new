"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { cva, cx, type VariantProps } from "class-variance-authority";
import NextImage, { ImageProps as NextImageProps } from "next/image";

export type ImageVariantProps = VariantProps<typeof image>;

export const image = cva(["relative"], {
  variants: {},
});

export interface ImageProps extends NextImageProps {
  className?: string;
}

export default function Image({ className, ...props }: ImageProps) {
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
        {...props}
      />
    </figure>
  );
}
