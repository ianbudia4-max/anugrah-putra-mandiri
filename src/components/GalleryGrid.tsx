import Image from "next/image";

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  if (images.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-line bg-white py-16 text-center">
        <p className="text-sm text-ink/60">Belum ada foto pada kategori ini.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {images.map((img, i) => (
        <div
          key={`${img.src}-${i}`}
          className="group relative aspect-square overflow-hidden rounded-lg border border-line bg-surface"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 45vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-2 left-2 rounded-full bg-navy/85 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
            {img.category}
          </span>
        </div>
      ))}
    </div>
  );
}
