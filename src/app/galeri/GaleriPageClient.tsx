"use client";

import { useState, useMemo } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryGrid, type GalleryImage } from "@/components/GalleryGrid";

const galleryCategories = ["Produk", "Workshop", "Produksi", "Pengiriman", "Instalasi", "Project"] as const;

const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/produk-1.jpg", alt: "Dokumentasi produk papan tulis 1", category: "Produk" },
  { src: "/images/gallery/produk-2.jpg", alt: "Dokumentasi produk papan tulis 2", category: "Produk" },
  { src: "/images/gallery/produk-3.jpg", alt: "Dokumentasi produk papan tulis 3", category: "Produk" },
  { src: "/images/gallery/workshop-1.jpg", alt: "Workshop produksi 1", category: "Workshop" },
  { src: "/images/gallery/workshop-2.jpg", alt: "Workshop produksi 2", category: "Workshop" },
  { src: "/images/gallery/produksi-1.jpg", alt: "Proses produksi papan tulis 1", category: "Produksi" },
  { src: "/images/gallery/produksi-2.jpg", alt: "Proses produksi papan tulis 2", category: "Produksi" },
  { src: "/images/gallery/pengiriman-1.jpg", alt: "Dokumentasi pengiriman 1", category: "Pengiriman" },
  { src: "/images/gallery/pengiriman-2.jpg", alt: "Dokumentasi pengiriman 2", category: "Pengiriman" },
  { src: "/images/gallery/instalasi-1.jpg", alt: "Dokumentasi instalasi 1", category: "Instalasi" },
  { src: "/images/gallery/instalasi-2.jpg", alt: "Dokumentasi instalasi 2", category: "Instalasi" },
  { src: "/images/gallery/project-1.jpg", alt: "Dokumentasi project 1", category: "Project" },
  { src: "/images/gallery/project-2.jpg", alt: "Dokumentasi project 2", category: "Project" },
  { src: "/images/gallery/project-3.jpg", alt: "Dokumentasi project 3", category: "Project" },
];

export function GaleriPageClient() {
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(
    () => (active ? galleryImages.filter((g) => g.category === active) : galleryImages),
    [active]
  );

  return (
    <section className="py-10 sm:py-12">
      <div className="container-app">
        <SectionHeading
          eyebrow="Galeri"
          title="Dokumentasi Produk dan Aktivitas Kami"
          description="Foto-foto berikut merupakan placeholder yang akan diganti dengan dokumentasi asli."
        />

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActive(null)}
            className={`focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              !active ? "border-blue bg-blue text-white" : "border-line bg-white text-navy hover:border-blue"
            }`}
          >
            Semua
          </button>
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                active === cat ? "border-blue bg-blue text-white" : "border-line bg-white text-navy hover:border-blue"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <GalleryGrid images={filtered} />
        </div>
      </div>
    </section>
  );
}
