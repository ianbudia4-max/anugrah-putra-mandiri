import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductGrid } from "@/components/ProductGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PortfolioCard } from "@/components/PortfolioCard";
import { Testimonials } from "@/components/Testimonials";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { products } from "@/data/products";
import { portfolioItems } from "@/data/portfolio";
import { faqItems } from "@/data/faq";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: site.seo.defaultTitle,
  description: site.seo.defaultDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);
  const homeFaq = faqItems.slice(0, 6);

  return (
    <>
      <Hero />
      <ValueProps />

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-app">
          <SectionHeading
            eyebrow="Kategori Produk"
            title="Pilih Jenis Papan Tulis Sesuai Kebutuhan"
            description="Kami menyediakan berbagai jenis papan tulis untuk mendukung kebutuhan menulis, presentasi, dan pembelajaran Anda."
          />
          <div className="mt-8">
            <CategoryShowcase />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-app">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Produk Unggulan"
              title="Papan Tulis yang Paling Banyak Dicari"
            />
            <Button href="/produk" variant="outline" icon={<ArrowRight className="h-4 w-4" />} className="shrink-0">
              Lihat Semua Produk
            </Button>
          </div>
          <div className="mt-8">
            <ProductGrid products={featuredProducts} />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-app grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Tentang Kami"
              title="Anugrah Putra Mandiri, Produsen Papan Tulis"
              description="Anugrah Putra Mandiri bergerak di bidang produksi dan jasa pembuatan berbagai jenis papan tulis, termasuk papan tulis custom, yang berbasis di Sukoharjo, Jawa Tengah."
            />
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink/65">
              Kami melayani kebutuhan papan tulis untuk sekolah, TK/PAUD, universitas, kantor,
              perusahaan, instansi, hingga kontraktor dan reseller yang membutuhkan mitra produksi
              papan tulis yang dapat diandalkan.
            </p>
            <div className="mt-7">
              <Button href="/tentang-kami" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
                Selengkapnya Tentang Kami
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-xl border border-line bg-surface">
              <Image
                src="/images/about/workshop-1.jpg"
                alt="Workshop produksi Anugrah Putra Mandiri"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-square overflow-hidden rounded-xl border border-line bg-surface">
              <Image
                src="/images/about/workshop-2.jpg"
                alt="Area produksi papan tulis Anugrah Putra Mandiri"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-app">
          <SectionHeading
            align="center"
            className="mx-auto"
            eyebrow="Mengapa Memilih Kami"
            title="Diproduksi dengan Perhatian pada Detail"
            description="Kami memahami bahwa setiap ruangan dan kebutuhan pelanggan berbeda-beda."
          />
          <div className="mt-10">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-app">
          <SectionHeading
            eyebrow="Proses Pemesanan"
            title="Mudah dan Jelas dari Awal hingga Selesai"
          />
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-app">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Portofolio" title="Beberapa Pekerjaan Kami" />
            <Button href="/portofolio" variant="outline" icon={<ArrowRight className="h-4 w-4" />} className="shrink-0">
              Lihat Semua Portofolio
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-app">
          <SectionHeading
            align="center"
            className="mx-auto"
            eyebrow="Testimonial"
            title="Apa Kata Pelanggan Kami"
          />
          <div className="mt-10">
            <Testimonials />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-app">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="FAQ" title="Pertanyaan yang Sering Diajukan" />
            <Button href="/faq" variant="outline" icon={<ArrowRight className="h-4 w-4" />} className="shrink-0">
              Lihat Semua FAQ
            </Button>
          </div>
          <div className="mt-8 max-w-3xl">
            <FAQAccordion items={homeFaq} />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-app">
          <CTASection />
        </div>
      </section>
    </>
  );
}
