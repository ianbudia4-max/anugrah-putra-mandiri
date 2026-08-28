import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { JsonLdScript } from "@/components/JsonLdScript";
import { faqItems } from "@/data/faq";
import { faqJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "FAQ - Pertanyaan yang Sering Diajukan",
  description:
    "Jawaban atas pertanyaan yang sering diajukan seputar produk, custom, pemesanan, dan harga papan tulis Anugrah Putra Mandiri.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "FAQ" }]} />
      <JsonLdScript data={faqJsonLd(faqItems)} />

      <section className="py-10 sm:py-12 lg:py-16">
        <div className="container-app">
          <SectionHeading
            eyebrow="FAQ"
            title="Pertanyaan yang Sering Diajukan"
            description="Berikut jawaban atas pertanyaan yang paling sering ditanyakan oleh calon pelanggan kami."
          />
          <div className="mt-8 max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="container-app">
          <CTASection
            title="Masih Ada Pertanyaan Lain?"
            description="Jangan ragu untuk menghubungi kami langsung melalui WhatsApp."
          />
        </div>
      </section>
    </>
  );
}
