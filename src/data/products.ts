export type ProductCategory =
  | "Whiteboard"
  | "Whiteboard Magnetik"
  | "Glassboard"
  | "Blackboard"
  | "Custom Board";

export const productCategories: { name: ProductCategory; slug: string; description: string }[] = [
  {
    name: "Whiteboard",
    slug: "whiteboard",
    description: "Papan tulis putih standar untuk kelas, kantor, dan ruang meeting.",
  },
  {
    name: "Whiteboard Magnetik",
    slug: "whiteboard-magnetik",
    description: "Whiteboard dengan permukaan magnetik untuk menempel media belajar.",
  },
  {
    name: "Glassboard",
    slug: "glassboard",
    description: "Papan tulis kaca dengan tampilan premium dan permukaan tahan noda.",
  },
  {
    name: "Blackboard",
    slug: "blackboard",
    description: "Papan tulis kapur klasik untuk kebutuhan tertentu.",
  },
  {
    name: "Custom Board",
    slug: "custom-board",
    description: "Papan tulis dengan ukuran, bentuk, atau desain sesuai permintaan.",
  },
];

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string[];
  image: string;
  gallery: string[];
  specifications: { label: string; value: string }[];
  features: string[];
  applications: string[];
  customOptions: string[];
  relatedArticles?: string[]; // article slugs
  seoTitle: string;
  seoDescription: string;
}

