import Image from "next/image";
import { cn } from "@/lib/utils";

type PlaceholderImageBlockProps = {
  label: string;
  src?: string;
  alt?: string;
  imageClassName?: string;
  className?: string;
  ratioClassName?: string;
};

export function PlaceholderImageBlock({
  label,
  src,
  alt,
  imageClassName,
  className,
  ratioClassName
}: PlaceholderImageBlockProps) {
  const hasImage = Boolean(src);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-muted",
        className
      )}
    >
      <div className={cn("relative aspect-[16/10] w-full", ratioClassName)}>
        {hasImage ? (
          <Image
            src={src!}
            alt={alt ?? label}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={cn("object-cover", imageClassName)}
          />
        ) : (
          <div className="h-full w-full bg-hero-gradient" aria-hidden="true" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />
      </div>
      <div className="absolute bottom-3 left-3 rounded-md border border-white/10 bg-black/50 px-3 py-1 text-xs text-slate-200">
        {label}
      </div>
    </div>
  );
}
