import { MessageCircle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { generalWhatsAppMessage } from "@/lib/whatsapp";

interface CTASectionProps {
  title?: string;
  description?: string;
  message?: string;
  buttonLabel?: string;
}

export function CTASection({
  title = "Siap Memesan atau Ingin Bertanya Dahulu?",
  description = "Tim kami siap membantu Anda menentukan jenis dan ukuran papan tulis yang paling sesuai dengan kebutuhan Anda.",
  message,
  buttonLabel = "Konsultasi Sekarang",
}: CTASectionProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-navy px-6 py-12 text-center sm:px-10 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-xl">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue/15 text-blue">
          <MessageCircle className="h-6 w-6" strokeWidth={2.25} />
        </span>
        <h2 className="text-balance mt-4 text-xl font-bold text-white sm:text-2xl">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">{description}</p>
        <div className="mt-7">
          <WhatsAppButton message={message ?? generalWhatsAppMessage()} size="lg">
            {buttonLabel}
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
