"use client";

import { useEffect, useRef, useState } from "react";
import { cx } from "class-variance-authority";
import Image from "next/image";

export interface HeroImageProps {
  className?: string;
  src: string;
  alt: string;
}

export default function HeroImage({ className, src, alt }: HeroImageProps) {
  const observer = new IntersectionObserver(handleObserve);
  const imageRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  function handleObserve(entries: IntersectionObserverEntry[]) {
    for (const entry of entries) {
      entry.isIntersecting && setIsVisible(true);
      observer.unobserve(entry.target);
    }
  }

  useEffect(() => {
    if (!imageRef.current) {
      return;
    }

    observer.observe(imageRef.current);
  }, []);

  return (
    <figure ref={imageRef} className={cx(className, "relative")}>
      <Image
        className={cx("object-cover")}
        src={src}
        alt={alt}
        loading={isVisible ? "eager" : "lazy"}
        fill
      />
    </figure>
  );
}
