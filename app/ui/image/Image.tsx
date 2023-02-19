"use client";

import { forwardRef, MutableRefObject, Ref, useRef, useState } from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";

export type ImageVariantProps = VariantProps<typeof root>;

export const root = cva([""], {
  variants: {},
});

export interface ImageProps extends NextImageProps {
  className?: string;
}

const Image = forwardRef(
  ({ className, ...props }: ImageProps, forwardedRef: Ref<HTMLElement>) => {
    const ref = forwardedRef ?? useRef<HTMLElement | null>(null);
    const [loaded, setLoaded] = useState(false);

    const { isIntersecting } = useIntersectionObserver(
      ref as MutableRefObject<HTMLElement>,
      {
        threshold: 0,
        rootMargin: "0px 0px",
      }
    );

    return (
      <figure ref={ref} className={cx(className, root())}>
        <NextImage
          className={cx(
            "object-cover transition-opacity duration-300 delay-150",
            `${isIntersecting && loaded ? "opacity-1" : "opacity-0"}`
          )}
          onLoad={() => setLoaded(true)}
          {...props}
        />
      </figure>
    );
  }
);

export default Image;
