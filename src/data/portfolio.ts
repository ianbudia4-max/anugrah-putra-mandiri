export type PortfolioCategory = "Sekolah" | "Kantor" | "Instansi" | "Custom" | "Lainnya";

export interface PortfolioItem {
  slug: string;
  title: string;
  category: PortfolioCategory;
  location: string;
  products: string[];
  description: string;
  image: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "contoh-project-sekolah",
    title: "project Sekolah",
    category: "Sekolah",
    location: "surakarta",
    products: ["Whiteboard Standar"],
    description:
      "Deskripsi singkat project akan ditampilkan di sini setelah data project sekolah tersedia.",
    image: "/images/portfolio/placeholder-sekolah.jpg",
  },
  {
    slug: "contoh-project-kantor",
    title: "project Kantor",
    category: "Kantor",
    location: "magelang",
    products: ["Glassboard Premium"],
    description:
      "Deskripsi singkat project akan ditampilkan di sini setelah data project kantor tersedia.",
    image: "/images/portfolio/placeholder-kantor.jpg",
  },
  {
    slug: "contoh-project-instansi",
    title: "Project Instansi",
    category: "Instansi",
    location: "ponorogo",
    products: ["Whiteboard Magnetik Premium"],
    description:
      "Deskripsi singkat project akan ditampilkan di sini setelah data project instansi tersedia.",
    image: "/images/portfolio/placeholder-instansi.jpg",
  },
  {
    slug: "contoh-project-custom",
    title: "Project Custom",
    category: "Custom",
    location: "karanganyar",
    products: ["Papan Tulis Custom"],
    description:
      "Deskripsi singkat project akan ditampilkan di sini setelah data project custom tersedia.",
    image: "/images/portfolio/placeholder-custom.jpg",
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  "Sekolah",
  "Kantor",
  "Instansi",
  "Custom",
  "Lainnya",
];
