import { Ruler } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { customWhatsAppMessage } from "@/lib/whatsapp";

export function CustomBoardSection() {
  return (
    <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-line bg-white p-6 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
      <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
        <Ruler className="h-7 w-7" strokeWidth={2} />
      </span>
      <div>
        <h2 className="text-xl font-bold text-navy sm:text-2xl">
          Butuh Ukuran atau Spesifikasi Khusus?
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink/65">
          Setiap kebutuhan dapat berbeda. Pelanggan dapat berkonsultasi mengenai ukuran, material,
          desain, maupun kebutuhan tambahan lainnya sebelum menentukan pesanan.
        </p>
      </div>
      <div className="lg:shrink-0">
        <WhatsAppButton message={customWhatsAppMessage()} size="lg" className="w-full lg:w-auto">
          Konsultasikan Kebutuhan Anda
        </WhatsAppButton>
      </div>
    </div>
  );
}
