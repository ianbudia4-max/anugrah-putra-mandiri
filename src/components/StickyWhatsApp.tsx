import { MessageCircle } from "lucide-react";
import { getWhatsAppLink, generalWhatsAppMessage } from "@/lib/whatsapp";

export function StickyWhatsApp() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 backdrop-blur lg:hidden [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]">
      <a
        href={getWhatsAppLink(generalWhatsAppMessage())}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue text-[15px] font-semibold text-white shadow-lg shadow-blue/25 active:bg-blue-dark"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={2.25} />
        Konsultasi via WhatsApp
      </a>
    </div>
  );
}
