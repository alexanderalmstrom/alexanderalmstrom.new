import Image from "next/image";

export interface HeroImageProps {
  className?: string;
  src: string;
  alt: string;
}

export default function HeroImage({ className, src, alt }: HeroImageProps) {
  return (
    <figure className={className}>
      <Image
        className="object-cover"
        src={src}
        alt={alt}
        loading="eager"
        fill
      />
    </figure>
  );
}