export const products: Product[] = [
  {
    slug: "whiteboard-standar",
    name: "Whiteboard Standar",
    category: "Whiteboard",
    shortDescription: "Papan tulis putih dengan permukaan halus, cocok untuk ruang kelas dan kantor.",
    description: [
      "Whiteboard Standar dirancang untuk kebutuhan menulis dan presentasi sehari-hari di ruang kelas, kantor, maupun ruang pelatihan.",
      "Permukaan papan dibuat rata dan mudah dihapus sehingga nyaman digunakan dalam waktu lama tanpa meninggalkan bekas noda spidol yang sulit dibersihkan.",
    ],
    image: "/images/products/whiteboard-standar.jpg",
    gallery: [
      "/images/products/whiteboard-standar.jpg",
      "/images/products/whiteboard-standar-2.jpg",
    ],
    specifications: [
      { label: "Permukaan", value: "Melamin putih" },
      { label: "Rangka", value: "Aluminium" },
      { label: "Ukuran Tersedia", value: "60x90 cm, 90x120 cm, 120x240 cm, custom" },
      { label: "Pemasangan", value: "Dinding / dudukan berdiri (opsional)" },
    ],
    features: [
      "Permukaan halus dan mudah dihapus",
      "Rangka aluminium ringan namun kokoh",
      "Tersedia dalam berbagai ukuran",
      "Cocok untuk pemakaian intensif harian",
    ],
    applications: ["Ruang kelas", "Kantor", "Ruang pelatihan", "Ruang belajar"],
    customOptions: [
      "Ukuran sesuai permintaan",
      "Penambahan garis grid (opsional)",
      "Dudukan berdiri (standing whiteboard)",
    ],
    relatedArticles: ["cara-memilih-papan-tulis-ruang-kelas", "ukuran-papan-tulis-ideal-ruang-kelas"],
    seoTitle: "Whiteboard Standar Berkualitas | Anugrah Putra Mandiri",
    seoDescription:
      "Whiteboard standar dengan permukaan halus dan rangka aluminium, tersedia berbagai ukuran untuk sekolah dan kantor. Konsultasikan kebutuhan Anda.",
  },
  {
    slug: "whiteboard-magnetik-premium",
    name: "Whiteboard Magnetik Premium",
    category: "Whiteboard Magnetik",
    shortDescription: "Whiteboard dengan permukaan magnetik untuk menempel media belajar dan dokumen.",
    description: [
      "Whiteboard Magnetik Premium memiliki lapisan dasar magnetik sehingga dapat digunakan untuk menempelkan media belajar, poster, atau dokumen menggunakan magnet.",
      "Cocok digunakan di ruang kelas maupun ruang meeting yang membutuhkan fleksibilitas dalam menyampaikan materi.",
    ],
    image: "/images/products/whiteboard-magnetik.jpg",
    gallery: [
      "/images/products/whiteboard-magnetik.jpg",
      "/images/products/whiteboard-magnetik-2.jpg",
    ],
    specifications: [
      { label: "Permukaan", value: "Melamin putih dengan lapisan magnetik" },
      { label: "Rangka", value: "Aluminium" },
      { label: "Ukuran Tersedia", value: "90x120 cm, 120x180 cm, 120x240 cm, custom" },
      { label: "Daya Magnet", value: "Cukup untuk menempel kertas dan media ringan" },
    ],
    features: [
      "Permukaan magnetik untuk media belajar",
      "Tetap nyaman digunakan untuk menulis",
      "Rangka aluminium tahan lama",
      "Tersedia berbagai ukuran custom",
    ],
    applications: ["Sekolah", "TK / PAUD", "Ruang meeting", "Ruang pelatihan"],
    customOptions: [
      "Ukuran sesuai permintaan",
      "Penambahan garis grid atau kalender",
      "Kombinasi dengan area non-magnetik",
    ],
    relatedArticles: ["apa-itu-papan-tulis-magnetik"],
    seoTitle: "Whiteboard Magnetik Premium | Anugrah Putra Mandiri",
    seoDescription:
      "Whiteboard magnetik untuk sekolah dan ruang meeting, permukaan halus dan dapat ditempel media belajar. Tersedia ukuran custom.",
  },
  {
    slug: "glassboard-premium",
    name: "Glassboard Premium",
    category: "Glassboard",
    shortDescription: "Papan tulis kaca dengan tampilan premium dan permukaan tahan noda.",
    description: [
      "Glassboard Premium menghadirkan tampilan modern dan elegan untuk ruang kerja maupun ruang meeting.",
      "Permukaan kaca tahan terhadap noda spidol dan lebih mudah dibersihkan dibandingkan whiteboard konvensional, cocok untuk lingkungan kerja profesional.",
    ],
    image: "/images/products/glassboard-premium.jpg",
    gallery: [
      "/images/products/glassboard-premium.jpg",
      "/images/products/glassboard-premium-2.jpg",
    ],
    specifications: [
      { label: "Permukaan", value: "Kaca tempered" },
      { label: "Warna", value: "Bening / putih susu (sesuai permintaan)" },
      { label: "Pemasangan", value: "Dinding dengan dudukan standoff" },
      { label: "Ukuran Tersedia", value: "60x90 cm, 90x120 cm, 120x180 cm, custom" },
    ],
    features: [
      "Tampilan premium dan modern",
      "Permukaan tahan noda dan mudah dibersihkan",
      "Kaca tempered untuk keamanan",
      "Cocok untuk ruang kerja profesional",
    ],
    applications: ["Ruang meeting", "Kantor", "Ruang direksi", "Ruang kerja modern"],
    customOptions: [
      "Ukuran sesuai permintaan",
      "Pilihan warna kaca",
      "Penambahan logo perusahaan (opsional)",
    ],
    relatedArticles: ["perbedaan-whiteboard-dan-glassboard"],
    seoTitle: "Glassboard Premium | Papan Tulis Kaca | Anugrah Putra Mandiri",
    seoDescription:
      "Glassboard premium dengan tampilan modern untuk ruang meeting dan kantor. Permukaan kaca tempered, tahan noda, tersedia ukuran custom.",
  },
  {
    slug: "blackboard-klasik",
    name: "Blackboard Klasik",
    category: "Blackboard",
    shortDescription: "Papan tulis kapur klasik untuk kebutuhan pengajaran tertentu.",
    description: [
      "Blackboard Klasik menghadirkan papan tulis kapur dengan permukaan yang dirancang untuk pemakaian kapur tulis secara optimal.",
      "Masih menjadi pilihan untuk sekolah atau instansi tertentu yang membutuhkan papan tulis dengan gaya klasik.",
    ],
    image: "/images/products/blackboard-klasik.jpg",
    gallery: [
      "/images/products/blackboard-klasik.jpg",
      "/images/products/blackboard-klasik-2.jpg",
    ],
    specifications: [
      { label: "Permukaan", value: "Papan kapur hitam" },
      { label: "Rangka", value: "Kayu / aluminium (pilihan)" },
      { label: "Ukuran Tersedia", value: "90x120 cm, 120x240 cm, custom" },
    ],
    features: [
      "Permukaan optimal untuk kapur tulis",
      "Pilihan rangka kayu atau aluminium",
      "Tahan lama untuk pemakaian jangka panjang",
    ],
    applications: ["Sekolah", "Lembaga pendidikan tradisional"],
    customOptions: ["Ukuran sesuai permintaan", "Pilihan jenis rangka"],
    seoTitle: "Blackboard Klasik | Papan Tulis Kapur | Anugrah Putra Mandiri",
    seoDescription:
      "Blackboard klasik dengan permukaan kapur berkualitas untuk sekolah dan lembaga pendidikan. Tersedia berbagai ukuran.",
  },
  {
    slug: "papan-tulis-custom",
    name: "Papan Tulis Custom",
    category: "Custom Board",
    shortDescription: "Papan tulis dengan ukuran, bentuk, dan spesifikasi sesuai kebutuhan Anda.",
    description: [
      "Papan Tulis Custom dibuat sesuai kebutuhan spesifik pelanggan, baik dari sisi ukuran, bentuk, material, maupun tambahan fitur tertentu.",
      "Cocok untuk ruang dengan dimensi khusus, kebutuhan branding perusahaan, atau kombinasi fungsi (misalnya whiteboard dengan area magnetik dan kalender).",
    ],
    image: "/images/products/papan-tulis-custom.jpg",
    gallery: [
      "/images/products/papan-tulis-custom.jpg",
      "/images/products/papan-tulis-custom-2.jpg",
    ],
    specifications: [
      { label: "Permukaan", value: "Sesuai pilihan (melamin, magnetik, kaca)" },
      { label: "Ukuran", value: "Sepenuhnya custom sesuai kebutuhan" },
      { label: "Bentuk", value: "Persegi, persegi panjang, atau bentuk khusus" },
    ],
    features: [
      "Ukuran dan bentuk fleksibel",
      "Kombinasi material sesuai kebutuhan",
      "Konsultasi langsung dengan tim kami",
      "Cocok untuk kebutuhan interior/kontraktor",
    ],
    applications: ["Kontraktor / interior", "Perusahaan dengan kebutuhan khusus", "Instansi", "Ruang dengan dimensi non-standar"],
    customOptions: [
      "Ukuran bebas sesuai permintaan",
      "Kombinasi material dan permukaan",
      "Penambahan elemen branding perusahaan",
    ],
    relatedArticles: ["papan-tulis-custom-kapan-menggunakan-ukuran-custom"],
    seoTitle: "Papan Tulis Custom Sesuai Kebutuhan | Anugrah Putra Mandiri",
    seoDescription:
      "Layanan pembuatan papan tulis custom sesuai ukuran, bentuk, dan material yang Anda butuhkan. Konsultasi gratis via WhatsApp.",
  },
  {
    slug: "whiteboard-standing-portable",
    name: "Whiteboard Standing Portable",
    category: "Whiteboard",
    shortDescription: "Whiteboard dengan dudukan berdiri yang mudah dipindahkan.",
    description: [
      "Whiteboard Standing Portable dilengkapi dudukan beroda sehingga mudah dipindahkan antar ruangan sesuai kebutuhan.",
      "Pilihan tepat untuk ruang meeting yang sering berganti konfigurasi atau untuk kebutuhan presentasi berpindah tempat.",
    ],
    image: "/images/products/whiteboard-standing.jpg",
    gallery: [
      "/images/products/whiteboard-standing.jpg",
      "/images/products/whiteboard-standing-2.jpg",
    ],
    specifications: [
      { label: "Permukaan", value: "Melamin putih, dua sisi (opsional)" },
      { label: "Dudukan", value: "Rangka besi/aluminium dengan roda" },
      { label: "Ukuran Tersedia", value: "90x120 cm, 100x150 cm, custom" },
    ],
    features: [
      "Mudah dipindahkan dengan roda",
      "Bisa dua sisi (double-side) opsional",
      "Tinggi dapat disesuaikan",
    ],
    applications: ["Ruang meeting", "Ruang training", "Event / seminar"],
    customOptions: ["Ukuran papan", "Single atau double side", "Warna rangka"],
    seoTitle: "Whiteboard Standing Portable | Anugrah Putra Mandiri",
    seoDescription:
      "Whiteboard standing dengan dudukan beroda, mudah dipindahkan untuk ruang meeting dan training. Tersedia pilihan ukuran.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, limit)
    .concat(
      products.filter((p) => p.slug !== product.slug && p.category !== product.category)
    )
    .slice(0, limit);
}
