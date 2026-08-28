import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASection } from "@/components/CTASection";
import { JsonLdScript } from "@/components/JsonLdScript";
import { articles, getArticleBySlug } from "@/data/articles";
import { getProductBySlug } from "@/data/products";
import { articleJsonLd } from "@/lib/structuredData";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: { canonical: `/artikel/${article.slug}` },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      images: [{ url: article.coverImage }],
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedProducts = (article.relatedProducts ?? [])
    .map((s) => getProductBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <Breadcrumb items={[{ label: "Artikel", href: "/artikel" }, { label: article.title }]} />
      <JsonLdScript data={articleJsonLd(article)} />

      <article className="py-10 sm:py-12 lg:py-16">
        <div className="container-app max-w-3xl">
          <p className="text-xs font-medium text-ink/45">{formatDate(article.publishedAt)}</p>
          <h1 className="text-balance mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {article.title}
          </h1>

          <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl border border-line bg-surface">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="prose-content mt-8 space-y-4">
            {article.content.map((block, i) =>
              block.startsWith("## ") ? (
                <h2 key={i} className="pt-2 text-lg font-bold text-navy sm:text-xl">
                  {block.replace("## ", "")}
                </h2>
              ) : (
                <p key={i} className="text-[15px] leading-relaxed text-ink/70">
                  {block}
                </p>
              )
            )}
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-10 rounded-xl border border-line bg-white p-5 sm:p-6">
              <h2 className="text-sm font-bold uppercase tracking-wide text-navy">Produk Terkait</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {relatedProducts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/produk/${p.slug}`}
                    className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-navy hover:border-blue"
                  >
                    {p.name}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="container-app">
          <CTASection />
        </div>
      </section>
    </>
  );
}
