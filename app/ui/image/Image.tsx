"use client";

import { forwardRef, MutableRefObject, Ref } from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";

export type ImageVariantProps = VariantProps<typeof image>;

export const image = cva(["relative"], {
  variants: {},
});

export interface ImageProps extends NextImageProps {
  className?: string;
}

const Image = forwardRef(
  ({ className, ...props }: ImageProps, ref: Ref<HTMLElement>) => {
    const { isIntersecting } = useIntersectionObserver(
      ref as MutableRefObject<HTMLElement>,
      {
        threshold: 0,
        rootMargin: "0px 0px",
      }
    );

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
);

export default Image;
