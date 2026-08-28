import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GaleriPageClient } from "./GaleriPageClient";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Galeri foto produk, workshop, produksi, pengiriman, dan instalasi papan tulis Anugrah Putra Mandiri.",
  alternates: { canonical: "/galeri" },
};

export default function GaleriPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Galeri" }]} />
      <GaleriPageClient />
    </>
  );
}
