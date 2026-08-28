import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductGrid } from "@/components/ProductGrid";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLdScript } from "@/components/JsonLdScript";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { getRelatedArticlesForProduct } from "@/data/articles";
import { faqItems } from "@/data/faq";
import { productWhatsAppMessage } from "@/lib/whatsapp";
import { productJsonLd } from "@/lib/structuredData";
import Link from "next/link";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: { canonical: `/produk/${product.slug}` },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const relatedArticles = getRelatedArticlesForProduct(product.slug);
  const productFaq = faqItems.filter((f) =>
    ["Apakah bisa custom ukuran?", "Bagaimana cara mendapatkan harga?", "Apakah melayani pengiriman?"].includes(
      f.question
    )
  );

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Produk", href: "/produk" },
          { label: product.name },
        ]}
      />
      <JsonLdScript data={productJsonLd(product)} />

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="container-app grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface">
              <Image
                src={product.gallery[0] ?? product.image}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 90vw"
                className="object-cover"
              />
            </div>
            {product.gallery.length > 1 && (
              <div className="mt-3 grid grid-cols-3 gap-3">
                {product.gallery.slice(1).map((img) => (
                  <div key={img} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-surface">
                    <Image src={img} alt={product.name} fill sizes="20vw" className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <span className="section-eyebrow text-xs font-bold uppercase text-blue">{product.category}</span>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">{product.name}</h1>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{product.shortDescription}</p>

            <div className="mt-6 space-y-3 text-[15px] leading-relaxed text-ink/70">
              {product.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-7">
              <WhatsAppButton message={productWhatsAppMessage(product.name)} size="lg">
                <MessageCircle className="h-4 w-4" />
                Tanyakan Produk Ini
              </WhatsAppButton>
            </div>

            <div className="mt-8 rounded-xl border border-line bg-white p-5 sm:p-6">
              <h2 className="text-sm font-bold uppercase tracking-wide text-navy">Spesifikasi</h2>
              <dl className="mt-3 divide-y divide-line">
                {product.specifications.map((spec) => (
                  <div key={spec.label} className="flex justify-between gap-4 py-2.5 text-sm">
                    <dt className="text-ink/55">{spec.label}</dt>
                    <dd className="text-right font-medium text-navy">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <div className="container-app grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-navy">Fitur Produk</h2>
            <ul className="mt-4 space-y-2.5">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink/70">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" strokeWidth={2.25} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy">Aplikasi Penggunaan</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <li key={a} className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-ink/70">
                  {a}
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-lg font-bold text-navy">Pilihan Custom</h2>
            <ul className="mt-4 space-y-2.5">
              {product.customOptions.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-[15px] text-ink/70">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" strokeWidth={2.25} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="container-app">
          <h2 className="text-lg font-bold text-navy">Produk Terkait</h2>
          <div className="mt-6">
            <ProductGrid products={related} />
          </div>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="bg-white py-12 sm:py-14">
          <div className="container-app">
            <h2 className="text-lg font-bold text-navy">Artikel Terkait</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/artikel/${a.slug}`}
                  className="focus-ring rounded-xl border border-line bg-surface p-5 transition-colors hover:border-blue"
                >
                  <h3 className="text-[15px] font-bold text-navy">{a.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink/60">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-14">
        <div className="container-app max-w-2xl">
          <h2 className="text-lg font-bold text-navy">Pertanyaan Terkait</h2>
          <div className="mt-6">
            <FAQAccordion items={productFaq} />
          </div>
        </div>
      </section>
    </>
  );
}
