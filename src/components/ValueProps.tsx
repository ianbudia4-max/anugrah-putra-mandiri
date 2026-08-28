import { Ruler, LayoutGrid, ShieldCheck, MessagesSquare } from "lucide-react";

const items = [
  {
    icon: Ruler,
    title: "Custom Ukuran",
    description: "Papan tulis dapat dibuat sesuai ukuran ruangan dan kebutuhan Anda.",
  },
  {
    icon: LayoutGrid,
    title: "Beragam Pilihan Produk",
    description: "Whiteboard, whiteboard magnetik, glassboard, blackboard, hingga custom board.",
  },
  {
    icon: ShieldCheck,
    title: "Material Berkualitas",
    description: "Menggunakan material yang dipilih untuk daya tahan pemakaian jangka panjang.",
  },
  {
    icon: MessagesSquare,
    title: "Konsultasi Kebutuhan",
    description: "Tim kami siap membantu menentukan produk yang paling sesuai kebutuhan Anda.",
  },
];

export function ValueProps() {
  return (
    <section className="border-b border-line bg-white py-12 sm:py-14">
      <div className="container-app grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col items-start">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue/10 text-blue">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </span>
            <h3 className="mt-3.5 text-[15px] font-bold text-navy sm:text-base">{title}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-ink/60 sm:text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
