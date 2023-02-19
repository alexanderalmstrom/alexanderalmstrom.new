import { cva, cx, type VariantProps } from "class-variance-authority";
import { ImageProps } from "next/image";
import { Image } from "@ui/image";

export type HeroImageVariantProps = VariantProps<typeof heroImage>;

export const heroImage = cva(["col-span-full row-span-full"], {
  variants: {},
});

export interface HeroImageProps extends HeroImageVariantProps, ImageProps {
  className?: string;
  src: string;
  alt: string;
}

export default function HeroImage({ className, ...props }: HeroImageProps) {
  return <Image className={cx(className, heroImage())} {...props} />;
}
