"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductFinder } from "@/components/ProductFinder";
import { products, productCategories } from "@/data/products";

export function ProdukPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeCategory = searchParams.get("kategori");

  const [showFinder, setShowFinder] = useState(false);

  const filteredProducts = useMemo(() => {
    if (!activeCategory) return products;
    const cat = productCategories.find((c) => c.slug === activeCategory);
    if (!cat) return products;
    return products.filter((p) => p.category === cat.name);
  }, [activeCategory]);

  function setCategory(slug: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set("kategori", slug);
    } else {
      params.delete("kategori");
    }
    router.push(`${pathname}${params.toString() ? `?${params.toString()}` : ""}`, { scroll: false });
  }

  return (
    <>
      <section className="py-10 sm:py-12">
        <div className="container-app">
          <SectionHeading
            eyebrow="Katalog Produk"
            title="Semua Produk Papan Tulis"
            description="Jelajahi berbagai jenis papan tulis kami, atau gunakan Product Finder untuk mendapatkan rekomendasi sesuai kebutuhan Anda."
          />

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setCategory(null)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                !activeCategory
                  ? "border-blue bg-blue text-white"
                  : "border-line bg-white text-navy hover:border-blue"
              }`}
            >
              Semua
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setCategory(cat.slug)}
                className={`focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCategory === cat.slug
                    ? "border-blue bg-blue text-white"
                    : "border-line bg-white text-navy hover:border-blue"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => setShowFinder((v) => !v)}
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-blue bg-blue/5 px-4 py-2.5 text-sm font-semibold text-blue hover:bg-blue/10"
            >
              {showFinder ? "Tutup Product Finder" : "Bantu Saya Memilih Papan Tulis"}
            </button>
          </div>

          {showFinder && (
            <div className="mt-6 max-w-2xl">
              <ProductFinder />
            </div>
          )}

          <div className="mt-10">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </section>
    </>
  );
}
