"use client";

import { useState, useMemo } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioCard } from "@/components/PortfolioCard";
import { portfolioItems, portfolioCategories, type PortfolioCategory } from "@/data/portfolio";

export function PortofolioPageClient() {
  const [active, setActive] = useState<PortfolioCategory | null>(null);

  const filtered = useMemo(
    () => (active ? portfolioItems.filter((p) => p.category === active) : portfolioItems),
    [active]
  );

  return (
    <section className="py-10 sm:py-12">
      <div className="container-app">
        <SectionHeading
          eyebrow="Portofolio"
          title="Pekerjaan yang Pernah Kami Kerjakan"
          description="Kumpulan project papan tulis yang telah kami kerjakan untuk berbagai jenis pelanggan."
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
          {portfolioCategories.map((cat) => (
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
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-line bg-white py-16 text-center">
              <p className="text-sm text-ink/60">Belum ada project pada kategori ini.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => (
                <PortfolioCard key={item.slug} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
