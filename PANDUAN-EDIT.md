# Panduan Edit Website APM

Panduan ini menunjukkan file mana yang harus dibuka untuk tiap jenis perubahan yang paling sering dibutuhkan. Semua path di bawah ini relatif dari folder utama project (`apm-website/`).

---

## 1. Alamat, Nomor WhatsApp, Email, Jam Buka, Sosial Media

**File: `src/data/site.ts`**

Ini "pusat data" website — hampir semua bagian situs (navbar, footer, tombol WhatsApp, SEO) mengambil data dari sini. Jadi cukup edit satu file ini, perubahan otomatis muncul di semua halaman.

```ts
contact: {
  whatsapp: "6281234567890",       // nomor WA tujuan, format 62xxxxxxxxxx (tanpa + atau spasi)
  whatsappDisplay: "+62 812-3456-7890", // nomor yang DITAMPILKAN ke pengunjung
  email: "[email protected]",
  phone: "",
},

location: {
  fullAddress: "[Alamat Lengkap Belum Tersedia], Sukoharjo, Jawa Tengah", // ganti dengan alamat lengkap
  mapsEmbedUrl: "", // isi link embed Google Maps kalau mau tampilkan peta
},

hours: {
  weekday: "08.00 – 17.00",
  saturday: "08.00 – 14.00",
  sunday: "Tutup",
},

social: {
  instagram: "", // isi username saja, tanpa @, contoh: "apm.papantulis"
  facebook: "",
},
```

⚠️ Penting: nomor `whatsapp` harus format angka saja (`62...`), sedangkan `whatsappDisplay` boleh diformat bebas dengan spasi/strip untuk tampilan.

---

## 2. Background Biru Kotak-Kotak (Hero / bagian atas homepage)

**File: `src/components/Hero.tsx`** (baris ±14–22)

```tsx
<div
  className="pointer-events-none absolute inset-0 opacity-[0.06]"
  style={{
    backgroundImage:
      "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
    backgroundSize: "44px 44px",
  }}
  aria-hidden="true"
/>
```

- `opacity-[0.06]` → seberapa terang garis kotak-kotaknya (0.06 = samar; naikkan misalnya ke `0.12` supaya lebih terlihat).
- `backgroundSize: "44px 44px"` → ukuran satu kotak grid (perbesar angka = kotak lebih besar/jarang).
- Warna dasar birunya sendiri berasal dari class `bg-navy` di elemen `<section>` tepat di atasnya (baris ±13). Untuk ganti warna dasar, lihat bagian **#4 Warna Tema** di bawah.

Pola grid serupa juga dipakai di **`src/components/CTASection.tsx`** (bagian ajakan konsultasi sebelum footer) — strukturnya sama persis.

---

## 3. Logo

**Ganti file gambar:** `public/images/logo/apm-logo.png`

Cukup timpa file ini dengan logo baru (nama file & lokasi harus tetap sama, atau ubah juga rujukannya di `src/components/Navbar.tsx` baris ±52 kalau nama file berubah).

**Ganti ikon tab browser (favicon):**
- `src/app/favicon.ico`
- `src/app/icon.png`
- `src/app/apple-icon.png`

---

## 4. Warna Tema (Navy, Biru, Orange)

**File: `src/app/globals.css`** (baris ±4–8)

```css
--color-navy: #0f2747;       /* warna gelap utama (header, hero, footer) */
--color-navy-dark: #0a1a30;  /* varian lebih gelap, untuk hover dsb */
--color-blue: #2563eb;       /* warna aksen biru (tombol, link aktif) */
--color-blue-dark: #1d4ed8;  /* biru untuk hover */
--color-orange: #f59e0b;     /* warna aksen oranye (label kecil) */
```

Ganti kode hex-nya saja; otomatis berubah di seluruh situs karena semua komponen memakai variabel warna ini (class seperti `bg-navy`, `text-blue`, dll).

---

## 5. Menu Navigasi (Navbar & Menu Mobile)

**File: `src/components/Navbar.tsx`** (baris ±12–20)

```tsx
const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Produk", href: "/produk" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Galeri", href: "/galeri" },
  { label: "Artikel", href: "/artikel" },
  { label: "Kontak", href: "/kontak" },
];
```

Tambah/hapus/ubah urutan menu cukup edit array ini. Menu mobile (`src/components/MobileMenu.tsx`) otomatis ikut karena memakai data yang sama — tidak perlu edit dua tempat.

---

## 6. Produk (Nama, Kategori, Harga, Deskripsi, Gambar)

**File: `src/data/products.ts`**

Setiap produk adalah satu objek dalam array, contoh:

```ts
{
  slug: "whiteboard-standar",
  name: "Whiteboard Standar",
  category: "Whiteboard",
  shortDescription: "...",
  // ... field lain seperti harga, gambar, spesifikasi
}
```

- `slug` menentukan URL halaman produk (`/produk/whiteboard-standar`) — jangan pakai spasi/simbol.
- Gambar produk disimpan di `public/images/products/` — tinggal timpa file dengan nama yang sama, atau tambah file baru lalu ubah path-nya di data ini.
- Kategori produk (Whiteboard, Glassboard, dst) didefinisikan di bagian atas file yang sama (`productCategories`).

---

## 7. Konten Halaman Lain (Tentang Kami, FAQ, Testimoni, Portofolio, Artikel)

| Konten | File data |
|---|---|
| Portofolio / proyek terpasang | `src/data/portfolio.ts` |
| Pertanyaan umum (FAQ) | `src/data/faq.ts` |
| Artikel/blog | `src/data/articles.ts` |
| Testimoni pelanggan | `src/components/Testimonials.tsx` (data ada langsung di file ini) |
| Isi halaman "Tentang Kami" | `src/app/tentang-kami/page.tsx` |
| Isi halaman "Kontak" | `src/app/kontak/page.tsx` |

Pola semua file data (`.ts`) sama: array of object, tinggal tambah/edit/hapus entri, mengikuti struktur yang sudah ada.

---

## 8. Teks Judul & Deskripsi di Homepage (Hero Section)

**File: `src/components/Hero.tsx`** (baris ±31–42)

```tsx
<h1>Solusi Papan Tulis untuk Berbagai Kebutuhan</h1>
<p>Anugrah Putra Mandiri menyediakan berbagai pilihan papan tulis untuk sekolah, kantor, instansi, ruang meeting, dan kebutuhan custom.</p>
```

Gambar hero (foto besar di sisi kanan) ada di baris ±79, path-nya `public/images/products/whiteboard-magnetik.jpg` — timpa file ini untuk ganti foto.

---

## 9. SEO (Judul Tab Browser, Deskripsi di Google, Kata Kunci)

**File: `src/data/site.ts`**, bagian `seo: { ... }` di paling bawah — judul default, deskripsi, dan daftar `keywords` bisa diedit di sini.

---

## Tips Umum

- **Semua teks berbahasa Indonesia langsung ada di dalam file `.tsx`/`.ts`** — cari kata yang ingin diubah pakai fitur *search* editor (Ctrl+F / Cmd+F pada file, atau "Find in Files" di VS Code) supaya cepat ketemu filenya.
- Setelah edit, jalankan `npm run dev` lalu buka `localhost:3000` untuk lihat hasil sebelum publish.
- Semua gambar (`public/images/...`) bisa langsung ditimpa (nama file harus sama) tanpa perlu ubah kode, selama nama filenya tidak diganti.
- Kalau ragu, **jangan hapus struktur `{ }` / `[ ]` / tanda kutip** saat mengedit teks — cukup ganti teks yang ada di antara tanda kutip `"..."` saja.
