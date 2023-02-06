"use client";

import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";
import { cva, cx, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { useRef } from "react";

export type HeroImageVariantProps = VariantProps<typeof heroImage>;

export const heroImage = cva(["relative col-span-full row-span-full"], {
  variants: {},
});

export interface HeroImageProps extends HeroImageVariantProps {
  className?: string;
  src: string;
  alt: string;
}

export default function HeroImage({ className, src, alt }: HeroImageProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { isIntersecting } = useIntersectionObserver(ref, {
    threshold: 0,
    rootMargin: "0px 0px",
  });

  return (
    <figure ref={ref} className={cx(className, heroImage())}>
      <Image
        className={cx(
          "relative object-cover transition-opacity duration-300",
          `${isIntersecting ? "opacity-1" : "opacity-0"}`
        )}
        src={src}
        alt={alt}
        fill
      />
    </figure>
  );
}
