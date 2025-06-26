import NextImage from "next/image";
import { cn } from "@/lib/utils";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}

export function Image({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 75,
}: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-cover", className)}
      priority={priority}
      quality={quality}
    />
  );
} 