import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Artikel",
  description:
    "Artikel dan panduan seputar pemilihan, jenis, dan perawatan papan tulis dari Anugrah Putra Mandiri.",
  alternates: { canonical: "/artikel" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export default function ArtikelPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Artikel" }]} />

      <section className="py-10 sm:py-12 lg:py-16">
        <div className="container-app">
          <SectionHeading
            eyebrow="Artikel"
            title="Panduan dan Tips Seputar Papan Tulis"
            description="Kumpulan artikel untuk membantu Anda memahami jenis, ukuran, dan pemilihan papan tulis yang tepat."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/artikel/${article.slug}`}
                className="focus-ring group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-shadow hover:shadow-lg hover:shadow-navy/5"
              >
                <div className="relative aspect-video overflow-hidden bg-surface">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-medium text-ink/45">{formatDate(article.publishedAt)}</p>
                  <h2 className="mt-1.5 text-[15px] font-bold leading-snug text-navy sm:text-base">
                    {article.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-ink/60 sm:text-sm">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                    Baca Selengkapnya
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
