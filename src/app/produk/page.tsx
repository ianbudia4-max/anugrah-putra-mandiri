import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTASection } from "@/components/CTASection";
import { ProdukPageClient } from "./ProdukPageClient";

export const metadata: Metadata = {
  title: "Produk Papan Tulis",
  description:
    "Katalog produk papan tulis Anugrah Putra Mandiri: whiteboard, whiteboard magnetik, glassboard, blackboard, hingga papan tulis custom.",
  alternates: { canonical: "/produk" },
};

export default function ProdukPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Produk" }]} />
      <Suspense fallback={null}>
        <ProdukPageClient />
      </Suspense>
      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="container-app">
          <CTASection />
        </div>
      </section>
    </>
  );
}
