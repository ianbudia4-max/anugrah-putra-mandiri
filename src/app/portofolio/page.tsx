import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASection } from "@/components/CTASection";
import { PortofolioPageClient } from "./PortofolioPageClient";

export const metadata: Metadata = {
  title: "Portofolio",
  description:
    "Lihat portofolio pekerjaan papan tulis Anugrah Putra Mandiri untuk sekolah, kantor, instansi, dan kebutuhan custom.",
  alternates: { canonical: "/portofolio" },
};

export default function PortofolioPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Portofolio" }]} />
      <PortofolioPageClient />
      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="container-app">
          <CTASection
            title="Punya Project yang Ingin Didiskusikan?"
            description="Ceritakan kebutuhan project Anda kepada kami melalui WhatsApp."
          />
        </div>
      </section>
    </>
  );
}
