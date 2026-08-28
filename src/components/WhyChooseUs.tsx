import { Factory, Ruler, HeadphonesIcon, Layers } from "lucide-react";

const reasons = [
  {
    icon: Factory,
    title: "Fokus pada Produksi Papan Tulis",
    description:
      "Kami berfokus pada produksi berbagai jenis papan tulis, sehingga proses produksi dapat lebih terarah sesuai kebutuhan pelanggan.",
  },
  {
    icon: Ruler,
    title: "Ukuran Fleksibel",
    description:
      "Tersedia pilihan ukuran standar maupun ukuran custom sesuai dimensi ruangan Anda.",
  },
  {
    icon: Layers,
    title: "Pilihan Material",
    description:
      "Berbagai jenis permukaan tersedia, mulai dari melamin, magnetik, hingga kaca tempered.",
  },
  {
    icon: HeadphonesIcon,
    title: "Konsultasi Responsif",
    description:
      "Tim kami siap membantu menjawab pertanyaan dan memberikan rekomendasi melalui WhatsApp.",
  },
];

export function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {reasons.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="rounded-xl border border-line bg-white p-5 transition-shadow hover:shadow-md hover:shadow-navy/5 sm:p-6"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white">
            <Icon className="h-5 w-5" strokeWidth={2} />
          </span>
          <h3 className="mt-4 text-[15px] font-bold text-navy">{title}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-ink/60 sm:text-sm">{description}</p>
        </div>
      ))}
    </div>
  );
}
