import NextImage from "next/image";
import { photo, type PhotoKey } from "@/lib/photos";

type Props = {
  name: PhotoKey;
  /** `sizes` dla next/image — podaj realną szerokość, jaką zdjęcie zajmuje w layoucie */
  sizes: string;
  /** proporcje kadru; bez tego zdjęcie zachowuje własne */
  ratio?: string;
  priority?: boolean;
  className?: string;
  /** nadpisz alt, jeśli kontekst wymaga innego opisu */
  alt?: string;
  /** przesunięcie kadru przy przycinaniu, np. "50% 30%" */
  position?: string;
};

/**
 * Zdjęcie w ramce o zadanych proporcjach, z blur-placeholderem.
 * Ramka nadaje `overflow: hidden`, więc zdjęcie nigdy nie rozpycha layoutu.
 */
export function Photo({
  name,
  sizes,
  ratio,
  priority,
  className,
  alt,
  position,
}: Props) {
  const p = photo(name);
  return (
    <div
      className={["photo", className].filter(Boolean).join(" ")}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <NextImage
        src={p.src}
        alt={alt ?? p.alt}
        width={p.width}
        height={p.height}
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        blurDataURL={p.blurDataURL}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}
