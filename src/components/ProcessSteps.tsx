const steps = [
  {
    number: "01",
    title: "Konsultasi",
    description: "Hubungi kami via WhatsApp untuk menyampaikan kebutuhan papan tulis Anda.",
  },
  {
    number: "02",
    title: "Rekomendasi Produk",
    description: "Tim kami membantu menentukan jenis, ukuran, dan spesifikasi yang sesuai.",
  },
  {
    number: "03",
    title: "Konfirmasi Pesanan",
    description: "Setelah spesifikasi disepakati, pesanan akan diproses sesuai kesepakatan.",
  },
  {
    number: "04",
    title: "Produksi & Pengiriman",
    description: "Papan tulis diproduksi sesuai pesanan lalu dikirim atau siap diambil.",
  },
];

export function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <div key={step.number} className="relative border-t-2 border-line pt-5 pl-0.5 pr-5">
          <span className="text-3xl font-extrabold text-blue/25">{step.number}</span>
          <h3 className="mt-2 text-[15px] font-bold text-navy">{step.title}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-ink/60 sm:text-sm">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
