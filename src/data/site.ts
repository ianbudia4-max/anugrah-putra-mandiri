
export const site = {
  businessName: "Anugrah Putra Mandiri",
  shortName: "APM",
  tagline: "Produsen Papan Tulis & Papan Tulis Custom",
  description:
    "Anugrah Putra Mandiri menyediakan berbagai jenis papan tulis seperti whiteboard, papan tulis magnetik, glassboard, dan papan tulis custom untuk sekolah, kantor, instansi, dan berbagai kebutuhan.",

  location: {
    city: "Sukoharjo",
    province: "Jawa Tengah",
    country: "Indonesia",
    fullAddress: "Jl. Kencur, Bakrejo, Ngemplak, Kec. Sukoharjo, Kabupaten Sukoharjo, Jawa Tengah 57511",
    areaServed: [
      "Sukoharjo",
      "Solo (Surakarta)",
      "Karanganyar",
      "Sragen",
      "Boyolali",
      "Klaten",
      "Wonogiri",
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63263.37546823783!2d110.75255312167971!3d-7.687338099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3d24a4487c93%3A0x9fa924f155174ec9!2sPapan%20Tulis%20%2F%20White%20board%20sukoharjo.!5e0!3m2!1sid!2sid!4v1787918712376!5m2!1sid!2sid", // isi dengan embed URL Google Maps saat tersedia
    latitude: null as number | null,
    longitude: null as number | null,
  },

  contact: {
    whatsapp: "6285786066640", // [Nomor WhatsApp] — ganti dengan nomor asli, format 62xxxxxxxxxx
    whatsappDisplay: "+62 857-860-666-40",
  },

  hours: {
    weekday: "08.00 – 17.00",
    saturday: "08.00 – 14.00",
    sunday: "Tutup",
  },

  social: {
    instagram: "", // isi username tanpa @ jika tersedia, contoh: "apm.papantulis"
    facebook: "",
    tiktok: "",
    youtube: "",
  },

  seo: {
    siteUrl: "https://www.apmpapantulis.com", // ganti dengan domain asli saat sudah tersedia
    defaultTitle: "Anugrah Putra Mandiri | Produsen Papan Tulis & Papan Tulis Custom",
    defaultDescription:
      "Anugrah Putra Mandiri menyediakan berbagai jenis papan tulis seperti whiteboard, papan tulis magnetik, glassboard, dan papan tulis custom untuk sekolah, kantor, instansi, dan berbagai kebutuhan.",
    ogImage: "/images/logo/apm-logo.png",
    keywords: [
      "papan tulis",
      "papan tulis custom",
      "produsen papan tulis",
      "jasa pembuatan papan tulis",
      "whiteboard",
      "whiteboard custom",
      "papan tulis magnetik",
      "glassboard",
      "papan tulis kaca",
      "papan tulis Sukoharjo",
      "papan tulis Solo",
      "produsen papan tulis Sukoharjo",
      "papan tulis custom Solo",
      "papan tulis sukoharjo",
      "papan tulis jawa tengah",
      "papan tulis magelang",
      "papan tulis salatiga",
      "papan tulis murah",
    ],
  },
} as const;

export type Site = typeof site;
