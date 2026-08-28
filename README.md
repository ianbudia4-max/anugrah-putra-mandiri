# Website Anugrah Putra Mandiri (APM)

Company profile + katalog produk + lead generation (WhatsApp) untuk produsen papan tulis
Anugrah Putra Mandiri, Sukoharjo, Jawa Tengah.

## Tech Stack

- Next.js 16 (App Router, TypeScript, `src/` directory)
- Tailwind CSS v4
- Lucide React (icon)
- Framer Motion (animasi ringan)
- Font: Plus Jakarta Sans (self-hosted via `@fontsource/plus-jakarta-sans`)

Tidak menggunakan database/backend — seluruh data bersifat statis (`src/data/*.ts`) untuk versi
pertama, sesuai permintaan.

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build Production

```bash
npm run build
npm run start
```

## Struktur Folder

```
src/
├── app/                # Routing (App Router)
│   ├── page.tsx         → /
│   ├── tentang-kami/    → /tentang-kami
│   ├── produk/          → /produk, /produk/[slug]
│   ├── portofolio/      → /portofolio
│   ├── galeri/          → /galeri
│   ├── kontak/          → /kontak
│   ├── faq/             → /faq
│   ├── artikel/         → /artikel, /artikel/[slug]
│   ├── sitemap.ts       → /sitemap.xml
│   └── robots.ts        → /robots.txt
├── components/          # Semua komponen UI reusable
├── data/                # Data bisnis, produk, portofolio, artikel, FAQ
└── lib/                 # Helper (WhatsApp link, structured data / JSON-LD)
```

## ⚠️ Data yang Masih Harus Diisi Sebelum Go-Live

Semua placeholder ditandai jelas dalam kode. **Jangan deploy ke production sebelum mengganti:**

1. **`src/data/site.ts`**
   - `contact.whatsapp` — ganti nomor WhatsApp asli (format `62xxxxxxxxxx`, tanpa tanda `+`)
   - `contact.email`
   - `location.fullAddress` — alamat lengkap workshop/kantor
   - `location.mapsEmbedUrl`, `latitude`, `longitude` — jika ingin menampilkan peta asli
   - `social.*` — username Instagram/Facebook/TikTok jika ada
   - `seo.siteUrl` — ganti dengan domain asli setelah domain dibeli

2. **Gambar** (`public/images/**`) — seluruh gambar produk, portofolio, galeri, dan foto workshop
   saat ini adalah **placeholder bergaya ilustrasi** (dibuat otomatis, bukan foto asli), agar
   struktur halaman bisa langsung dipakai. Ganti dengan foto asli produk/workshop/project sebelum
   website tayang, supaya tidak menampilkan visual yang menyesatkan.

3. **`src/data/portfolio.ts`** — seluruh entri masih berupa struktur placeholder
   (`[Nama Project]`, `[Lokasi Project]`). Ganti dengan project yang benar-benar pernah
   dikerjakan. Jangan mempublikasikan project yang belum pernah dikerjakan.

4. **`src/components/Testimonials.tsx`** — saat ini menampilkan placeholder testimoni. Ganti
   dengan testimoni asli dari pelanggan (dengan izin pelanggan) atau hapus section ini dari
   `src/app/page.tsx` jika belum ada testimoni yang bisa ditampilkan.

5. **`src/data/products.ts`** — data produk (spesifikasi, ukuran, material) dibuat berdasarkan
   deskripsi umum di brief. Sesuaikan dengan spesifikasi produk asli sebelum tayang.

6. Data yang **sengaja tidak dicantumkan** karena tidak diberikan di brief (dan sebaiknya tidak
   dikarang): tahun berdiri perusahaan, jumlah pelanggan/project, sertifikasi, penghargaan,
   kapasitas produksi. Tambahkan section terkait jika data ini sudah tersedia.

## Fitur yang Dibuat

- Company profile lengkap (Beranda, Tentang Kami, Portofolio, Galeri, Kontak, FAQ)
- Katalog produk dengan 5 kategori (Whiteboard, Whiteboard Magnetik, Glassboard, Blackboard,
  Custom Board) dan halaman detail produk dinamis (`/produk/[slug]`)
- **Product Finder** — kuis interaktif 3 langkah (frontend-only, tanpa AI/backend) yang
  merekomendasikan produk sesuai kebutuhan pengguna
- Sistem artikel/blog untuk SEO (`/artikel/[slug]`) dengan 6 artikel yang benar-benar informatif
- Filter kategori di halaman Produk, Portofolio, dan Galeri (client-side, tanpa reload halaman)
- CTA WhatsApp dengan pesan otomatis yang menyebutkan nama produk, tersedia di Hero, halaman
  produk, section custom, Kontak, sticky mobile bar, dan navbar
- FAQ accordion dengan structured data `FAQPage`
- Breadcrumb dengan structured data `BreadcrumbList`
- Sitemap dan robots.txt otomatis (`next-sitemap` API bawaan Next.js)
- Structured data `LocalBusiness`, `Product`, `Article`, `FAQPage`, `BreadcrumbList` — hanya
  berisi data yang benar-benar ada di konten (tidak ada rating/review/harga palsu)
- Mobile-first responsive design (diuji pada breakpoint 375px–1920px), sticky WhatsApp bar khusus
  mobile, hamburger menu dengan slide-in panel

## SEO yang Diterapkan

- Next.js Metadata API di setiap halaman (title, description, canonical, Open Graph, Twitter Card)
- Keyword ditempatkan secara natural di homepage, produk, dan artikel (tanpa keyword stuffing)
- Local SEO: area layanan (Sukoharjo, Solo, Karanganyar, Sragen, Boyolali, Klaten, Wonogiri)
  disebutkan di halaman Tentang Kami dan structured data `LocalBusiness`
- Internal linking: Produk ↔ Artikel terkait, Produk ↔ Produk terkait, Footer ke seluruh halaman
  utama
- Satu H1 per halaman, hierarki heading yang konsisten
- `next/image` untuk seluruh gambar (lazy loading otomatis, format modern)

## Checklist Sebelum Deploy

- [ ] Ganti seluruh data placeholder di `src/data/site.ts` (WhatsApp, email, alamat)
- [ ] Ganti seluruh gambar placeholder dengan foto asli
- [ ] Isi data portofolio dengan project asli
- [ ] Isi atau hapus section testimoni
- [ ] Verifikasi ulang spesifikasi produk di `src/data/products.ts`
- [ ] Set `seo.siteUrl` ke domain final di `src/data/site.ts`
- [ ] Jalankan `npm run lint`, `npx tsc --noEmit`, dan `npm run build` — pastikan tidak ada error
- [ ] Cek tampilan di breakpoint 375px, 390px, 430px, 768px, 1024px, 1280px, 1440px, 1920px
- [ ] Submit `sitemap.xml` ke Google Search Console setelah domain live
- [ ] Daftarkan Google Business Profile dengan alamat dan nomor yang sama dengan website
