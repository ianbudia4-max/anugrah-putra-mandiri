export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string[]; // paragraphs / headings marked with "## "
  coverImage: string;
  publishedAt: string; // ISO date
  relatedProducts?: string[]; // product slugs
  seoTitle: string;
  seoDescription: string;
}

export const articles: Article[] = [
  {
    slug: "cara-memilih-papan-tulis-ruang-kelas",
    title: "Cara Memilih Papan Tulis untuk Ruang Kelas",
    excerpt:
      "Panduan praktis memilih jenis, ukuran, dan permukaan papan tulis yang tepat untuk ruang kelas sekolah maupun TK/PAUD.",
    coverImage: "/images/articles/memilih-papan-tulis-kelas.jpg",
    publishedAt: "2026-01-15",
    relatedProducts: ["whiteboard-standar", "whiteboard-magnetik-premium"],
    seoTitle: "Cara Memilih Papan Tulis untuk Ruang Kelas | Anugrah Putra Mandiri",
    seoDescription:
      "Tips memilih papan tulis yang tepat untuk ruang kelas, mulai dari jenis permukaan, ukuran, hingga kebutuhan magnetik.",
    content: [
      "Memilih papan tulis untuk ruang kelas bukan sekadar soal ukuran, tetapi juga soal bagaimana papan tersebut akan digunakan setiap hari oleh guru dan siswa. Papan tulis yang tepat dapat mendukung proses belajar mengajar berjalan lebih lancar.",
      "## 1. Perhatikan Jenis Permukaan",
      "Whiteboard dengan permukaan melamin umumnya menjadi pilihan paling umum karena mudah dihapus dan tahan terhadap pemakaian harian. Untuk kelas yang sering menggunakan media tempel seperti poster atau kertas kerja siswa, whiteboard magnetik bisa menjadi pilihan yang lebih fungsional.",
      "## 2. Sesuaikan Ukuran dengan Luas Ruangan",
      "Ukuran papan tulis idealnya disesuaikan dengan jarak pandang siswa dan luas ruang kelas. Ruang kelas dengan kapasitas besar umumnya membutuhkan papan yang lebih lebar agar tulisan tetap terbaca dari baris belakang.",
      "## 3. Pertimbangkan Kebutuhan Jangka Panjang",
      "Papan tulis akan digunakan dalam waktu lama, sehingga penting mempertimbangkan daya tahan rangka dan permukaan. Rangka aluminium umumnya lebih tahan lama dibandingkan rangka kayu untuk pemakaian intensif di lingkungan sekolah.",
      "## 4. Konsultasikan Kebutuhan Spesifik",
      "Setiap sekolah memiliki kebutuhan yang berbeda, mulai dari ukuran ruangan hingga jumlah papan yang dibutuhkan. Berkonsultasi dengan produsen papan tulis dapat membantu menentukan spesifikasi yang paling sesuai sebelum melakukan pemesanan.",
    ],
  },
  {
    slug: "perbedaan-whiteboard-dan-glassboard",
    title: "Perbedaan Whiteboard dan Glassboard",
    excerpt:
      "Kenali perbedaan material, tampilan, dan perawatan antara whiteboard konvensional dan glassboard sebelum memilih untuk ruang kerja Anda.",
    coverImage: "/images/articles/whiteboard-vs-glassboard.jpg",
    publishedAt: "2026-01-20",
    relatedProducts: ["glassboard-premium", "whiteboard-standar"],
    seoTitle: "Perbedaan Whiteboard dan Glassboard | Anugrah Putra Mandiri",
    seoDescription:
      "Pahami perbedaan whiteboard dan glassboard dari sisi material, tampilan, daya tahan, dan perawatan sebelum memilih produk yang tepat.",
    content: [
      "Whiteboard dan glassboard sama-sama berfungsi sebagai media menulis, namun keduanya memiliki karakteristik yang cukup berbeda dari sisi material dan tampilan.",
      "## Material Permukaan",
      "Whiteboard menggunakan permukaan melamin yang dilapiskan pada papan dasar, sedangkan glassboard menggunakan kaca tempered sebagai permukaan utamanya. Perbedaan material ini memengaruhi tampilan akhir dan cara perawatannya.",
      "## Tampilan dan Kesan Ruangan",
      "Glassboard umumnya memberikan kesan lebih modern dan premium karena permukaannya yang mengkilap dan bersih. Whiteboard cenderung memberikan tampilan yang lebih fungsional dan umum digunakan di berbagai jenis ruangan.",
      "## Daya Tahan dan Perawatan",
      "Permukaan kaca pada glassboard umumnya lebih tahan terhadap noda membekas dan lebih mudah dibersihkan dibandingkan whiteboard yang telah lama digunakan. Namun whiteboard tetap menjadi pilihan praktis dengan biaya yang lebih terjangkau untuk pemakaian umum.",
      "## Mana yang Sebaiknya Dipilih?",
      "Pemilihan antara whiteboard dan glassboard sebaiknya disesuaikan dengan kebutuhan ruangan, anggaran, dan tampilan yang diinginkan. Untuk ruang meeting atau ruang kerja profesional, glassboard sering menjadi pilihan yang lebih sesuai.",
    ],
  },
  {
    slug: "apa-itu-papan-tulis-magnetik",
    title: "Apa Itu Papan Tulis Magnetik?",
    excerpt:
      "Memahami fungsi dan keunggulan papan tulis magnetik serta situasi yang paling tepat untuk menggunakannya.",
    coverImage: "/images/articles/papan-tulis-magnetik.jpg",
    publishedAt: "2026-02-01",
    relatedProducts: ["whiteboard-magnetik-premium"],
    seoTitle: "Apa Itu Papan Tulis Magnetik? | Anugrah Putra Mandiri",
    seoDescription:
      "Penjelasan mengenai papan tulis magnetik, fungsi, dan kapan sebaiknya digunakan dibandingkan whiteboard biasa.",
    content: [
      "Papan tulis magnetik adalah papan tulis yang memiliki lapisan dasar bersifat magnetik, sehingga memungkinkan penggunanya menempelkan media seperti kertas, poster, atau alat bantu belajar menggunakan magnet.",
      "## Bagaimana Cara Kerjanya?",
      "Di bawah lapisan permukaan menulis, terdapat lapisan logam tipis yang membuat magnet dapat menempel dengan baik. Permukaan menulisnya tetap sama seperti whiteboard pada umumnya sehingga fungsi menulis tidak berkurang.",
      "## Kapan Sebaiknya Digunakan?",
      "Papan tulis magnetik sangat berguna di ruang kelas yang sering menggunakan media pembelajaran visual, ruang meeting yang membutuhkan penempelan dokumen sementara, atau ruang kerja yang membutuhkan kombinasi menulis dan menempel informasi.",
      "## Perawatan Sederhana",
      "Perawatan papan tulis magnetik tidak jauh berbeda dengan whiteboard biasa. Membersihkan permukaan secara rutin dengan penghapus yang sesuai akan menjaga papan tetap awet dan nyaman digunakan.",
    ],
  },
  {
    slug: "ukuran-papan-tulis-ideal-ruang-kelas",
    title: "Ukuran Papan Tulis yang Ideal untuk Ruang Kelas",
    excerpt:
      "Panduan menentukan ukuran papan tulis berdasarkan luas ruang kelas dan jarak pandang siswa.",
    coverImage: "/images/articles/ukuran-papan-tulis-kelas.jpg",
    publishedAt: "2026-02-10",
    relatedProducts: ["whiteboard-standar"],
    seoTitle: "Ukuran Papan Tulis Ideal untuk Ruang Kelas | Anugrah Putra Mandiri",
    seoDescription:
      "Cara menentukan ukuran papan tulis yang ideal untuk ruang kelas berdasarkan luas ruangan dan kapasitas siswa.",
    content: [
      "Ukuran papan tulis yang tepat akan memengaruhi kenyamanan siswa dalam membaca tulisan dari berbagai posisi duduk. Ukuran yang terlalu kecil dapat menyulitkan siswa di baris belakang, sementara ukuran yang terlalu besar bisa jadi kurang efisien untuk ruangan kecil.",
      "## Pertimbangkan Luas Ruangan",
      "Semakin luas ruang kelas, semakin besar pula ukuran papan tulis yang umumnya dibutuhkan agar proporsional dengan ruangan dan tetap nyaman dilihat dari jarak jauh.",
      "## Pertimbangkan Jumlah Siswa",
      "Kelas dengan jumlah siswa yang banyak biasanya membutuhkan papan tulis yang lebih lebar agar tulisan dapat terbaca jelas oleh seluruh siswa, termasuk yang duduk di bagian belakang.",
      "## Konsultasikan Ukuran Sebelum Memesan",
      "Karena setiap ruang kelas memiliki dimensi yang berbeda, sebaiknya ukuran papan tulis dikonsultasikan terlebih dahulu agar hasil akhir sesuai dengan kebutuhan dan proporsi ruangan.",
    ],
  },
  {
    slug: "tips-memilih-papan-tulis-ruang-meeting",
    title: "Tips Memilih Papan Tulis untuk Ruang Meeting",
    excerpt:
      "Beberapa hal yang perlu dipertimbangkan saat memilih papan tulis untuk ruang meeting kantor agar lebih fungsional dan profesional.",
    coverImage: "/images/articles/papan-tulis-ruang-meeting.jpg",
    publishedAt: "2026-02-18",
    relatedProducts: ["glassboard-premium", "whiteboard-standing-portable"],
    seoTitle: "Tips Memilih Papan Tulis untuk Ruang Meeting | Anugrah Putra Mandiri",
    seoDescription:
      "Tips memilih papan tulis untuk ruang meeting kantor, dari segi tampilan, ukuran, hingga jenis permukaan yang sesuai.",
    content: [
      "Ruang meeting memiliki kebutuhan yang sedikit berbeda dibandingkan ruang kelas. Selain fungsi menulis, tampilan papan tulis juga turut memengaruhi kesan profesional pada ruangan.",
      "## Pilih Tampilan yang Sesuai dengan Interior",
      "Untuk ruang meeting dengan konsep interior modern, glassboard sering menjadi pilihan karena tampilannya yang bersih dan elegan. Whiteboard konvensional tetap menjadi pilihan praktis dengan biaya yang lebih terjangkau.",
      "## Pertimbangkan Mobilitas",
      "Jika ruang meeting sering digunakan untuk berbagai keperluan atau sering berpindah konfigurasi, whiteboard dengan dudukan berdiri (standing whiteboard) bisa menjadi pilihan yang lebih fleksibel dibandingkan papan yang terpasang permanen di dinding.",
      "## Sesuaikan Ukuran dengan Kapasitas Ruangan",
      "Ukuran papan tulis sebaiknya proporsional dengan luas ruang meeting agar tidak terlalu mendominasi ruangan namun tetap cukup besar untuk digunakan secara efektif saat presentasi atau diskusi.",
    ],
  },
  {
    slug: "papan-tulis-custom-kapan-menggunakan-ukuran-custom",
    title: "Papan Tulis Custom: Kapan Sebaiknya Menggunakan Ukuran Custom?",
    excerpt:
      "Situasi-situasi di mana papan tulis dengan ukuran atau spesifikasi custom menjadi pilihan yang lebih tepat dibandingkan ukuran standar.",
    coverImage: "/images/articles/papan-tulis-custom.jpg",
    publishedAt: "2026-02-25",
    relatedProducts: ["papan-tulis-custom"],
    seoTitle: "Kapan Sebaiknya Menggunakan Papan Tulis Custom? | Anugrah Putra Mandiri",
    seoDescription:
      "Pelajari situasi yang tepat untuk menggunakan papan tulis custom, baik dari sisi ukuran, bentuk, maupun kombinasi material.",
    content: [
      "Papan tulis dengan ukuran standar memang lebih praktis dan umum tersedia, namun ada beberapa situasi di mana papan tulis custom menjadi pilihan yang lebih tepat.",
      "## Ruangan dengan Dimensi Tidak Standar",
      "Ruangan dengan dinding sempit, sudut tertentu, atau bentuk yang tidak umum sering kali membutuhkan papan tulis dengan ukuran khusus agar dapat terpasang dengan baik dan proporsional.",
      "## Kebutuhan Kombinasi Fungsi",
      "Beberapa pelanggan membutuhkan papan tulis yang menggabungkan beberapa fungsi sekaligus, misalnya area magnetik dan area kalender dalam satu papan. Kebutuhan seperti ini biasanya memerlukan pendekatan custom.",
      "## Kebutuhan Branding Perusahaan",
      "Perusahaan yang ingin menambahkan elemen identitas visual pada papan tulis, seperti logo, biasanya membutuhkan proses produksi yang disesuaikan dengan permintaan tersebut.",
      "## Konsultasikan Kebutuhan Anda",
      "Karena setiap kebutuhan dapat berbeda, cara terbaik untuk menentukan apakah Anda memerlukan papan tulis custom adalah dengan berkonsultasi langsung mengenai ukuran, material, dan desain yang diinginkan.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticlesForProduct(productSlug: string): Article[] {
  return articles.filter((a) => a.relatedProducts?.includes(productSlug));
}
